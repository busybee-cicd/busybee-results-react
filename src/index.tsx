/**
 * @class ExampleComponent
 */
require('bootstrap/dist/css/bootstrap.min.css');

import * as React from 'react';
import './index.css';
import TestSuiteComponent from './components/TestSuiteComponent';
import {
  Navbar,
  NavbarBrand } from 'reactstrap';

export interface BusybeeTestResults {
  runId: string;
  runTimestamp: number;
  data: any[];
}

export interface BusybeeTestResultsComponentProps {
  results: BusybeeTestResults
}

export default class BusybeeTestResultsComponent extends React.Component<BusybeeTestResultsComponentProps> {

  render() {
    // let tr = this.props.results;

    // let TestSuites = tr.data.map((ts) => {
    //     return (
    //         <div key={ts.id}>
    //             <h2>{ts.id}</h2>
    //         </div>
    //     )
    // });

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Test Results</NavbarBrand>
        </Navbar>
        <TestSuiteComponent suite={this.props.results.data[0]} />
      </div>
    )
  }
}
