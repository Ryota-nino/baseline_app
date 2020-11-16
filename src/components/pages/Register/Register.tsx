import React from "react";
import { Link } from "react-router-dom";
import { PrimaryBtn } from "../../Atoms/Btn/index";
import { Primary } from "../../Atoms/TextInput/index";

const Register: React.FC = (props) => {
  const onSubmitHandler = () => {
    const email = document.querySelector(
      'input[type="email"]'
    ) as HTMLButtonElement;
    if (email.value === "") {
      alert("メールアドレスを入力してください");
    }
  };

  return (
    <div className="register">
      <div className="formBox">
        <form method="POST" action="#" className="contentBox contentBox--big">
          <h1 className="heading4">会員登録</h1>
          <Primary
            type="email"
            ttl="メールアドレス"
            placeholder="example@gmail.com"
            isRequired={true}
          />
          <PrimaryBtn
            type="button"
            txt="仮登録メールを送信"
            Func={onSubmitHandler}
          />
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
