import React from "react";
import { Link } from "react-router-dom";
import { Step, Entry, Interview } from "./_Contents.Categories";

interface Props {
  thisPage: string;
  params: any;
  userData: any;
  isLoading: boolean;
}

const Contents: React.FC<Props> = (props) => {
  const renderContents = () => {
    if (props.thisPage === "step") {
      return (
        <Step
          params={props.params}
          thisPage={props.thisPage}
          userData={props.userData}
          isLoading={props.isLoading}
        />
      );
    }
    if (props.thisPage === "entry") {
      return (
        <Entry
          params={props.params}
          thisPage={props.thisPage}
          userData={props.userData}
          isLoading={props.isLoading}
        />
      );
    }
    if (props.thisPage === "interview") {
      return (
        <Interview
          params={props.params}
          thisPage={props.thisPage}
          userData={props.userData}
          isLoading={props.isLoading}
        />
      );
    }
  };
  return (
    <div className="companyContentsWindow">
      <div className="companyContentsWindow__list">
        <ul>
          <li className={props.thisPage === "step" ? "current" : ""}>
            <Link
              to={`/company-detail/contents/${props.params.cateogry_id}/step/${props.params.student_id}/${props.params.company_id}`}
            >
              選考ステップ
            </Link>
          </li>
          <li className={props.thisPage === "entry" ? "current" : ""}>
            <Link
              to={`/company-detail/contents/${props.params.cateogry_id}/entry/${props.params.student_id}/${props.params.company_id}`}
            >
              エントリーシート
            </Link>
          </li>
          <li className={props.thisPage === "interview" ? "current" : ""}>
            <Link
              to={`/company-detail/contents/${props.params.cateogry_id}/interview/${props.params.student_id}/${props.params.company_id}`}
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
