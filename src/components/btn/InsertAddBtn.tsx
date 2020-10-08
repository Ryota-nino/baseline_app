import React,{useEffect} from 'react';

interface Props {
  txt: string;
  click?: any;
}

const InsertAddBtn:React.FC<Props> = props => {
  let count;

  return (
        <button className="btn insertBox-addBtn" onClick={props.click}>
            <span className="addBtn"></span>
            <div>{count}</div>
            <span className="insertBox-addBtn__txt">{props.txt}</span>
        </button>
  );
}

export default InsertAddBtn;
