import React, { useEffect, useState } from "react";
import {
  MailIcon,
  DocumentIcon_White,
  CheckIcon,
} from "../../../assets/images/index";
import { useHistory } from "react-router-dom";
import { SelectPrimary } from "../../Atoms/Input";
import {
  indexJob,
  registerUser,
  indexYearGraduation,
} from "../../../assets/script";
import { useForm } from "react-hook-form";

const RegisterInsert: React.FC = (props) => {
  const [yearGraduation, setYearGraduation] = useState<any>();
  const [loading, setLoading] = useState<boolean>();
  const [jobs, setJobs] = useState<any>();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const token = "85a6198c-9017-35c2-92f3-09c341b6e9f0";
  useEffect(() => {
    const main = document.querySelector(".main") as HTMLElement;
    main.classList.add("register");
    const container = document.querySelector(".container");
    container?.classList.add("page-login");

    // 仕事の選択肢取得
    indexJob().then((getData: any) => {
      setJobs(getData.data);
    });
    // 現在の学年の選択肢取得
    indexYearGraduation().then((getData: any) => {
      setYearGraduation(getData.data);
      setLoading(true);
      selectBtnChanges();
    });
  }, []);

  const selectBtnChanges = () => {
    const selectBtns = document.querySelectorAll(".select-btn");
    console.log(selectBtns);
    selectBtns.forEach((btn: any) => {
      btn.addEventListener("click", () => {
        selectBtns.forEach((item) => {
          item.classList.remove("current");
        });
        btn.classList.add("current");
        btn.querySelector("input").checked = true;
      });
    });
  };
  const annual = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 },
  ];
  const onSubmit = (data: any) => {
    if (data.icon) {
      const file = data.icon[0];
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          // 画像ファイルを base64 文字列に変換します
          data.icon = reader.result;
        },
        false
      );
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      data.icon = null;
    }
    delete data.agree_check;
    data.token = token;
    registerUser(data).then((boolean) => {
      if (boolean) history.push(`/register/send`);
    });
  };
  const [image, setImage] = useState("");

  const renderDOM = () => {
    return (
      <div className="register insert">
        <ul className="register-step">
          <li>
            <p>
              <img src={MailIcon} alt="" />
            </p>
            <span>メール認証</span>
          </li>
          <li className="current">
            <p>
              <img src={DocumentIcon_White} alt="" />
            </p>
            <span>基本情報入力</span>
          </li>
          <li>
            <p>
              <img src={CheckIcon} alt="" />
            </p>
            <span>会員登録完了</span>
          </li>
        </ul>

        <div className="formBox">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contentBox contentBox--big">
              <h1 className="heading4">
                アカウント情報
                <span>
                  <em>*</em>は必須項目です
                </span>
              </h1>
              {/* <p>メールアドレス</p>
              <p>example@gmail.com</p> */}
              {/* 学籍番号 */}
              <label className="free-word">
                <h3 className="heading6">
                  学籍番号<span className="cAttention">*</span>
                </h3>
                <input
                  name={"student_number"}
                  type={"number"}
                  placeholder={"学校から配布された7桁の番号"}
                  ref={register({ required: true, minLength: 7 })}
                />
                {errors.student_number &&
                  errors.student_number.type === "required" && (
                    <span className="error-message">
                      {"学籍番号を入力してください"}
                    </span>
                  )}
                {errors.student_number &&
                  errors.student_number.type === "minLength" && (
                    <span className="error-message">
                      {"7桁の番号で入力してください"}
                    </span>
                  )}
              </label>

              {/* パスワード */}
              <label className="free-word">
                <h3 className="heading6">
                  パスワード設定<span className="cAttention">*</span>
                </h3>
                <input
                  name={"password"}
                  type={"password"}
                  placeholder={"英数字を含めた8文字以上"}
                  ref={register({ required: true, minLength: 8 })}
                />
                {errors.password && errors.password.type === "required" && (
                  <span className="error-message">
                    {"パスワードを入力してください"}
                  </span>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <span className="error-message">
                    {"英数字を含めた8文字以上で入力してください"}
                  </span>
                )}
              </label>

              {/* パスワード再入力 */}
              {/* <label className="free-word">
                <h3 className="heading6">
                  パスワード確認<span className="cAttention">*</span>
                </h3>
                <input
                  name={"password_again"}
                  type={"password"}
                  placeholder={"英数字を含めた8文字以上"}
                  ref={register({ required: true, minLength: 8 })}
                />
                {errors.password_again &&
                  errors.password_again.type === "required" && (
                    <span className="error-message">
                      {"パスワードを入力してください"}
                    </span>
                  )}
                {errors.password_again &&
                  errors.password_again.type === "minLength" && (
                    <span className="error-message">
                      {"英数字を含めた8文字以上で入力してください"}
                    </span>
                  )}
              </label> */}
            </div>

            <div className="contentBox contentBox--big">
              <h1 className="heading4">基本情報</h1>
              {/* <p>メールアドレス</p>
              <p>example@gmail.com</p> */}

              {/* 苗字 */}
              <label className="free-word">
                <h3 className="heading6">
                  苗字<span className="cAttention">*</span>
                </h3>
                <input
                  name={"last_name"}
                  type={"text"}
                  placeholder={"山田"}
                  ref={register({ required: true })}
                />
                {errors.last_name && errors.last_name.type === "required" && (
                  <span className="error-message">
                    {"苗字を入力してください"}
                  </span>
                )}
              </label>

              {/* 名前 */}
              <label className="free-word">
                <h3 className="heading6">
                  名前<span className="cAttention">*</span>
                </h3>
                <input
                  name={"first_name"}
                  type={"text"}
                  placeholder={"太郎"}
                  ref={register({ required: true })}
                />
                {errors.first_name && errors.first_name.type === "required" && (
                  <span className="error-message">
                    {"苗字を入力してください"}
                  </span>
                )}
              </label>

              {/* 性別 */}
              <div className="gender-select">
                <p className="gender-select__heading">性別</p>
                <ul className="gender-select-list">
                  <li>
                    <label className="btn select-btn current">
                      <span>男性</span>
                      <input
                        type="radio"
                        name="sex"
                        checked={true}
                        value="0"
                        ref={register}
                      />
                    </label>
                  </li>
                  <li>
                    <label className="btn select-btn">
                      <span>女性</span>
                      <input type="radio" name="sex" value="1" ref={register} />
                    </label>
                  </li>
                  <li>
                    <label className="btn select-btn">
                      <span>その他</span>
                      <input type="radio" name="sex" value="2" ref={register} />
                    </label>
                  </li>
                </ul>
              </div>

              {/* 現在の学年 */}
              <div className="label-input">
                <p className="label-input__txt">
                  現在の学年<span className="cAttention">*</span>
                </p>
                <div className="selectBox input--normal">
                  <div>
                    <select name={"annual"} ref={register}>
                      {annual &&
                        annual.map((item: any) => {
                          return (
                            <option value={item["name"]}>
                              {item.name + "年"}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
              </div>

              {/* サムネイル画像 */}
              <div className="label-input">
                <p>サムネイル画像</p>
                <input type="file" name="icon" ref={register} />
                <img className="image-preview" src={image} alt="" />
              </div>

              {/* 現在の学年 */}
              <div className="label-input">
                <p className="label-input__txt">
                  希望職種<span className="cAttention">*</span>
                </p>
                <div className="selectBox input--normal">
                  <div>
                    <select name={"desired_occupations"} ref={register}>
                      {jobs &&
                        jobs.map((item: any) => {
                          return (
                            <option value={item["id"]}>{item.name}</option>
                          );
                        })}
                    </select>
                  </div>
                </div>
              </div>

              {/* 卒業年 */}
              <div className="label-input">
                <p className="label-input__txt">
                  卒業年次<span className="cAttention">*</span>
                </p>
                <div className="selectBox input--normal">
                  <div>
                    <select name={"year_of_graduation"} ref={register}>
                      {yearGraduation &&
                        yearGraduation.map((item: any) => {
                          return (
                            <option value={item["id"]}>{item.name}</option>
                          );
                        })}
                    </select>
                  </div>
                </div>
              </div>

              <div className="label-input">
                <p className="label-input__txt">
                  個人情報の取り扱いについて
                  <span className="cAttention">*</span>
                </p>
                <p className="attension-lead">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
                </p>
              </div>

              <label id="agree" className={`input-component`}>
                <input
                  className="check-radio-input"
                  type={"checkbox"}
                  ref={register({ required: true })}
                  name={"agree_check"}
                />
                <label
                  htmlFor={"agree"}
                  className={"input-checkbox input-checkbox--normal"}
                >
                  <img src={CheckIcon} alt="" />
                </label>
                <span>
                  利用規約、プライバシーポリシー及び個人情報の取扱いについて同意する
                </span>
              </label>
              {errors.agree_check && errors.agree_check.type === "required" && (
                <span className="error-message">
                  {"利用規約に同意してください"}
                </span>
              )}

              {/* <input type="submit" className="btn btn--action" /> */}
              <button type="submit" className={`btn btn--rounded`}>
                送信
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  return <>{loading && renderDOM()}</>;
};

export default RegisterInsert;
