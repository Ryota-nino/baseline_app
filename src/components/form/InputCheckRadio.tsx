import React from 'react';
import { CheckboxRadio } from './index';


interface Props {
    keyName?: string;
    className?: string;
    type: 'checkbox' | 'radio';
    txt: string;
    checkboxFunc?: any;
}

const InputCheckRadio:React.FC<Props> = props => {
  
  return (
    <label key={props.keyName} className={`input-component ${props.className}`}>
        <CheckboxRadio keyName={props.keyName} className={props.className} type={props.type} checkboxFunc={props.checkboxFunc ? props.checkboxFunc : ""}/>
        <span>{props.txt}</span>
    </label>
  );
}

export default InputCheckRadio;
