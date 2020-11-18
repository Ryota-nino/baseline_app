import React from "react";
import { useHistory } from "react-router-dom";

interface Props {
  txt: string;
  isPlus: boolean;
  type: "button" | "submit";
  clickFunc?: any;
  linkUrl?: string;
  showModal?: any;
  setShowModal?: any;
}

const Action: React.FC<Props> = (props) => {
  const history = useHistory();

  const handleLink = (path: string) => {
    if (props.linkUrl) {
      history.push(path);
    }
  };

  const isPlusRender = () => {
    if (props.isPlus) {
      return <span className="plus"></span>;
    }
  };

  const onClickHandelr = () => {
    if (props.linkUrl) {
      handleLink(`/${props.linkUrl}`);
    } else {
      props.setShowModal(true);
    }
  };

  return (
    <button
      type={props.type}
      onClick={(e) => {
        if (props.type == "button") {
          onClickHandelr();
        } else {
          e.preventDefault();
          if (props.clickFunc) {
            props.clickFunc(e);
          }
        }
      }}
      className="btn btn--action"
    >
      {isPlusRender()}
      {props.txt}
    </button>
  );
};

export default Action;
