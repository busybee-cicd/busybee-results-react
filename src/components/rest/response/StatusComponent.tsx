/**
 * @class ExampleComponent
 */

import * as React from 'react'
// import { Collapse } from 'reactstrap';
// import style from './StatusStyle.css';
// import cx from 'classnames';
// import ReactJson from 'react-json-view'

export interface StatusComponentProps {
  status: any
}

interface StatusComponentState {
  isOpen: boolean
}

export default class StatusComponent extends React.Component<StatusComponentProps, StatusComponentState> {

  constructor(props:StatusComponentProps) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  render() {
    return (
      <div>
        <div>{this.props.status.actual}</div>
        <div>{this.props.status.expected}</div>
      </div>
    )
  }
}
