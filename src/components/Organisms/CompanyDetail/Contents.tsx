import React from "react";
import { Link } from "react-router-dom";
import { Step, Entry, Interview } from "./_Contents.Categories";

interface Props {
  thisPage: string;
  params: any;
}

const Contents: React.FC<Props> = (props) => {
  const renderContents = () => {
    if (props.thisPage === "step") {
      return <Step thisPage={props.thisPage} />;
    }
    if (props.thisPage === "entry") {
      return <Entry params={props.params} thisPage={props.thisPage} />;
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
            <Link
              to={`/company-detail/contents/${props.params.cateogry_id}/step/${props.params.student_id}`}
            >
              選考ステップ
            </Link>
          </li>
          <li className={props.thisPage === "entry" ? "current" : ""}>
            <Link
              to={`/company-detail/contents/${props.params.cateogry_id}/entry/${props.params.student_id}`}
            >
              エントリーシート
            </Link>
          </li>
          <li className={props.thisPage === "interview" ? "current" : ""}>
            <Link
              to={`/company-detail/contents/${props.params.cateogry_id}/interview/${props.params.student_id}`}
            >
              面接情報
            </Link>
          </li>
        </ul>
      </div>
      <div className="companyContentsWindow__wrapper">{renderContents()}</div>
    </div>
  );
};

export default Contents;
