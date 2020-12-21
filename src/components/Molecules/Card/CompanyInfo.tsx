import React, { useState, useEffect } from "react";
import { toue } from "../../../assets/images";
interface Props {
  data: any;
}

const CompanyInfo: React.FC<Props> = (props) => {
  useEffect(() => {
    console.log(props.data);
  });
  return (
    <article className="comapay-detailCard">
      <a target="_blank" href={props.data.company_url}>
        <figure className="comapay-detailCard__img">
          <img
            src={props.data.logo_image_url ? props.data.logo_image_url : toue}
            alt=""
          />
        </figure>
        <h1 className="comapay-detailCard__name">{props.data.company_name}</h1>
      </a>
      <p className="comapay-detailCard__link">
        <a target="_blank" href={props.data.company_url}>
          {props.data.company_url}
        </a>
      </p>
    </article>
  );
};

export default CompanyInfo;
