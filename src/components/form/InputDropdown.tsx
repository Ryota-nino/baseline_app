import React from 'react';

const InputDropdown:React.FC = props => {
  
  return (
    <div className="input-dropdown">
        <p className="input-dropdown__heading">従業員数</p>
        <div className="input-dropdown__wrap">
            <select>
              <option value="100-200">100~200人</option>
              <option value="100-200">200~300人</option>
              <option value="100-200">300~400人</option>
              <option value="100-200">400~500人</option>
            </select>
        </div>
        </div>
  );
}

export default InputDropdown;
