import * as React from 'react'
import { Collapse } from 'reactstrap';
import style from './ResponseStyle.css';
import cx from 'classnames';
import StatusComponent from './StatusComponent';

export interface ResponseComponentProps {
  status: any;
  headers: any;
  body: any;
}

interface ResponseComponentState {
  isOpen: boolean
}

export default class ResponseComponent extends React.Component<ResponseComponentProps, ResponseComponentState> {

  constructor(props:ResponseComponentProps) {
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
      <div className={cx(style.response, 'flex-column')}>
        <div className={cx(style.header, 'd-flex', 'align-items-center')} onClick={this.toggleOpen.bind(this)}>
          Response
        </div>
        <Collapse isOpen={this.state.isOpen}>
          <StatusComponent status={this.props.status} />
        </Collapse>
      </div>
    )
  }
}
