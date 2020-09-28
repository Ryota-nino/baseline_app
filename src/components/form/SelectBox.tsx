import React from 'react';

const SelectBox:React.FC = () => {
  return (
        <div className="selectBox input--normal">
            <div>
                <select>
                  <option value="0">新着順</option>
                  <option value="1">古い順</option>
                </select>
            </div>
        </div>
  );
}

export default SelectBox;
