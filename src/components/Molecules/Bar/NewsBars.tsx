import React from "react";
import { Link } from "react-router-dom";

const News: React.FC = () => {
  return (
    <article className="newsBar">
      <Link to="">
        <div className="newsBar__wrap">
          <h3 className="newsBar__ttl">お知らせ</h3>
          <p className="newsBar__txt">
            学生向け就活サービスBaseline本日からリリース!
          </p>
        </div>
        <p className="newsBar__time">
          <time dateTime="">2021.1.21</time>
        </p>
      </Link>
    </article>
  );
};

export default News;
