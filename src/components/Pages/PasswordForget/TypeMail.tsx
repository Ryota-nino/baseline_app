import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Primary } from "../../Atoms/TextInput";
import { PrimaryBtn } from "../../Atoms/Btn/index";

const TypeMail: React.FC = (props) => {
  useEffect(() => {
    const container = document.querySelector(".container");
    container?.classList.add("page-login");
  }, []);
  return (
    <div className="register">
      <Link className="btn pageBack-link" to="/login">
        <span className="heading4">ログイン画面に戻る</span>
      </Link>
      <form
        method="POST"
        action="#"
        className="contentBox forget-password-typeMail contentBox--big"
      >
        <h1 className="heading4">パスワードを忘れた方</h1>
        <Primary
          type="email"
          ttl="登録されているメールアドレスを入力してください"
          placeholder="example@gmail.com"
          isRequired={true}
        />
        <PrimaryBtn type="submit" txt="再発行メールを送る" />
      </form>
    </div>
  );
};

export default TypeMail;
