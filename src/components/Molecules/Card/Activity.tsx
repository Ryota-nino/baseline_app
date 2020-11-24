import React from "react";
import { Link } from "react-router-dom";
import { AccountDefaultIcon } from "../../../assets/images/index";

interface Props {
  isSmall: boolean;
  textLengthCheckFunc: any;
  name?: string;
  content?: string;
  updated_at?: string;
}
const Activity: React.FC<Props> = (props) => {
  const viewTime = () => {
    if (!props.isSmall) {
      return (
        <>
          <div className="activity-card__wrap">
            <p className="activity-card__name">{props.name}</p>
            <p className="activity-card__time">{props.updated_at}</p>
          </div>
          <p className="activity-card__txt">
            {props.textLengthCheckFunc(props.content, 45)}
          </p>
        </>
      );
    } else {
      return (
        <>
          <p className="activity-card__name">{props.name}</p>
          <p className="activity-card__txt mb8">
            {props.textLengthCheckFunc(props.content, 45)}
          </p>
          <p className="activity-card__time">{props.updated_at}</p>
        </>
      );
    }
  };

  let activityName = props.isSmall ? "normal" : "small";
  return (
    <article className={"activity-card " + activityName}>
      <Link to="">
        <img className="activity-card__img" src={AccountDefaultIcon} alt="" />
        {viewTime()}
      </Link>
    </article>
  );
};

export default Activity;
