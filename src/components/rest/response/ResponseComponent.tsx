import cx from 'classnames';
import * as React from 'react';
import { Collapse, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import style from './ResponseStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import CompareComponent from '../../compare/CompareComponent';

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

  getTab(tabId:string) {
    let responsePart = this.props[tabId];
    let Content;
    if (responsePart) {
      if (responsePart.actual) {
        Content = (
          <TabPane tabId={tabId}>
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
            <NavItem className='nav-item'>
              <NavLink
                className={cx({ active: this.state.activeTab === 'status' })}
                onClick={this.selectTab.bind(this, 'status')} >
                Status {this.getPassIcon(this.props.status.pass)}
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink
                className={cx({ active: this.state.activeTab === 'headers' })}
                onClick={this.selectTab.bind(this, 'headers')} >
                Headers {this.getPassIcon(this.props.headers.pass)}
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink
                className={cx({ active: this.state.activeTab === 'body' })}
                onClick={this.selectTab.bind(this, 'body')} >
                Body {this.getPassIcon(this.props.body.pass)}
              </NavLink>
            </NavItem>
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
