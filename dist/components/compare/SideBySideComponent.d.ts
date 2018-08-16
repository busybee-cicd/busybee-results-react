import * as React from 'react';
export interface SideBySideComponentProps {
    expected: any;
    actual: any;
}
export default class SideBySideComponent extends React.Component<SideBySideComponentProps> {
    getView(label: string): JSX.Element;
    getExpected(): JSX.Element | undefined;
    render(): JSX.Element;
}
