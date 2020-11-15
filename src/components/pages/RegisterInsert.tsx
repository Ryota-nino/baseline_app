import React, { useEffect } from "react";
import {
  Logo,
  MailIcon,
  DocumentIcon_White,
  CheckIcon,
} from "../../assets/images/index";

import { SelectPrimary } from "../Atoms/Input";
import { Primary } from "../Atoms/TextInput";
import { CheckboxWithText } from "../Molecules/Input";
import { ActionBtn } from "../Atoms/Btn/index";
import { Header } from "../Organisms/Header/index";

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

  return (
    <div className="register">
      <Header needBtn={true} />

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
              type="number"
              ttl="学籍番号"
              placeholder="学校から配布された６桁の番号"
              isRequired={true}
            />
            <Primary
              type="password"
              ttl="パスワード"
              placeholder="英数字を含めた8文字以上"
              isRequired={true}
            />
            <Primary
              type="password"
              ttl="パスワード確認"
              placeholder="英数字を含めた8文字以上"
              isRequired={true}
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
            />
            <Primary
              type="text"
              ttl="名前"
              placeholder="太郎"
              isRequired={true}
            />
            <div className="gender-select">
              <p className="gender-select__heading">性別</p>
              <ul className="gender-select-list">
                <li>
                  <label className="btn select-btn current">
                    <span>男性</span>
                    <input type="checkbox" name="" />
                  </label>
                </li>
                <li>
                  <label className="btn select-btn">
                    <span>女性</span>
                    <input type="checkbox" name="" />
                  </label>
                </li>
                <li>
                  <label className="btn select-btn">
                    <span>その他</span>
                    <input type="checkbox" name="" />
                  </label>
                </li>
              </ul>
            </div>

            <p>サムネイル画像</p>
            <input type="file" />

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
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterInsert;
