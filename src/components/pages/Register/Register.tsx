import React from "react";
import { Link } from "react-router-dom";
import { PrimaryBtn } from "../../Atoms/Btn/index";
import { Primary } from "../../Atoms/TextInput/index";

const Register: React.FC = (props) => {
  const onSubmitHandler = () => {
    checkForms();
  };
  const checkForms = () => {
    const email = document.querySelector(
      'input[name="email"]'
    ) as HTMLButtonElement;
    const errors = [];
    let isError: boolean = false;
    if (email.value === "") {
      let emailError = email.parentNode?.querySelector(".error-message")!;
      emailError.textContent = "メールアドレスを入力してください";
      errors.push(true);
    }
    errors.forEach((error) => {
      if (error) {
        isError = true;
      }
    });
    if (!isError) {
      alert("OK!");
    }
  };

  return (
    <div className="register">
      <div className="formBox">
        <form method="POST" action="#" className="contentBox contentBox--big">
          <h1 className="heading4">会員登録</h1>
          <Primary
            type="email"
            name="email"
            ttl="メールアドレス"
            placeholder="example@gmail.com"
            isError={true}
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
