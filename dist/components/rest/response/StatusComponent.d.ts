import * as React from 'react';
export interface DiffComponentProps {
    status: any;
}
interface DiffComponentState {
    isOpen: boolean;
    showUnchanged: boolean;
    showAnnotations: boolean;
    showTips: boolean;
}
export default class StatusComponent extends React.Component<DiffComponentProps, DiffComponentState> {
    constructor(props: DiffComponentProps);
    render(): JSX.Element;
}
export {};
