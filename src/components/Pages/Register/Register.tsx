import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { PrimaryBtn } from "../../Atoms/Btn/index";
import { Primary } from "../../Atoms/TextInput/index";
import { handleChange } from "../../../assets/script/validation";
import { temporaryRegistationUser } from "../../../assets/script";

const Register: React.FC = (props) => {
  const history = useHistory();
  const onSubmitHandler = () => {
    const email = document.querySelector(
      'input[type="email"]'
    ) as HTMLInputElement;
    temporaryRegistationUser(email.value).then((boolean) => {
      if (boolean) history.push(`/register/send`);
    });
  };
  const [state, setState] = useState({
    info: {
      email: "",
    },
    message: {
      email: "",
    },
  });

  useEffect(() => {
    const container = document.querySelector(".container");
    container?.classList.add("page-login");
  }, []);
  const inputChangeHandler = (e: any) => {
    handleChange(state, setState, e);
  };

  const inputEnterKeyHandler = (e: any) => {
    if (e.key == "Enter") {
      handleChange(state, setState, e);
      onSubmitHandler();
    }
  };
  return (
    <div className="register-mail">
      <div className="formBox">
        <div className="contentBox contentBox--big">
          <h1 className="heading4">会員登録</h1>
          <Primary
            type="email"
            name="email"
            ttl="メールアドレス"
            placeholder="example@gmail.com"
            isError={true}
            isRequired={true}
            errorMessage={state.message.email}
            defaultValue={state.info.email}
            onChange={inputChangeHandler}
            onKeyPress={inputEnterKeyHandler}
          />
          <PrimaryBtn
            type="button"
            txt="仮登録メールを送信"
            Func={onSubmitHandler}
            disabledRule={!state.info.email || state.message.email}
          />
          <p>
            すでにアカウントをお持ちの方は
            <Link to="/login" className="cLink">
              こちら
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
