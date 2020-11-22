import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ActionBtn } from "../../Atoms/Btn";
interface Props {
  thisPage: string;
  companyId: any;
  hasActionBtn: boolean;
  companyData: any;
}

const AboutBar: React.FC<Props> = (props) => {
  const companyId = Number(props.companyId) - 1;
  const checkPrefLength = () => {
    const prefArray: any = [];
    props.companyData.prefectures.forEach((value: any) => {
      prefArray.push(value.name);
    });
    let output = String(prefArray).replace(/,/g, " ");
    const MAX_LENGTH = 3;
    if (props.companyData.prefectures.length == 0) return null;
    if (props.companyData.prefectures.length > MAX_LENGTH) {
      const outputArray = [];
      for (let i = 0; i < MAX_LENGTH; i++) {
        outputArray.push(props.companyData.prefectures[i].name);
      }
      const output = outputArray.join().replace(/,/g, " ") + "...";
      return output;
    }
    return output;
  };
  const checkTextLength = (MAX_LENGTH: number, el: any) => {
    if (el.length > MAX_LENGTH) {
      return el.substr(0, MAX_LENGTH) + "...";
    }
    return el;
  };
  const renderDOM = () => {
    return (
      <article className="company-bar">
        <div className="company-bar__wrap">
          <img src={props.companyData.logo_image_url} alt="" />
          <div className="company-bar__inner">
            <h1 className="heading4">
              {checkTextLength(30, props.companyData.company_name)}
            </h1>
            <div>
              <p className="company-bar__link">
                <a target="_blank" href={props.companyData.company_url}>
                  {checkTextLength(20, props.companyData.company_url)}
                </a>
              </p>
              {checkPrefLength() ? (
                <p className="company-bar__address">{checkPrefLength()}</p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="company-bar__right">
          {props.thisPage === "detail" ? (
            <Link to={`/company-insert/${props.companyData.id}`}>
              企業情報の編集
            </Link>
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
  return <>{renderDOM()}</>;
};

export default AboutBar;
