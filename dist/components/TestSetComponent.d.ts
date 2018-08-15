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
    getTitleStatus(): JSX.Element;
    toggleOpen(): void;
    render(): JSX.Element;
}
export {};
