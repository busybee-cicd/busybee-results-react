import * as React from 'react'
import RESTTestComponent from './rest/RESTTestComponent';
import { Collapse, Row } from 'reactstrap';
import style from './TestSetStyle.css';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

export interface TestSetComponentProps {
  suiteType: string,
  set: any
}

interface TestSetComponentState {
  isOpen: boolean
}

export default class TestSetComponent extends React.Component<TestSetComponentProps, TestSetComponentState> {

  constructor(props:TestSetComponentProps) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  getTitleStatus() {
    let icon = this.props.set.pass ? faCheckCircle : faExclamationCircle;
    let color = this.props.set.pass ? 'green' : 'red';

    return <FontAwesomeIcon icon={icon} style={{color}} />
  }

  toggleOpen() {
    this.setState({isOpen: !this.state.isOpen});
  }


  render() {
    const ts = this.props.set;
    let Tests;
    if (this.props.suiteType === 'REST') {
      Tests = ts.tests.map((t, i) => {
        return (
          <RESTTestComponent key={i} test={t} />
        )
      });
    }

    return (
      <Row>
        <div className={cx(style.testSet, 'd-flex', 'w-100', 'flex-column')}>
          <div className={cx(style.header, 'd-flex', 'align-items-center', 'w-100')} onClick={this.toggleOpen.bind(this)}>
            <div className={style.title}>{ts.id}</div>
            {this.getTitleStatus()}
          </div>
          <Collapse isOpen={this.state.isOpen}>
            {Tests}
          </Collapse>
        </div>
      </Row>
    )
  }
}
