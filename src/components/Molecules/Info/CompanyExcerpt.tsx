import React from "react";
import { toue } from "../../../assets/images";
interface Props {
  companyData: any;
}

const CompanyExcerpt: React.FC<Props> = (props) => {
  return (
    <article className="companyExcerpt-card">
      <img
        src={
          props.companyData.logo_image_url
            ? props.companyData.logo_image_url
            : toue
        }
        alt=""
      />
      <div className="companyExcerpt-card__wrap">
        <h1 className="heading5">{props.companyData.company_name}</h1>
        <p className="companyExcerpt-card__link">
          <a href={props.companyData.company_url}>
            {props.companyData.company_url}/
          </a>
        </p>
      </div>
    </article>
  );
};

export default CompanyExcerpt;
