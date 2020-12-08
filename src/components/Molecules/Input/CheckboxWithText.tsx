import React from "react";
import { Checkbox } from "../../Atoms/Input/index";

interface Props {
  type: "checkbox" | "radio";
  txt: string;
  checkboxFunc?: any;
  checkedPref?: string[];
  id?: string;
  keyName?: string;
  className?: string;
  category?: string;
}

const CheckboxWithText: React.FC<Props> = (props) => {
  return (
    <label key={props.keyName} className={`input-component`}>
      <Checkbox
        keyName={props.keyName}
        className={props.keyName}
        category={props.category}
        type={props.type}
        id={props.id}
        checkboxFunc={props.checkboxFunc ? props.checkboxFunc : ""}
        txt={props.txt}
        checkedPref={props.checkedPref}
      />
      <span>{props.txt}</span>
    </label>
  );
};

export default CheckboxWithText;
