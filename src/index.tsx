/**
 * @class ExampleComponent
 */
require('bootstrap/dist/css/bootstrap.min.css');
import './global/css/overwrites.css';
import * as React from 'react';
import './index.css';
import TestSuiteComponent from './components/TestSuiteComponent';
// import style from './index.css';
const moment = require('moment');
import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem} from 'reactstrap';


export interface BusybeeTestResults {
  runId: string;
  runTimestamp: number;
  data: any[];
}

export interface BusybeeTestResultsComponentProps {
  results: BusybeeTestResults;
}

interface BusybeeTestResultState {
  selectedTestSuiteIndex: number;
}
export default class BusybeeTestResultsComponent extends React.Component<BusybeeTestResultsComponentProps, BusybeeTestResultState> {

  constructor(props:BusybeeTestResultsComponentProps) {
    super(props);

    this.state = {
      selectedTestSuiteIndex: 0
    }

  }

  render() {
    let DropdownItems = this.props.results.data.map((ts, i) => {
      return (
        <DropdownItem key={i} onClick={() => this.setState({selectedTestSuiteIndex: i})}>
          {ts.id}
        </DropdownItem>
      )
    });

    return (
      <div>
        <Navbar dark color="dark" expand="md">
          <NavbarBrand>{moment(this.props.results.runTimestamp).format('MMMM DD YYYY, h:mm:ss a')}</NavbarBrand>
          <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  TestSuites
                </DropdownToggle>
                <DropdownMenu right>
                  {DropdownItems}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
        </Navbar>
        <TestSuiteComponent suite={this.props.results.data[this.state.selectedTestSuiteIndex]} />
      </div>
    )
  }
}
