import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/images/index";
import { FreeWordInput } from "../form/index";
import { PrimaryBtn } from "../btn/index";
import { HeaderRegister } from "../../components/common/index";

const PasswordSetting: React.FC = (props) => {
  return (
    <div className="register">
      <HeaderRegister />
      <form method="POST" action="#" className="contentBox contentBox--big">
        <h1 className="heading4">パスワードの再設定</h1>
        <FreeWordInput
          type="password"
          ttl="新しいパスワード"
          placeholder="新しいパスワードを入力してください"
          isRequired={true}
        />
        <FreeWordInput
          type="password"
          ttl="パスワード確認"
          placeholder="上記と同じパスワードを入力"
          isRequired={true}
        />
        <PrimaryBtn type="submit" txt="パスワードを再設定" />
      </form>
    </div>
  );
};

export default PasswordSetting;
