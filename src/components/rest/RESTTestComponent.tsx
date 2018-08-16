import * as React from 'react'
import { Collapse } from 'reactstrap';
import style from './RESTTestStyle.css';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import RequestComponent from './request/RequestComponent';
import ResponseComponent from './response/ResponseComponent';

export interface RESTTestComponentProps {
  test: any
}

interface RESTTestComponentState {
  isOpen: boolean
}

export default class RESTTestComponent extends React.Component<RESTTestComponentProps, RESTTestComponentState> {

  constructor(props:RESTTestComponentProps) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  toggleOpen() {
    this.setState({isOpen: !this.state.isOpen});
  }

  getPassStatus() {
    let icon = this.props.test.pass ? faCheckCircle : faExclamationCircle;
    let color = this.props.test.pass ? 'green' : 'red';

    return <FontAwesomeIcon icon={icon} style={{color}} />
  }

  render() {
    const test = this.props.test;

    return (
      <div className={style.restTest}>
        <div className={cx(style.testHeader, 'd-flex', 'align-items-center')} onClick={this.toggleOpen.bind(this)}>
          <div className={style.title}>{test.id}</div>
          {this.getPassStatus()}
        </div>
        <Collapse className={style.testBody} isOpen={this.state.isOpen}>
          <RequestComponent request={test.request}/>
          <ResponseComponent status={test.status} headers={test.headers} body={test.body} />
        </Collapse>
      </div>
    )
  }
}
