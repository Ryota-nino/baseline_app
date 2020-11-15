import React from "react";
import { Checkbox } from "../../Atoms/Input/index";

interface Props {
  id?: string;
  keyName?: string;
  className?: string;
  type: "checkbox" | "radio";
  txt: string;
  checkboxFunc?: any;
}

const CheckboxWithText: React.FC<Props> = (props) => {
  return (
    <label key={props.keyName} className={`input-component`}>
      <Checkbox
        keyName={props.keyName}
        className={props.keyName}
        type={props.type}
        id={props.id}
        checkboxFunc={props.checkboxFunc ? props.checkboxFunc : ""}
        txt={props.txt}
      />
      <span>{props.txt}</span>
    </label>
  );
};

export default CheckboxWithText;
