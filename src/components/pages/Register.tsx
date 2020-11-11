import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FreeWordInput } from "../../components/form/index";
import { PrimaryBtn } from "../../components/btn/index";
import { HeaderRegister } from "../../components/common/index";

const Register: React.FC = (props) => {
  return (
    <div className="register">
      <HeaderRegister />
      <div className="formBox">
        <form method="POST" action="#" className="contentBox contentBox--big">
          <h1 className="heading4">会員登録</h1>
          <FreeWordInput
            type="text"
            ttl="メールアドレス"
            placeholder="example@gmail.com"
            isRequired={true}
          />
          <PrimaryBtn type="submit" txt="仮登録メールを送信" />
          <p>
            すでにアカウントをお持ちの方は
            <Link to="/login">こちら</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
