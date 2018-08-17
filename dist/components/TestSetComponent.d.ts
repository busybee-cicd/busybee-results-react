import * as React from 'react';
export interface TestSetComponentProps {
    suiteType: string;
    set: any;
}
interface TestSetComponentState {
    isOpen: boolean;
}
export default class TestSetComponent extends React.Component<TestSetComponentProps, TestSetComponentState> {
    constructor(props: TestSetComponentProps);
    toggleOpen(): void;
    render(): JSX.Element;
}
export {};
