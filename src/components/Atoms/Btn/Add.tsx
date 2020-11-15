import React, { useEffect } from "react";

interface Props {
  txt: string;
  click?: any;
}
const Add: React.FC<Props> = (props) => {
  let count;
  return (
    <button
      type="button"
      className="btn insertBox-addBtn"
      onClick={props.click}
    >
      <span className="addBtn"></span>
      <div>{count}</div>
      <span className="insertBox-addBtn__txt">{props.txt}</span>
    </button>
  );
};

export default Add;
