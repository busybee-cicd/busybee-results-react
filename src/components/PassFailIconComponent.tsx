import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

export interface PassFailIconComponentProps {
  pass: boolean;
}

export default class PassFailIconComponent extends React.Component<PassFailIconComponentProps> {

  render() {
    const icon = this.props.pass ? faCheckCircle : faExclamationCircle;
    const color = this.props.pass ? 'lightgreen' : 'lightcoral';

    return <FontAwesomeIcon icon={icon} style={{color}} />
  }
}
