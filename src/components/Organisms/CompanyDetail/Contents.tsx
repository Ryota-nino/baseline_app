import React from "react";
import { Link } from "react-router-dom";
import { Step, Entry, Interview } from "./_Contents.Categories";

interface Props {
  thisPage: string;
}

const CompanyDetailContentsWindow: React.FC<Props> = (props) => {
  const renderContents = () => {
    if (props.thisPage === "step") {
      return <Step thisPage={props.thisPage} />;
    }
    if (props.thisPage === "entry") {
      return <Entry thisPage={props.thisPage} />;
    }
    if (props.thisPage === "interview") {
      return <Interview thisPage={props.thisPage} />;
    }
  };
  return (
    <div className="companyContentsWindow">
      <div className="companyContentsWindow__list">
        <ul>
          <li className={props.thisPage === "step" ? "current" : ""}>
            <Link to="/company-detail/contents/:id/step">選考ステップ</Link>
          </li>
          <li className={props.thisPage === "entry" ? "current" : ""}>
            <Link to="/company-detail/contents/:id/entry">
              エントリーシート
            </Link>
          </li>
          <li className={props.thisPage === "interview" ? "current" : ""}>
            <Link to="/company-detail/contents/:id/interview">面接情報</Link>
          </li>
        </ul>
      </div>
      <div className="companyContentsWindow__wrapper">{renderContents()}</div>
    </div>
  );
};

export default CompanyDetailContentsWindow;
