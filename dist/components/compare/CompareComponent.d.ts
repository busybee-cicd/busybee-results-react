import * as React from 'react';
export interface CompareComponentProps {
    expected: any;
    actual: any;
    error: any | undefined;
    pass: boolean;
}
interface CompareComponentState {
    selected: string;
}
export default class CompareComponent extends React.Component<CompareComponentProps, CompareComponentState> {
    constructor(props: CompareComponentProps);
    getErrorBtn(): JSX.Element | undefined;
    getDiffBtn(): JSX.Element | undefined;
    getSideBySideComponent(): JSX.Element;
    getDiffComponent(): JSX.Element | undefined;
    render(): JSX.Element;
}
export {};
