/**
 * @class ExampleComponent
 */
import * as React from 'react';
export interface RequestComponentProps {
    request: any;
}
interface RequestComponentState {
    isOpen: boolean;
}
export default class RequestComponent extends React.Component<RequestComponentProps, RequestComponentState> {
    constructor(props: RequestComponentProps);
    toggleOpen(): void;
    render(): JSX.Element;
}
export {};
