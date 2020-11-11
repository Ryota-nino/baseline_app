import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderRegister } from "../../components/common/index";
import { FreeWordInput, InputCheckRadio } from "../form/index";
import { PrimaryBtn } from "../btn/index";

const Login: React.FC = (props) => {
  return (
    <div className="register">
      <HeaderRegister />
      <form method="POST" action="#" className="contentBox contentBox--big">
        <h1 className="heading4">ログイン</h1>
        <FreeWordInput
          type="email"
          ttl="メールアドレス"
          placeholder="example@gmail.com"
          isRequired={true}
        />
        <FreeWordInput
          type="password"
          ttl="パスワード"
          placeholder="パスワードを入力してください"
          isRequired={true}
        />
        <Link to="/password-forget">パスワードを忘れた</Link>
        <InputCheckRadio type="checkbox" txt="ログイン状態を保持" />
        <PrimaryBtn type="submit" txt="ログインする" />
        <p>
          アカウントをお持ちでない方は<Link to="/register">こちら</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
