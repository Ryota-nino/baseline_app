import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { forEachChild } from 'typescript';
import { AccountDefaultIcon } from '../../assets/images/index';


interface Props {
  isSmall: boolean;
}

const ActivityCard:React.FC<Props> = props => {
  

  const viewTime = () => {
    if(!props.isSmall) {
      return (
        <>
          <div className="activity-card__wrap">
            <p className="activity-card__name">山本 仁</p>
            <p className="activity-card__time">今日 13:30</p>
          </div>
          <p className="activity-card__txt">マイナビ就職セミナーに行って来た話した企業で、DeNAとgoodpatchと9/12に面談...</p>
        </>
      );
    } else {
      return (
        <>
            <p className="activity-card__name">山本 仁</p>
            <p className="activity-card__txt mb8">マイナビ就職セミナーに行って来た話した企業で、DeNAとgoodpatchと9/12に面談...</p>
            <p className="activity-card__time">今日 13:30</p>
        </>
      )
    }
  }

  let activityName = props.isSmall ? 'normal' : 'small';

  return (
        <article className={"activity-card " + activityName}>
            <Link to="">
                <img className="activity-card__img" src={AccountDefaultIcon} alt=""/>
                {viewTime()}
            </Link>
        </article>
  );
}

export default ActivityCard;
