import * as React from 'react'
import { Container, Row } from 'reactstrap';
import TestSetComponent from './TestSetComponent';

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

    return (
      <Container>
        <Row>
          <h1>{ts.id}</h1>
        </Row>
        {Sets}
      </Container>
    )
  }
}
