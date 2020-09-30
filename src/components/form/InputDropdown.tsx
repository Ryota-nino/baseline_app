import React from 'react';
import SelectBox from './SelectBox';

interface Props {
  ttl: string;
  selectObj: {value: string}[];
}

const InputDropdown:React.FC<Props> = props => {
  
  
  const renderSelectItem = ()=> {
    
    return Object.values(props.selectObj).map((data, index) => {
      return <option value={data.value}>{data.value}</option>;
    })
  };

  return (
    <div className="input-dropdown">
        {props.ttl != '' && <p className="input-dropdown__heading">{props.ttl}</p>}
        <div className="input-dropdown__wrap">
            <select>
              {renderSelectItem()}
            </select>
        </div>
        </div>
  );
}

export default InputDropdown;
