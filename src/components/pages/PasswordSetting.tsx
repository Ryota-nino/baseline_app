import React from "react";
import { Primary } from "../Atoms/TextInput";
import { PrimaryBtn } from "../Atoms/Btn/index";
import { Header } from "../Organisms/Header/index";

const PasswordSetting: React.FC = (props) => {
  return (
    <div className="register">
      <Header needBtn={true} />
      <form method="POST" action="#" className="contentBox contentBox--big">
        <h1 className="heading4">パスワードの再設定</h1>
        <Primary
          type="password"
          ttl="新しいパスワード"
          placeholder="新しいパスワードを入力してください"
          isRequired={true}
        />
        <Primary
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
