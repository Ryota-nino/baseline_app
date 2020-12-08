import React from "react";

interface Props {
  name: string;
  options: any;
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
          {props.options &&
            props.options.map((item: any) => {
              return <option value={item["id"]}>{item["name"]}</option>;
            })}
        </select>
      </div>
    </div>
  );
};

export default SelectBox;
