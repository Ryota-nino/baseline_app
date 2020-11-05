import React from 'react';
import {CheckIcon} from '../../assets/images/index';

interface Props {
    
    type: 'checkbox' | 'radio';
    checkboxFunc?: any;
    keyName?: string;
    id?: string;
    className?: string;
    txt?: string;
}

const Checkbox:React.FC<Props> = props => {
    let typeClass;
    if(props.type === 'checkbox') {
        typeClass = 'input-checkbox input-checkbox--normal';
    }
    const checkHandler = (e:any)=> {
      e.stopPropagation();
      if(props.checkboxFunc) {
        props.checkboxFunc(e.target.value);
      }
    }
    
    return (
      <>
          <input 
            onChange={checkHandler} 
            id={`input-pref${props.id}`}
            className="check-radio-input" 
            type={props.type} 
            value={props.txt}
            name="pref"
          />
          <label htmlFor={`input-pref${props.id}`} className={`${typeClass}`}><img src={CheckIcon} alt="" /></label>
      </>
    );
}

export default Checkbox;
