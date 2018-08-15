/**
 * @class ExampleComponent
 */
import * as React from 'react';
export interface StatusComponentProps {
    status: any;
}
interface StatusComponentState {
    isOpen: boolean;
}
export default class StatusComponent extends React.Component<StatusComponentProps, StatusComponentState> {
    constructor(props: StatusComponentProps);
    render(): JSX.Element;
}
export {};
