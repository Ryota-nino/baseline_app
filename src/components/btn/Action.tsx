import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import { isLabeledStatement } from 'typescript';

interface Props {
  txt: string;
  isPlus: boolean;
  linkUrl?: string;
  showModal?: any;
  setShowModal?: any;
}

const Action:React.FC<Props> = props => {
  const history = useHistory();

  const handleLink = (path:string) => {
    if(props.linkUrl) {
      history.push(path);
    }
  }

  const isPlusRender = () => {
    if(props.isPlus){
      return (
        <span className="plus"></span>
      )
    }
  };

  const onClickHandelr = () => {
    if(props.linkUrl) {
      handleLink(`/${props.linkUrl}`);
    } else {
      props.setShowModal(true);
    }
  }

  return (
    <button onClick={onClickHandelr} className="btn btn--action">{isPlusRender()}{props.txt}</button>
  );
  
}

export default Action;
