import * as React from 'react';
import DiffComponent from './DiffComponent';
import SideBySideComponent from './SideBySideComponent';
import { Button, ButtonGroup } from 'reactstrap';
import cx from 'classnames';

export interface CompareComponentProps {
  expected: any,
  actual: any,
  error: any | undefined,
  pass: boolean
}

interface CompareComponentState {
  selected: string
}

export default class CompareComponent extends React.Component<CompareComponentProps, CompareComponentState> {

  constructor(props:CompareComponentProps) {
    super(props);

    console.log(JSON.stringify(props));
    this.state = {
      selected: 'sideBySide'
    }
  }

  getErrorBtn() {
    if (!this.props.error) {
      return;
    }

    return (
      <Button
        size='sm'
        color="error"
        onClick={() => this.setState({selected: 'error'})}
        active={this.state.selected === 'error'}>Error</Button>
    )
  }

  getDiffBtn() {
    if (!this.props.expected) {
      return;
    }

    return (
      <Button
        size='sm'
        color="info"
        onClick={() => this.setState({selected: 'diff'})}
        active={this.state.selected === 'diff'}>diff</Button>
    )
  }

  getSideBySideComponent() {
    const style = cx({
      'd-none': this.state.selected !== 'sideBySide',
      'w-100': true
    });

    return (
      <div className={style}>
        <SideBySideComponent {...this.props}/>
      </div>
    )
  }

  getDiffComponent() {
    if (!this.props.expected) {
      return;
    }

    const style = cx({
      'd-none': this.state.selected !== 'diff',
      'w-100': true
    });

    return (
      <div className={style}>
        <DiffComponent {...this.props}/>
      </div>
    );
  }

  render() {

    return (
      <div className='d-flex flex-column'>
        <div className='d-flex flex-row-reverse'>
          <ButtonGroup>
            <Button
              size='sm'
              color="info"
              onClick={() => this.setState({selected: 'sideBySide'})}
              active={this.state.selected === 'sideBySide'}>side-by-side</Button>
            {this.getDiffBtn()}
            {this.getErrorBtn()}
          </ButtonGroup>
        </div>
        <div className='d-flex flex-row'>
          {this.getSideBySideComponent()}
          {this.getDiffComponent()}
        </div>
      </div>
    )
  }
}
