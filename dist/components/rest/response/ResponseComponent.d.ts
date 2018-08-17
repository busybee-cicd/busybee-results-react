import * as React from 'react';
export interface ResponseComponentProps {
    status: any;
    headers: any;
    body: any;
}
interface ResponseComponentState {
    isOpen: boolean;
    activeTab: string;
}
export default class ResponseComponent extends React.Component<ResponseComponentProps, ResponseComponentState> {
    constructor(props: ResponseComponentProps);
    toggleOpen(): void;
    selectTab(tab: string): void;
    getPassIcon(pass: boolean): JSX.Element;
    getNavItem(partName: string): JSX.Element | undefined;
    getTab(partName: string): any;
    render(): JSX.Element;
}
export {};
