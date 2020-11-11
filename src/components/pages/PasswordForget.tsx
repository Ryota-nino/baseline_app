import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FreeWordInput } from "../form/index";
import { PrimaryBtn } from "../btn/index";
import { HeaderRegister } from "../../components/common/index";

const PasswordForget: React.FC = (props) => {
  return (
    <div className="register">
      <HeaderRegister />
      <Link className="pageBack-link" to="/login">
        <span className="heading4">ログイン画面に戻る</span>
      </Link>
      <form method="POST" action="#" className="contentBox contentBox--big">
        <h1 className="heading4">パスワードを忘れた方</h1>
        <FreeWordInput
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

export default PasswordForget;
