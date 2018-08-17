import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import * as _ from 'lodash';
import * as React from 'react';
import { Collapse, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import CompareComponent from '../../compare/CompareComponent';
import PassFailIconComponent from '../../PassFailIconComponent';
import style from './ResponseStyle.css';

export interface ResponseComponentProps {
  status: any;
  headers: any;
  body: any;
}

interface ResponseComponentState {
  isOpen: boolean,
  activeTab: string
}

export default class ResponseComponent extends React.Component<ResponseComponentProps, ResponseComponentState> {

  constructor(props:ResponseComponentProps) {
    super(props);

    this.state = {
      isOpen: false,
      activeTab: 'status'
    }
  }

  toggleOpen() {
    this.setState({isOpen: !this.state.isOpen});
  }

  selectTab(tab:string) {
    this.setState({activeTab: tab});
  }

  getPassIcon(pass:boolean) {
    let icon = pass ? faCheckCircle : faExclamationCircle;
    let color = pass ? 'green' : 'red';

    return <FontAwesomeIcon icon={icon} style={{color}} />
  }

  getNavItem(partName:string) {
    let responsePart = this.props[partName];
    if (!responsePart) { return; }

    return (
      <NavItem className='nav-item'>
        <NavLink
          className={cx({ active: this.state.activeTab === partName })}
          onClick={this.selectTab.bind(this, partName)} >
          {_.upperFirst(partName)} <PassFailIconComponent pass={responsePart.pass}/>
        </NavLink>
      </NavItem>
    )
  }

  getTab(partName:string) {
    let responsePart = this.props[partName];
    if (!responsePart) { return; }

    let Content;
    if (responsePart) {
      if (responsePart.actual) {
        Content = (
          <TabPane tabId={partName}>
            <CompareComponent {...responsePart} />
          </TabPane>
        )
      }
    }

    return Content;
  }

  render() {
    return (
      <div className={cx(style.response, 'flex-column')}>
        <div className={cx(style.header, 'd-flex', 'align-items-center')} onClick={this.toggleOpen.bind(this)}>
          Response
        </div>
        <Collapse isOpen={this.state.isOpen}>
          <Nav tabs>
            {this.getNavItem('status')}
            {this.getNavItem('headers')}
            {this.getNavItem('body')}
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            {this.getTab('status')}
            {this.getTab('headers')}
            {this.getTab('body')}
          </TabContent>
        </Collapse>
      </div>
    )
  }
}
