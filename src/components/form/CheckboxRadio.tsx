import React from 'react';
import {CheckIcon} from '../../assets/images/index';

interface Props {
    keyName?: string;
    className?: string;
    type: 'checkbox' | 'radio';
}

const Checkbox:React.FC<Props> = props => {
    let typeClass;
    if(props.type === 'checkbox') {
        typeClass = 'input-checkbox input-checkbox--normal';
    }
  return (
    <>
        <input id={`input-${props.keyName}`} className="check-radio-input" type={props.type}/>
        <label htmlFor={`input-${props.keyName}`} className={`${typeClass}`}><img src={CheckIcon} alt="" /></label>
    </>
  );
}

export default Checkbox;
