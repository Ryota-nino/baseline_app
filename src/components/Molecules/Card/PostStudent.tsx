import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Avatar, DocumentIcon2 } from "../../../assets/images/index";
import { PassTag } from "../../Atoms/Tag";
interface Props {
  ttl: string;
  isPass: boolean;
  job: string;
  userName: string;
  category_id: number;
  student_id: number;
  icon: string;
  type?: "step" | "interview" | "entry";
}

const PostStudent: React.FC<Props> = (props) => {
  return (
    <article className="company-detailItem">
      <Link
        to={`/company-detail/contents/${props.category_id}/${props.type}/${props.student_id}`}
      >
        <div className="company-detailItem__wrap">
          <img
            className="company-detailItem__icon"
            src={DocumentIcon2}
            alt=""
          />
          <h1 className="company-detailItem__ttl">{props.ttl}</h1>
          {props.isPass && <PassTag txt="内定" />}
        </div>
        <p className="company-detailItem__job">{props.job}希望</p>
        <p className="company-detailItem__user">
          <img src={props.icon} alt="" />
          <span>{props.userName}</span>
        </p>
      </Link>
    </article>
  );
};

export default PostStudent;
