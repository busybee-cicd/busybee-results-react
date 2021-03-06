import * as React from 'react';
export interface RESTTestComponentProps {
    test: any;
}
interface RESTTestComponentState {
    isOpen: boolean;
}
export default class RESTTestComponent extends React.Component<RESTTestComponentProps, RESTTestComponentState> {
    constructor(props: RESTTestComponentProps);
    toggleOpen(): void;
    render(): JSX.Element;
}
export {};
