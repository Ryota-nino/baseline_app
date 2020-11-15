import React from "react";
import { DesktopIllust } from "../../assets/images/index";
import { Header } from "../Organisms/Header/index";
const PasswordForgetSend: React.FC = (props) => {
  return (
    <div className="register">
      <Header needBtn={true} />
      <div className="contentBox contentBox--big">
        <h1 className="heading5">パスワード再発行メールを送信しました</h1>
        <img src={DesktopIllust} alt="" />
        <p>
          〇〇(メールアドレス)にメールを送信しました。
          <br />
          メールを確認して手順に従い、パスワードの再発行を行ってください。
        </p>
      </div>
    </div>
  );
};

export default PasswordForgetSend;
