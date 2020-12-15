import React from "react";
import {
  DesktopIllust,
  MailIcon,
  DocumentIcon_White,
  CheckIcon,
} from "../../../assets/images/index";

const RegisterSend: React.FC = (props) => {
  return (
    <div className="register">
      <ul className="register-step">
        <li className="current">
          <img src={MailIcon} alt="" />
          <span>メール認証</span>
        </li>
        <li>
          <img src={DocumentIcon_White} alt="" />
          <span>基本情報入力</span>
        </li>
        <li>
          <img src={CheckIcon} alt="" />
          <span>会員登録完了</span>
        </li>
      </ul>
      <div className="formBox">
        <form method="POST" action="#" className="contentBox contentBox--big">
          <h1 className="heading4">まだ会員登録は完了していません</h1>
          <img src={DesktopIllust} alt="" />
          <p>
            メールが届いていることを確認し、本文中に記載されているURLから 登録を完了してください。
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterSend;
