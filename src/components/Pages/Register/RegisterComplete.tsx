import React, { useEffect, useState } from "react";
import {
  MailIcon,
  DocumentIcon_White,
  CheckIcon,
  DesktopIllust2,
} from "../../../assets/images/index";
import { PrimaryBtn } from "../../Atoms/Btn";
import { useHistory } from "react-router-dom";
const RegisterComplete: React.FC = (props) => {
  const [loading, setLoading] = useState<boolean>();
  const history = useHistory();
  useEffect(() => {
    const container = document.querySelector(".container");
    container?.classList.add("page-login");
    setLoading(true);
  }, []);
  const goLoginPage = () => {
    history.push(`/login`);
  };

  const renderDOM = () => {
    return (
      <div className="register complete">
        <ul className="register-step">
          <li>
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
          <li className="current">
            <p>
              <img src={CheckIcon} alt="" />
            </p>
            <span>会員登録完了</span>
          </li>
        </ul>
        <div className="formBox register-complete">
          <form method="POST" action="#" className="contentBox contentBox--big">
            <h1 className="heading4">パスワード再発行メールを送信しました</h1>
            <img src={DesktopIllust2} alt="" />
            <p>
              〇〇(メールアドレス)にメールを送信しました。
              <br />
              メールを確認して手順に従い、パスワードの再発行を行ってください。
            </p>
            <PrimaryBtn
              txt="ログイン画面へ"
              type="button"
              isSolid={true}
              Func={goLoginPage}
            />
          </form>
        </div>
      </div>
    );
  };
  return <>{loading && renderDOM()}</>;
};

export default RegisterComplete;
