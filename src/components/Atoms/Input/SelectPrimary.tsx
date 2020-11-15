import React from "react";

interface Props {
  name: string;
  options: string[];
  required: boolean;
  selectFunc?: any;
}

const SelectBox: React.FC<Props> = (props) => {
  function changeHandler(e: any) {
    e.stopPropagation();
    if (props.selectFunc) {
      props.selectFunc(e.target.value);
    }
  }
  return (
    <div className="selectBox input--normal">
      <div>
        <select
          name={props.name}
          onChange={changeHandler}
          required={props.required}
        >
          {props.options.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectBox;
