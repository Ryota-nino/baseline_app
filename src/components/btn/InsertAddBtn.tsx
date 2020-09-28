import React from 'react';

interface Props {
  txt: string;
}

const InsertAddBtn:React.FC<Props> = props => {
  return (
        <button className="btn insertBox-addBtn">
            <span className="addBtn"></span>
            <span className="insertBox-addBtn__txt">{props.txt}</span>
        </button>
  );
}

export default InsertAddBtn;
