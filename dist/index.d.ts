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
export default class BusybeeTestResultsComponent extends React.Component<BusybeeTestResultsComponentProps> {
    render(): JSX.Element;
}
