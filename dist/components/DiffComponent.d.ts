import * as React from 'react';
export interface DiffComponentProps {
    expected: any;
    actual: any;
}
interface DiffComponentState {
    showUnchanged: boolean;
}
export default class StatusComponent extends React.Component<DiffComponentProps, DiffComponentState> {
    constructor(props: DiffComponentProps);
    render(): JSX.Element;
}
export {};
