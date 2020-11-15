import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ActionBtn } from "../../Atoms/Btn";
import { Goodpatch } from "../../../assets/images/index";
import axios from "axios";

interface Props {
  thisPage: string;
  companyId: any;
  hasActionBtn: boolean;
}

const AboutBar: React.FC<Props> = (props) => {
  const [companies, setCompanies] = useState<any>([]);
  useEffect(() => {
    const url = "./database/companies.json";
    axios.get(url).then((res) => {
      const output = res.data;
      setCompanies(output);
    });
  }, []);
  const companyId = Number(props.companyId) - 1;
  const checkPrefLength = () => {
    if (companies[companyId]) {
      let output = String(companies[companyId].pref).replace(/,/g, " ");
      const MAX_LENGTH = 4;
      if (companies[companyId].pref.length > MAX_LENGTH) {
        const output = String(
          companies[companyId].pref.slice(0, MAX_LENGTH) + "..."
        );
        return output.replace(/,/g, " ");
      }
      return output;
    }
  };
  return (
    <article className="company-bar">
      <div className="company-bar__wrap">
        <img src={Goodpatch} alt="" />
        <div className="company-bar__inner">
          <h1 className="heading4">
            {companies[companyId] ? companies[companyId].company_name : ""}
          </h1>
          <div>
            <p className="company-bar__link">
              <a
                target="_blank"
                href={companies[companyId] ? companies[companyId].url : ""}
              >
                {companies[companyId] ? companies[companyId].url : ""}
              </a>
            </p>
            <p className="company-bar__address">{checkPrefLength()}</p>
          </div>
        </div>
      </div>
      <div className="company-bar__right">
        {props.thisPage === "detail" ? (
          <Link to={`/company-insert/${props.companyId}`}>企業情報の編集</Link>
        ) : (
          ""
        )}
        {props.hasActionBtn && (
          <ActionBtn
            type="button"
            txt="情報を追加する"
            isPlus={false}
            linkUrl={`company-info/${props.companyId}/`}
          />
        )}
      </div>
    </article>
  );
};

export default AboutBar;
