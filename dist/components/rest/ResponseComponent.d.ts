/**
 * @class ExampleComponent
 */
import * as React from 'react';
export interface ResponseComponentProps {
    request: any;
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
