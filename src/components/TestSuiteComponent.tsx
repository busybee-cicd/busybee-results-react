import * as React from 'react'
import { Container, Row } from 'reactstrap';
import TestSetComponent from './TestSetComponent';
import style from './TestSuiteStyle.css';

export interface TestSuiteComponentProps {
  suite: any
}

export default class TestSuiteComponent extends React.Component<TestSuiteComponentProps> {
  render() {
    let ts = this.props.suite;
    let Sets = ts.testSets.map((s, i) => {
      return (
        <TestSetComponent key={i} set={s} suiteType={ts.type} />
      );
    })

    let percentPassing = Math.round(ts.summary.numberOfPassedTests / ts.summary.numberOfTests * 100);

    return (
      <Container>
        <Row>
          <div className={style.suiteHeader}>
            <h2>{ts.id}</h2>
            <div>{ts.summary.numberOfPassedTests}/{ts.summary.numberOfTests} Tests Passing ({percentPassing}%)</div>
          </div>
        </Row>
        {Sets}
      </Container>
    )
  }
}
