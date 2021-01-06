import React, { useEffect } from "react";
import {
  DesktopIllust,
  MailIcon,
  DocumentIcon_White,
  CheckIcon,
} from "../../../assets/images/index";

const RegisterSend: React.FC = (props) => {
  useEffect(() => {
    const container = document.querySelector(".container");
    container?.classList.add("page-login");
  }, []);
  return (
    <div className="register-send">
      <ul className="register-step">
        <li className="current">
          <p>
            <img src={MailIcon} alt="" />
          </p>
          <span>メール認証</span>
        </li>
        <li>
          <p>
            <img src={DocumentIcon_White} alt="" />
          </p>
          <span>基本情報入力</span>
        </li>
        <li>
          <p>
            <img src={CheckIcon} alt="" />
          </p>
          <span>会員登録完了</span>
        </li>
      </ul>
      <div className="formBox">
        <form method="POST" action="#" className="contentBox contentBox--big">
          <h1 className="heading4">まだ会員登録は完了していません</h1>
          <img src={DesktopIllust} alt="" />
          <p>
            メールが届いていることを確認し、本文中に記載されている
            <br />
            URLから登録を完了してください。
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterSend;
