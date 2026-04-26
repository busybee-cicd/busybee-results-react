import * as React from 'react'
import TestSetComponent from './TestSetComponent';
import style from './TestSuiteStyle.module.css';

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
      <div className={style.suite}>
        <div className={style.suiteHeader}>
          <h4>{ts.id}</h4>
          <div>{ts.summary.numberOfPassedTests}/{ts.summary.numberOfTests} Tests Passing ({percentPassing}%)</div>
        </div>
        <div className={style.sets}>{Sets}</div>
      </div>
    )
  }
}
