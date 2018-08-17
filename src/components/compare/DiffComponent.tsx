import cx from 'classnames';
import JsonDiffReact from 'jsondiffpatch-for-react';
import * as React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import style from './DiffStyle.css';

export interface DiffComponentProps {
  expected: any,
  actual: any
}

interface DiffComponentState {
  showUnchanged: boolean
}

export default class StatusComponent extends React.Component<DiffComponentProps, DiffComponentState> {

  constructor(props:DiffComponentProps) {
    super(props);

    this.state = {
      showUnchanged: true
    }
  }

  render() {
    return (
      <div className={cx(style.status, 'd-flex flex-column')}>
        <div className={cx(style.nav, 'd-flex')}>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                checked={this.state.showUnchanged}
                onChange={() => { this.setState({showUnchanged: !this.state.showUnchanged})} } />
              Show Unchanged
            </Label>
          </FormGroup>
        </div>
        <JsonDiffReact
          left={this.props.expected}
          right={this.props.actual}
          show={this.state.showUnchanged}
        />
      </div>
    )
  }
}
