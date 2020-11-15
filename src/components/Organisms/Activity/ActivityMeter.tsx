import React from "react";
import { Meter } from "../../Atoms/Activity/index";
const ActivityMeter: React.FC = () => {
  return (
    <div className="myActivity-count">
      <h3 className="heading6">マイアクティビティ</h3>
      <p className="myActivity-count__txt">
        残り活動を<span className="cGreen bold">4回</span>
        投稿すると企業の選考ステップの閲覧が可能です。
      </p>
      <Meter />
    </div>
  );
};

export default ActivityMeter;
