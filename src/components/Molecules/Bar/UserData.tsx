import React from "react";
import { MailIcon } from "../../../assets/images/index";
import { ActionBtn } from "../../Atoms/Btn";

interface Props {
  account: any;
  account_id: any;
  isPage: "mypage" | "userpage";
}

const UserData: React.FC<Props> = (props) => {
  return (
    <div className="userDetail-window">
      <div className="userDetail-window__container">
        <img src={props.account.icon_image_path} alt="" />
        <div>
          <div className="userDetail-window__wrap">
            <p className="userDetail-window__name">
              {(() => {
                if (props.isPage === "mypage") {
                  return (
                    props.account.first_name + " " + props.account.last_name
                  );
                } else if (props.account) {
                  return (
                    props.account[props.account_id].last_name +
                    " " +
                    props.account[props.account_id].first_name
                  );
                }
              })()}
            </p>
            <p className="userDetail-window__id">
              @
              {(() => {
                if (props.isPage === "mypage") {
                  return props.account.student_number;
                } else if (props.account) {
                  return props.account[props.account_id].student_number;
                }
              })()}
            </p>
          </div>
          <ul className="userDetail-window__list">
            <li className="userDetail-window__year">
              {(() => {
                if (props.isPage === "mypage") {
                  return props.account.year_of_graduation + "卒";
                } else if (props.account) {
                  return props.account[props.account_id].graduation_year;
                }
              })()}
            </li>
            <li className="userDetail-window__gender">
              &nbsp;/&nbsp;{" "}
              {(() => {
                if (props.isPage === "mypage") {
                  return props.account.sex;
                } else if (props.account) {
                  return props.account[props.account_id].gender;
                }
              })()}
              &nbsp;/&nbsp;
            </li>
            <li className="userDetail-window__job">
              {(() => {
                if (props.isPage === "mypage") {
                  return props.account.desired_occupations;
                } else if (props.account) {
                  return props.account[props.account_id].job;
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
              return props.account.email;
            } else if (props.account) {
              return props.account[props.account_id].mail;
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
