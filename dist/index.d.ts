import './global/css/overwrites.css';
import * as React from 'react';
import './index.css';
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
    constructor(props: BusybeeTestResultsComponentProps);
    render(): JSX.Element;
}
export {};
