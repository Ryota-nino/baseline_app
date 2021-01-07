import React, { useState, useEffect } from "react";
import { passwordReset } from "../../../assets/script";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
const Setting: React.FC = (props) => {
  const token = "e3b3bbdf-7abc-47b3-b02e-b27048695fcf";
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const [isSame, setIsSame] = useState<boolean>(false);
  const onSubmit = (data: any) => {
    // パスワードが一緒か判断
    const span = document.getElementById("isSame") as HTMLSpanElement;
    if (data.password === data.password_again) {
      span.textContent = "";
      setIsSame(true);

      passwordReset({
        token: token,
        new_password_confirmation: data.password_again,
        new_password: data.password,
      }).then((boolean) => {
        if (boolean) history.push(`/login`);
      });
    } else {
      span.textContent = "メールアドレスを入力してください";
    }
  };

  useEffect(() => {
    const container = document.querySelector(".container");
    container?.classList.add("page-login");
  }, []);
  return (
    <div className="register">
      <form
        className="contentBox contentBox--big"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="heading4">パスワードの再設定</h1>
        <div className="free-word">
          <h2 className="heading6 mb16">
            新しいパスワード
            <span className="cAttention">*</span>
          </h2>
          <input
            name={"password"}
            type={"password"}
            placeholder={"新しいパスワードを入力してください"}
            ref={register({ required: true })}
          />
          {errors.password && errors.password.type === "required" && (
            <span className="error-message">
              {"メールアドレスを入力してください"}
            </span>
          )}
        </div>
        <div className="free-word">
          <h2 className="heading6 mb16">
            パスワード確認
            <span className="cAttention">*</span>
          </h2>
          <input
            name={"password_again"}
            type={"password"}
            placeholder={"上記と同じパスワードを入力"}
            ref={register({ required: true })}
          />
          {errors.password_again &&
            errors.password_again.type === "required" && (
              <span className="error-message">
                {"パスワードを再入力してください"}
              </span>
            )}

          <span id="isSame" className="error-message"></span>
        </div>
        <button type={"submit"} className={`btn btn--primary`}>
          パスワードを再設定
        </button>
      </form>
    </div>
  );
};

export default Setting;
