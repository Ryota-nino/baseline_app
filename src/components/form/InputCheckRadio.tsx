import React from 'react';
import { CheckboxRadio } from './index';


interface Props {
    keyName?: string;
    className?: string;
    type: 'checkbox' | 'radio';
    txt: string;
}

const InputCheckRadio:React.FC<Props> = props => {
  
  return (
    <label key={props.keyName} className={`input-component ${props.className}`}>
        <CheckboxRadio keyName={props.keyName} className={props.className} type={props.type}/>
        <span>{props.txt}</span>
    </label>
  );
}

export default InputCheckRadio;
