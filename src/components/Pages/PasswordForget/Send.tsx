import React, { useEffect } from "react";
import { DesktopIllust } from "../../../assets/images/index";
const Send: React.FC = (props) => {
  useEffect(() => {
    const container = document.querySelector(".container");
    container?.classList.add("page-login");
  }, []);
  return (
    <div className="formBox password-forget-send">
      <form method="POST" action="#" className="contentBox contentBox--big">
        <h1 className="heading4">パスワード再発行メールを送信しました</h1>
        <img src={DesktopIllust} alt="" />
        <p>
          〇〇(メールアドレス)にメールを送信しました。
          <br />
          メールを確認して手順に従い、パスワードの再発行を行ってください。
        </p>
      </form>
    </div>
  );
};

export default Send;
