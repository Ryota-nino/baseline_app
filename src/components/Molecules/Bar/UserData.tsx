import React from "react";
import { MailIcon } from "../../../assets/images/index";
import { ActionBtn } from "../../Atoms/Btn";

interface Props {
  userData: any;
  userId: any;
  isPage: "mypage" | "userpage";
}

const UserData: React.FC<Props> = (props) => {
  return (
    <div className="userDetail-window">
      <div className="userDetail-window__container">
        <img src={props.userData.icon_image_path} alt="" />
        <div>
          <div className="userDetail-window__wrap">
            <p className="userDetail-window__name">
              {(() => {
                if (props.isPage === "mypage") {
                  return (
                    props.userData.first_name + " " + props.userData.last_name
                  );
                } else if (props.userData) {
                  return (
                    props.userData[props.userId].last_name +
                    " " +
                    props.userData[props.userId].first_name
                  );
                }
              })()}
            </p>
            <p className="userDetail-window__id">
              @
              {(() => {
                if (props.isPage === "mypage") {
                  return props.userData.student_number;
                } else if (props.userData) {
                  return props.userData[props.userId].student_number;
                }
              })()}
            </p>
          </div>
          <ul className="userDetail-window__list">
            <li className="userDetail-window__year">
              {(() => {
                if (props.isPage === "mypage") {
                  return props.userData.year_of_graduation + "卒";
                } else if (props.userData) {
                  return props.userData[props.userId].graduation_year;
                }
              })()}
            </li>
            <li className="userDetail-window__gender">
              &nbsp;/&nbsp;{" "}
              {(() => {
                if (props.isPage === "mypage") {
                  return props.userData.sex;
                } else if (props.userData) {
                  return props.userData[props.userId].gender;
                }
              })()}
              &nbsp;/&nbsp;
            </li>
            <li className="userDetail-window__job">
              {(() => {
                if (props.isPage === "mypage") {
                  return props.userData.desired_occupations;
                } else if (props.userData) {
                  return props.userData[props.userId].job;
                }
              })()}
            </li>
          </ul>
        </div>
      </div>
      <div className="userDetail-window__right-col">
        <a
          href={`mailto:${(() => {
            if (props.isPage === "mypage") {
              return props.userData.email;
            } else if (props.userData) {
              return props.userData[props.userId].mail;
            }
          })()}`}
          className="btn btn--mail"
        >
          <img src={MailIcon} alt="" />
        </a>
        <ActionBtn
          type="button"
          txt="プロフィールを編集"
          isPlus={false}
          linkUrl="profile-edit"
        />
      </div>
    </div>
  );
};

export default UserData;
