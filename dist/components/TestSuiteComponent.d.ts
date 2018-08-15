import * as React from 'react';
export interface TestSuiteComponentProps {
    suite: any;
}
export default class TestSuiteComponent extends React.Component<TestSuiteComponentProps> {
    render(): JSX.Element;
}
