import cx from 'classnames';
import * as React from 'react';
import { Collapse } from 'reactstrap';
import PassFailIconComponent from '../PassFailIconComponent';
import RequestComponent from './request/RequestComponent';
import ResponseComponent from './response/ResponseComponent';
import style from './RESTTestStyle.css';

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

  render() {
    const test = this.props.test;

    return (
      <div className={style.restTest}>
        <div className={cx(style.testHeader, 'd-flex', 'align-items-center')} onClick={this.toggleOpen.bind(this)}>
          <div className={style.title}>{test.id}</div>
          <PassFailIconComponent pass={this.props.test.pass} />
        </div>
        <Collapse className={style.testBody} isOpen={this.state.isOpen}>
          <RequestComponent request={test.request}/>
          <ResponseComponent status={test.status} headers={test.headers} body={test.body} />
        </Collapse>
      </div>
    )
  }
}
