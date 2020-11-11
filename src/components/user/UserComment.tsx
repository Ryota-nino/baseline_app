import React, { useEffect, useState, useRef } from "react";
import {
  Avatar,
  ArrowIcon,
  PencilIcon,
  TrashIcon,
} from "../../assets/images/index";

interface Props {
  year: string;
  txt: string;
  updateTime: string;
  isArrow: boolean;
  type?: "user" | "mypage";
  clickFunc?: any;
  clickFunc2?: any;
}

const ActivityItem: React.FC<Props> = (props) => {
  const activityTxtEl = useRef<HTMLParagraphElement>(null);

  const setUrlText = (): void => {
    const reg = /((https?|ftp)(:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#]+))/;
    const txtEl: string = activityTxtEl.current!.innerText;
    const searchUrlTxt = txtEl.match(reg);
    activityTxtEl.current!.innerHTML = txtEl.replace(
      reg,
      `<a href="${searchUrlTxt![0]}">${searchUrlTxt![0]}</a>`
    );
  };

  useEffect((): void => {
    setUrlText();
  }, []);

  let [toggleMenu, setToggleMenu] = useState(false);
  const arrowClickHandler = (): void => {
    setToggleMenu(!toggleMenu);
  };

  const isArrowRender = () => {
    if (props.isArrow) {
      return (
        <div className={`activity-item__arrow`} onClick={arrowClickHandler}>
          <img src={ArrowIcon} alt="" />
        </div>
      );
    }
  };

  return (
    <article className="activity-item">
      <img src={Avatar} alt="" />
      <div className="activity-item__content">
        <div className="activity-item__head">
          <h1 className="activity-item__name">山本 仁</h1>
          <ul className="activity-item__list">
            <li>{props.year}</li>
            <li>&nbsp;|&nbsp;</li>
            <li>
              <time dateTime="2020-09-20T13:30">{props.updateTime}</time>
            </li>
          </ul>
          {props.type === "mypage" && isArrowRender()}
        </div>
        <p ref={activityTxtEl} className="activity-item__txt">
          {props.txt}
        </p>
      </div>
      {props.type === "mypage" && (
        <ul className={`activity-item-menu ${toggleMenu && "view"}`}>
          <li
            className="activity-item-menu__item"
            onClick={() => props.clickFunc(true)}
          >
            <img src={PencilIcon} alt="" />
            <span>編集</span>
          </li>
          <li
            className="activity-item-menu__item cAttention"
            onClick={() => props.clickFunc2(true)}
          >
            <img src={TrashIcon} alt="" />
            <span>削除</span>
          </li>
        </ul>
      )}
    </article>
  );
};

export default ActivityItem;
