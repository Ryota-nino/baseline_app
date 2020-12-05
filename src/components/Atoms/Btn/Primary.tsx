import React from "react";

interface Props {
  txt: string;
  type: "button" | "submit";
  setShowModal?: any;
  Func?: any;
  disabledRule?: any;
}
const Primary: React.FC<Props> = (props) => {
  return (
    <button
      type={props.type}
      className="btn btn--primary"
      onClick={() => {
        if (props.setShowModal) {
          props.setShowModal(true);
        }
        if (props.Func) {
          props.Func();
        }
      }}
      disabled={props.disabledRule}
    >
      {props.txt}
    </button>
  );
};

export default Primary;
