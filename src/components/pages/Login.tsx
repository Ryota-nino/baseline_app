import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Primary } from "../Atoms/TextInput";
import { CheckboxWithText } from "../Molecules/Input";
import { PrimaryBtn } from "../Atoms/Btn/index";
import { login } from "../../assets/script/index";

const Login: React.FC = (props) => {
  useEffect(() => {
    const container = document.querySelector(".container");
    container?.classList.add("page-login");
  }, []);

  let history = useHistory();
  const goHomePage = () => {
    history.push("/");
  };

  const primayBtnClickHandler = () => {
    const email = document.querySelector(
      'input[name="email"]'
    ) as HTMLInputElement;
    const password = document.querySelector(
      'input[name="password"]'
    ) as HTMLInputElement;
    const isActive = document.getElementById(
      "input-isActive"
    ) as HTMLInputElement;
    if (email.value === "" && password.value === "") {
      alert("メールアドレスとパスワードを入力してください");
      return;
    } else if (email.value === "") {
      alert("メールアドレスを入力してください");
      return;
    } else if (password.value === "") {
      alert("パスワードを入力してください");
      return;
    }

    login(email.value, password.value, isActive.checked, goHomePage);
  };

  return (
    <div className="login">
      <form method="POST" action="#" className="contentBox contentBox--big">
        <h1 className="heading4">ログイン</h1>
        <Primary
          name="email"
          type="email"
          ttl="メールアドレス"
          placeholder="example@gmail.com"
          isRequired={true}
        />
        <Primary
          name="password"
          type="password"
          ttl="パスワード"
          placeholder="パスワードを入力してください"
          isRequired={true}
        />
        <p className="password-forget">
          <Link to="/password-forget">パスワードを忘れた</Link>
        </p>
        <CheckboxWithText
          id="isActive"
          type="checkbox"
          txt="ログイン状態を保持"
        />
        <PrimaryBtn
          type="button"
          txt="ログインする"
          Func={primayBtnClickHandler}
        />
        {/* <PrimaryBtn type="button" txt="ユーザー情報取得" Func={getUser} />
        <PrimaryBtn type="button" txt="ログアウト" Func={logout} /> */}
        <p className="not-have-account">
          アカウントをお持ちでない方は<Link to="/register">こちら</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
