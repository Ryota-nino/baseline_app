import React from "react";
import { Link } from "react-router-dom";
interface Props {
  companyId: number;
  class: string;
  name: string;
  business: string;
  pref: [];
  registerTime: number;
  img: string;
}

const CompanyCard: React.FC<Props> = (props) => {
  const checkTextLength = () => {
    const MAX_LENGTH = 60;
    if (props.business.length > MAX_LENGTH) {
      return props.business.substr(0, MAX_LENGTH) + "...";
    }
    return props.business;
  };

  const checkPrefLength = () => {
    const prefArray: any = [];
    props.pref.forEach((value: any) => {
      prefArray.push(value.name);
    });
    let output = String(prefArray).replace(/,/g, " ");
    const MAX_LENGTH = 4;
    if (props.pref.length == 0) return null;
    if (props.pref.length > MAX_LENGTH) {
      const output = String(props.pref.slice(0, MAX_LENGTH) + "...");
      return output.replace(/,/g, " ");
    }
    return output;
  };

  return (
    <article className={`company-card ${props.class}`}>
      <Link to={`/company-detail/${props.companyId}/about`}>
        <figure className="company-card__img">
          <img src={props.img} alt="" />
        </figure>
        <h3 className="company-card__name">{props.name}</h3>
        <p className="company-card__desc">{checkTextLength()}</p>
        {(() => {
          if (checkPrefLength()) {
            return <p className="company-card__address">{checkPrefLength()}</p>;
          }
        })()}
        {/* <p className="company-card__address">{checkPrefLength()}</p> */}
        <p className="company-card__time">
          <time dateTime="">{props.registerTime}</time>
        </p>
      </Link>
    </article>
  );
};

export default CompanyCard;
