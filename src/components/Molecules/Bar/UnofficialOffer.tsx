import React from "react";
import { ActionBtn } from "../../Atoms/Btn";
import { PassTag } from "../../Atoms/Tag";
import { Avatar } from "../../../assets/images";
import { CompanyExcerpt } from "../Info/index";

const StudentAboutCompanyBar: React.FC = (props) => {
  return (
    <div className="aboutCompany-bar">
      <div className="aboutCompany-bar__wrapper">
        <div className="aboutCompany-bar__wrap">
          <div className="aboutCompany-bar__avatar">
            <img src={Avatar} alt="" />
            <PassTag txt="内定" />
          </div>

          <div className="aboutCompany-bar__inner">
            <p className="aboutCompany-bar__name">山本 仁</p>
            <ul className="aboutCompany-bar__profile">
              <li className="aboutCompany-bar__year">22卒 /</li>
              <li className="aboutCompany-bar__gender">男性</li>
            </ul>
          </div>
        </div>
        <ActionBtn
          type="button"
          txt="就活履歴を見る"
          isPlus={false}
          linkUrl="user/0"
        />
      </div>
      <CompanyExcerpt />
    </div>
  );
};

export default StudentAboutCompanyBar;
