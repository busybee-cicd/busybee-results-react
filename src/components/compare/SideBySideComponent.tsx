import * as React from 'react';
import ReactJson from 'react-json-view';

export interface SideBySideComponentProps {
  expected: any,
  actual: any
}

export default class SideBySideComponent extends React.Component<SideBySideComponentProps> {

  getView(label:string) {
    const Content =  typeof(this.props[label]) === 'object' ?
      <ReactJson name={label} src={this.props[label]} />
      : <div className={label}>{this.props[label]}</div>;

    return (
      <div className='w-50'>
        {Content}
      </div>
    )
  }

  getExpected() {
    if (!this.props.expected) {
      return;
    }

    return this.getView('expected');
  }

  render() {
    return (
      <div className='d-flex w-100'>
        {this.getExpected()}
        {this.getView('actual')}
      </div>
    )
  }
}
