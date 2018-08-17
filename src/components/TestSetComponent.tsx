import cx from 'classnames';
import * as React from 'react';
import { Collapse, Row } from 'reactstrap';
import PassFailIconComponent from './PassFailIconComponent';
import RESTTestComponent from './rest/RESTTestComponent';
import style from './TestSetStyle.css';

export interface TestSetComponentProps {
  suiteType: string,
  set: any
}

interface TestSetComponentState {
  isOpen: boolean
}

export default class TestSetComponent extends React.Component<TestSetComponentProps, TestSetComponentState> {

  constructor(props:TestSetComponentProps) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  toggleOpen() {
    this.setState({isOpen: !this.state.isOpen});
  }


  render() {
    const ts = this.props.set;
    let Tests;
    if (this.props.suiteType === 'REST') {
      Tests = ts.tests.map((t, i) => {
        return (
          <RESTTestComponent key={i} test={t} />
        )
      });
    }

    let Errors;
    if (this.props.set.error) {
      Errors = (
        <div className={cx(style.error, 'd-flex flex-column')}>
          <div className={cx(style.header)}>
            {this.props.set.error.message}
          </div>
          <div className={cx(style.stack)}>
            {this.props.set.error.stack}
          </div>
        </div>
      )
    }

    return (
      <Row>
        <div className={cx(style.testSet, 'd-flex', 'w-100', 'flex-column')}>
          <div className={cx(style.header, 'd-flex', 'align-items-center', 'w-100')} onClick={this.toggleOpen.bind(this)}>
            <div className={style.title}>{ts.id}</div>
            <PassFailIconComponent pass={this.props.set.pass} />
          </div>
          <Collapse isOpen={this.state.isOpen}>
            {Tests}
            {Errors}
          </Collapse>
        </div>
      </Row>
    )
  }
}
