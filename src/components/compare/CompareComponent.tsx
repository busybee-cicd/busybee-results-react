import * as React from 'react';
import DiffComponent from './DiffComponent';
import SideBySideComponent from './SideBySideComponent';
import { Button, ButtonGroup } from 'reactstrap';
import cx from 'classnames';
import style from './CompareStyle.css';
import * as _ from 'lodash';
import ReactJson from 'react-json-view';

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
        size='xs'
        color="danger"
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

  getErrorComponent() {
    if (!this.props.error) { return; }

    const style = cx({
      'd-none': this.state.selected !== 'error',
      'w-100': true
    });

    return (
      <div className={style}>
        <ReactJson name='error' src={this.props.error} />
      </div>
    )
  }

  render() {

    let Nav;
    let NavBtns = _.reject([this.getDiffBtn(), this.getErrorBtn()], (i) => i === undefined);

    if (NavBtns.length > 0) {
      // only display sideBySideBtn if it's not the only option
      let SideBySideBtn = (
        <Button
          color="info"
          onClick={() => this.setState({selected: 'sideBySide'})}
          active={this.state.selected === 'sideBySide'}>side-by-side</Button>
      );

      NavBtns.unshift(SideBySideBtn);

      Nav = (
        <div className={cx(style.nav, 'd-flex flex-row')}>
          <ButtonGroup size='xs'>
            {NavBtns}
          </ButtonGroup>
        </div>
      )
    }


    return (
      <div className='d-flex flex-column'>
        {Nav}
        <div className='d-flex flex-row'>
          {this.getSideBySideComponent()}
          {this.getDiffComponent()}
          {this.getErrorComponent()}
        </div>
      </div>
    )
  }
}
