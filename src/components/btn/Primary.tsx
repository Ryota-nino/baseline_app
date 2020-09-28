import React from 'react';

interface Props {
  setShowModal: any;
}

const Primary:React.FC<Props> = props => {
  return (
    <button className="btn btn--primary" onClick={()=> props.setShowModal(true)}>活動を追加</button>
  );
}

export default Primary;
