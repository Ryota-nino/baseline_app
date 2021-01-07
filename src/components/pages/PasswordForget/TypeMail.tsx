import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { passwordResetMail } from "../../../assets/script";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const TypeMail: React.FC = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  useEffect(() => {
    const container = document.querySelector(".container");
    container?.classList.add("page-login");
  }, []);

  const onSubmit = (data: any) => {
    // console.log(data.email);
    passwordResetMail({ email: data.email }).then((boolean) => {
      if (boolean) history.push(`/password/forget-send`);
    });
  };

  return (
    <div className="register">
      <Link className="btn pageBack-link" to="/login">
        <span className="heading4">ログイン画面に戻る</span>
      </Link>
      <form
        className="contentBox forget-password-typeMail contentBox--big"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="heading4">パスワードを忘れた方</h1>
        <h2 className="heading6 mb16">
          登録されているメールアドレスを入力してください
          <span className="cAttention">*</span>
        </h2>
        <div className="free-word">
          <input
            name={"email"}
            type={"email"}
            placeholder={"example@gmail.com"}
            ref={register({ required: true })}
          />
          {errors.email && errors.email.type === "required" && (
            <span className="error-message">
              {"メールアドレスを入力してください"}
            </span>
          )}
        </div>

        <button type={"submit"} className={`btn btn--primary`}>
          再発行メールを送る
        </button>
      </form>
    </div>
  );
};

export default TypeMail;
