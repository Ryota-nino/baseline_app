import React from 'react';
import {CheckIcon} from '../../assets/images/index';

interface Props {
    type: string;
    ttl: string;
    placeholder: string;
    isRequired: boolean;
    unit?: string;
    maxLength?: number;
}

const Checkbox:React.FC<Props> = props => {
  return (
        <label className="free-word"> 
            <h3 className="heading6">{props.ttl}{props.isRequired && <span className="cAttention">*</span>}</h3>
            <input type={props.type} placeholder={props.placeholder} required={props.isRequired} maxLength={props.maxLength} />{props.unit}
        </label>
  );
}

export default Checkbox;
