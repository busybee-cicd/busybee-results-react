import * as React from 'react';
export interface ResponseComponentProps {
    status: any;
    headers: any;
    body: any;
}
interface ResponseComponentState {
    isOpen: boolean;
}
export default class ResponseComponent extends React.Component<ResponseComponentProps, ResponseComponentState> {
    constructor(props: ResponseComponentProps);
    toggleOpen(): void;
    render(): JSX.Element;
}
export {};
