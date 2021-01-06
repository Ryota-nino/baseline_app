import React, { useEffect, useState } from "react";
import { ActionBtn } from "../../Atoms/Btn";
import { PassTag } from "../../Atoms/Tag";
import { Avatar } from "../../../assets/images";
import { CompanyExcerpt } from "../Info/index";
import { detailCompany, showCompany } from "../../../assets/script";
import { rikuma } from "../../../assets/images";
interface Props {
  isLoading: boolean;
  userData: any;
  student_id: any;
  company_id: any;
}

const StudentAboutCompanyBar: React.FC<Props> = (props) => {
  const [companyData, setCompanyData] = useState();
  useEffect(() => {
    detailCompany(props.company_id).then((getData: any) => {
      console.log(getData.data);
      setCompanyData(getData.data);
    });
  }, []);
  console.log();

  const renderGender = (num: number) => {
    const gender = ["男性", "女性", "その他"];
    return gender[num];
  };
  const renderDOM = () => {
    return (
      <div className="aboutCompany-bar">
        <div className="aboutCompany-bar__wrapper">
          <div className="aboutCompany-bar__wrap">
            <div className="aboutCompany-bar__avatar">
              <img className="userIcon" src={rikuma} alt="" />
              {/* <PassTag txt="内定" /> */}
            </div>

            <div className="aboutCompany-bar__inner">
              <p className="aboutCompany-bar__name">
                {props.userData.first_name + " " + props.userData.last_name}
              </p>
              <ul className="aboutCompany-bar__profile">
                <li className="aboutCompany-bar__year">
                  {props.userData.year_of_graduation &&
                    props.userData.year_of_graduation + "卒"}
                </li>
                <li className="aboutCompany-bar__gender">
                  &nbsp;|&nbsp;性別:{renderGender(props.userData.sex)}
                </li>
              </ul>
            </div>
          </div>
          <ActionBtn
            type="button"
            txt="就活履歴を見る"
            isPlus={false}
            linkUrl={`user/${props.student_id}`}
          />
        </div>
        <CompanyExcerpt companyData={companyData} />
      </div>
    );
  };
  return <>{props.isLoading && renderDOM()}</>;
};

export default StudentAboutCompanyBar;
