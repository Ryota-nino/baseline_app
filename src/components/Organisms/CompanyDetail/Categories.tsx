import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { About, Step, Entry, Interview } from "./_Categories.List/index";
import axios from "axios";

interface Props {
  thisPage: string;
  companyId: any;
}

const Categories: React.FC<Props> = (props) => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
    out: {
      x: -20,
      opacity: 0,
    },
  };
  const [activity, setActivity] = useState<any>();
  const [companies, setCompanies] = useState<any>([]);
  const [companyComment, setCompanyComment] = useState<any>([]);
  let companyId = Number(props.companyId) - 1;
  useEffect(() => {
    const url1 = "./activity.json";
    axios.get(url1).then((res) => {
      const output = res.data;
      setActivity(output);
    });
    const url2 = "./database/companies.json";
    axios.get(url2).then((res) => {
      const output = res.data;
      setCompanies(output);
    });
    const url3 = "./database/company_comments.json";
    axios.get(url3).then((res) => {
      const output = res.data;
      setCompanyComment(output);
    });
  }, []);

  const renderContents = () => {
    if (props.thisPage === "about") {
      return (
        <About
          thisPage={props.thisPage}
          companyId={companyId}
          activity={activity}
          companies={companies}
          companyComment={companyComment}
        />
      );
    }
    if (props.thisPage === "step") {
      return <Step thisPage={props.thisPage} companyId={companyId} />;
    }
    if (props.thisPage === "entry") {
      return <Entry thisPage={props.thisPage} companyId={companyId} />;
    }
    if (props.thisPage === "interview") {
      return <Interview thisPage={props.thisPage} companyId={companyId} />;
    }
  };

  return (
    <motion.div
      className="companyContentsWindow"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <div className="companyContentsWindow__list">
        <ul>
          <li className={props.thisPage === "about" ? "current" : ""}>
            <Link to={`/company-detail/${props.companyId}/about`}>
              会社概要
            </Link>
          </li>
          <li className={props.thisPage === "step" ? "current" : ""}>
            <Link to={`/company-detail/${props.companyId}/step`}>
              選考ステップ
            </Link>
          </li>
          <li className={props.thisPage === "entry" ? "current" : ""}>
            <Link to={`/company-detail/${props.companyId}/entry`}>
              エントリーシート
            </Link>
          </li>
          <li className={props.thisPage === "interview" ? "current" : ""}>
            <Link to={`/company-detail/${props.companyId}/interview`}>
              面接情報
            </Link>
          </li>
        </ul>
      </div>
      {renderContents()}
    </motion.div>
  );
};

export default Categories;
