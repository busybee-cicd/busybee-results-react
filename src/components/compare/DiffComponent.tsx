import cx from 'classnames';
import * as React from 'react';
import { VirtualDiffViewer } from 'virtual-react-json-diff';
import style from './DiffStyle.module.css';

export interface DiffComponentProps {
  expected: any,
  actual: any
}

export default class StatusComponent extends React.Component<DiffComponentProps> {

  render() {
    return (
      <div className={cx(style.status, 'd-flex flex-column')}>
        <VirtualDiffViewer
          oldValue={this.props.expected}
          newValue={this.props.actual}
          height={400}
        />
      </div>
    )
  }
}
