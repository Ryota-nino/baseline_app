import React, { useEffect, useState } from "react";
import {
  MailIcon,
  DocumentIcon_White,
  CheckIcon,
} from "../../../assets/images/index";

import { SelectPrimary } from "../../Atoms/Input";
import { Primary } from "../../Atoms/TextInput";
import { CheckboxWithText } from "../../Molecules/Input";
import { ActionBtn } from "../../Atoms/Btn/index";

const RegisterInsert: React.FC = (props) => {
  useEffect(() => {
    selectBtnChanges();
  }, []);

  const selectBtnChanges = () => {
    const selectBtns = document.querySelectorAll(".select-btn");
    console.log(selectBtns);
    selectBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        selectBtns.forEach((item) => {
          item.classList.remove("current");
        });
        btn.classList.add("current");
      });
    });
  };

  const jobTypes = [
    "デザイナー",
    "エンジニア",
    "企画職",
    "イラストレーター",
    "その他",
  ];

  const yearList = ["21卒", "22卒", "23卒"];

  const onSubmitHandler = () => {
    checkForms();
  };

  const isEmptyValidation = (
    el: any,
    errors: Array<boolean>,
    message: string
  ) => {
    let elError = el.parentNode?.querySelector(".error-message")!;
    if (el.value === "") {
      elError.textContent = `${message}`;
      errors.push(true);
    } else {
      elError.textContent = "";
    }
  };

  const checkInputLength = (
    el: HTMLInputElement,
    maxLength: number,
    errors: Array<boolean>,
    message: string
  ) => {
    let elError = el.parentNode?.querySelector(".error-message")!;
    if (el.value.length > maxLength) {
      elError.textContent = `${message}`;
      errors.push(true);
    } else if (el.value !== "") {
      elError.textContent = "";
    }
  };

  const passwordAgainCheck = (
    password: HTMLInputElement,
    passwordAgain: HTMLInputElement,
    errors: Array<boolean>,
    message: string
  ) => {
    let elError = passwordAgain.parentNode?.querySelector(".error-message")!;
    if (password.value !== passwordAgain.value) {
      elError.textContent = `${message}`;
      errors.push(true);
      console.log("!");
    }
  };

  const [image, setImage] = useState("");
  const onImageHandler = (event: any) => {
    const sendObj = {
      image: "",
    };
    const image = event.target.files[0];
    const imageUrl = URL.createObjectURL(image);
    setImage(imageUrl);
    const fr = new FileReader();
    fr.onloadend = function () {
      sendObj.image = String(fr.result);
    };
    fr.readAsDataURL(image);
  };

  const createSendData = () => {};

  const checkForms = () => {
    const student_number = document.querySelector(
      'input[name="student_number"]'
    ) as HTMLInputElement;
    const password = document.querySelector(
      'input[name="password"]'
    ) as HTMLInputElement;
    const passwordAgain = document.querySelector(
      'input[name="password_again"]'
    ) as HTMLInputElement;
    const lastName = document.querySelector(
      'input[name="last_name"]'
    ) as HTMLInputElement;
    const firstName = document.querySelector(
      'input[name="first_name"]'
    ) as HTMLInputElement;
    const errors: Array<boolean> = [];
    let isError: boolean = false;
    isEmptyValidation(student_number, errors, "学籍番号を入力してください");
    isEmptyValidation(password, errors, "パスワードを入力してください");
    isEmptyValidation(
      passwordAgain,
      errors,
      "パスワードを再度入力してください"
    );
    isEmptyValidation(lastName, errors, "苗字を入力してください");
    isEmptyValidation(firstName, errors, "名前を入力してください");
    checkInputLength(
      student_number,
      10,
      errors,
      "10文字以内で入力してください"
    );
    checkInputLength(password, 30, errors, "30文字以内で入力してください");
    checkInputLength(passwordAgain, 30, errors, "30文字以内で入力してください");
    checkInputLength(lastName, 30, errors, "30文字以内で入力してください");
    checkInputLength(firstName, 30, errors, "30文字以内で入力してください");
    passwordAgainCheck(
      password,
      passwordAgain,
      errors,
      "パスワードが合致しません"
    );
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
      <ul className="register-step">
        <li className="current">
          <img src={MailIcon} alt="" />
          <span>メール認証</span>
        </li>
        <li>
          <img src={DocumentIcon_White} alt="" />
          <span>基本情報入力</span>
        </li>
        <li>
          <img src={CheckIcon} alt="" />
          <span>会員登録完了</span>
        </li>
      </ul>

      <div className="formBox">
        <form method="POST" action="#">
          <div className="contentBox contentBox--big">
            <h1 className="heading4">
              アカウント情報<span>*は必須項目です</span>
            </h1>
            <p>メールアドレス</p>
            <p>example@gmail.com</p>
            <Primary
              name="student_number"
              type="number"
              ttl="学籍番号"
              placeholder="学校から配布された６桁の番号"
              isRequired={true}
              isError={true}
            />
            <Primary
              name="password"
              type="password"
              ttl="パスワード"
              placeholder="英数字を含めた8文字以上"
              isRequired={true}
              isError={true}
            />
            <Primary
              name="password_again"
              type="password"
              ttl="パスワード確認"
              placeholder="英数字を含めた8文字以上"
              isRequired={true}
              isError={true}
            />
          </div>

          <div className="contentBox contentBox--big">
            <h1 className="heading4">基本情報</h1>
            <p>メールアドレス</p>
            <p>example@gmail.com</p>
            <Primary
              type="text"
              ttl="苗字"
              placeholder="山田"
              isRequired={true}
              name="last_name"
              isError={true}
            />
            <Primary
              type="text"
              ttl="名前"
              placeholder="太郎"
              isRequired={true}
              name="first_name"
              isError={true}
            />
            <div className="gender-select">
              <p className="gender-select__heading">性別</p>
              <ul className="gender-select-list">
                <li>
                  <label className="btn select-btn current">
                    <span>男性</span>
                    <input type="checkbox" name="gender" />
                  </label>
                </li>
                <li>
                  <label className="btn select-btn">
                    <span>女性</span>
                    <input type="checkbox" name="gender" />
                  </label>
                </li>
                <li>
                  <label className="btn select-btn">
                    <span>その他</span>
                    <input type="checkbox" name="gender" />
                  </label>
                </li>
              </ul>
            </div>

            <p>サムネイル画像</p>
            <input type="file" onChange={onImageHandler} />
            <img className="image-preview" src={image} alt="" />

            <div className="label-input">
              <p className="label-input__txt">
                希望職種<span className="cAttention">*</span>
              </p>
              <SelectPrimary name="job" options={jobTypes} required={true} />
            </div>

            <div className="label-input">
              <p className="label-input__txt">
                卒業年次<span className="cAttention">*</span>
              </p>
              <SelectPrimary
                name="graduation_year"
                options={yearList}
                required={true}
              />
            </div>

            <div className="label-input">
              <p className="label-input__txt">
                卒業年次<span className="cAttention">*</span>
              </p>
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
              </p>
            </div>

            <CheckboxWithText
              type="checkbox"
              txt="利用規約、プライバシーポリシー及び個人情報の取扱いについて同意する"
            />

            <ActionBtn
              type="submit"
              txt="会員登録を完了する"
              isPlus={false}
              linkUrl="#"
              clickFunc={onSubmitHandler}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterInsert;
