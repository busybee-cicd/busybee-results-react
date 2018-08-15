/**
 * @class ExampleComponent
 */

import * as React from 'react'
import { Collapse } from 'reactstrap';
import style from './RequestStyle.css';
import cx from 'classnames';
import ReactJson from 'react-json-view'

export interface RequestComponentProps {
  request: any
}

interface RequestComponentState {
  isOpen: boolean
}

export default class RequestComponent extends React.Component<RequestComponentProps, RequestComponentState> {

  constructor(props:RequestComponentProps) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  toggleOpen() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <div className={cx(style.request, 'flex-column')}>
        <div className={cx(style.header, 'd-flex', 'align-items-center')} onClick={this.toggleOpen.bind(this)}>
          Request
        </div>
        <Collapse isOpen={this.state.isOpen}>
          <ReactJson name="request" src={this.props.request} />
        </Collapse>
      </div>
    )
  }
}
