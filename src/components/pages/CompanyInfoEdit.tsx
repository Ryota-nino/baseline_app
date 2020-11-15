import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { TrashIcon, PenIcon } from "../../assets/images/index";
import { TextareaPrimary, Primary, Secondary } from "../Atoms/TextInput";
import { SelectSecondary } from "../Atoms/Input";
import { SelectPrimary } from "../Atoms/Input";
import { InsertAddBtn } from "../Atoms/Btn";
import { CompanyInfo } from "../Molecules/Card/index";

interface Props {
  thisPage: string;
}

const CompanyInfoEdit: React.FC<Props> = (props) => {
  const isError = [
    { isEmpty1: false },
    { isEmpty2: false },
    { isEmpty3: false },
  ];
  const calendarObj = [
    { value: "1月" },
    { value: "2月" },
    { value: "3月" },
    { value: "4月" },
    { value: "5月" },
    { value: "6月" },
    { value: "7月" },
    { value: "8月" },
    { value: "9月" },
    { value: "10月" },
    { value: "11月" },
    { value: "12月" },
  ];
  const jobInterviewTypes = [
    "本選考",
    "サマーインターン",
    "ウィンターインターン",
    "スプリングインターン",
  ];
  const jobTypes = [
    "デザイナー",
    "エンジニア",
    "企画職",
    "イラストレーター",
    "その他",
  ];
  const addTabBtn = useRef<HTMLButtonElement>(null);
  const insertTab = useRef<HTMLOListElement>(null);
  useEffect(() => {
    addTabBtn.current?.addEventListener("click", () => {
      const tabs = document.querySelectorAll(".insert-tab__item");
      console.log(tabs);
      const li = document.createElement("li");
      li.classList.add("insert-tab__item");
      li.textContent = "二次面接";
      insertTab.current?.append(li);
    });
  }, []);

  const renderContents = () => {
    if (props.thisPage === "step") {
      return (
        <>
          <article className="contentBox contentBox--big step">
            <h1 className="heading4">選考ステップ1</h1>
            <div className="contentBox__wrap">
              <Secondary
                name="title"
                type="string"
                labelTxt="タイトル"
                isRequired={true}
                isRequiredTxt={true}
                placeholderTxt="例) エントリーシート"
                isError={isError}
                isIcon={false}
              />
              <SelectSecondary name="date" ttl="" selectObj={calendarObj} />
            </div>
            <div className="input-txtarea">
              <p className="input-txtarea__heading">本文</p>
              <textarea placeholder="本文を記入"></textarea>
            </div>
            <div className="btn btn--delete">
              <img src={TrashIcon} alt="" />
            </div>
          </article>
          <article className="contentBox contentBox--big step">
            <h1 className="heading4">選考ステップ2</h1>
            <div className="contentBox__wrap">
              <Secondary
                name="title"
                type="string"
                labelTxt="タイトル"
                isRequired={true}
                isRequiredTxt={true}
                placeholderTxt="例) エントリーシート"
                isError={isError}
                isIcon={false}
              />
              <SelectSecondary name="date" ttl="" selectObj={calendarObj} />
            </div>
            <TextareaPrimary ttl="本文" placeholder="本文を記入" />
            <div className="btn btn--delete">
              <img src={TrashIcon} alt="" />
            </div>
          </article>
        </>
      );
    } else if (props.thisPage === "interview") {
      return (
        <>
          <article className="contentBox contentBox--big interview">
            <h1 className="heading4">面接の内容</h1>
            <TextareaPrimary
              ttl="面接を受けた感想をお書きください"
              placeholder="アドバイスや指摘、気づいた点など"
            />
            <div className="btn btn--delete">
              <img src={TrashIcon} alt="" />
            </div>
          </article>
        </>
      );
    } else if (props.thisPage === "entry") {
      return (
        <>
          <article className="contentBox contentBox--big entry">
            <h1 className="heading4">エントリーシート</h1>
            <Secondary
              name="title"
              className="mb42"
              type="string"
              labelTxt="タイトル"
              isRequired={true}
              isRequiredTxt={true}
              placeholderTxt="例) エントリーシート"
              isError={isError}
              isIcon={false}
            />
            <TextareaPrimary ttl="本文" placeholder="本文を記入" />
            <div className="btn btn--delete">
              <img src={TrashIcon} alt="" />
            </div>
          </article>
          <article className="contentBox contentBox--big entry">
            <Secondary
              name="title"
              className="mb42"
              type="string"
              labelTxt="タイトル"
              isRequired={true}
              isRequiredTxt={true}
              placeholderTxt="例) エントリーシート"
              isError={isError}
              isIcon={false}
            />
            <TextareaPrimary ttl="本文" placeholder="本文を記入" />
            <div className="btn btn--delete">
              <img src={TrashIcon} alt="" />
            </div>
          </article>
        </>
      );
    }
  };

  const renderSummary = () => {
    if (props.thisPage === "step") {
      return (
        <article className="contentBox contentBox--big">
          <h1 className="heading4">概要</h1>
          <div className="label-input mb16">
            <p className="label-input__txt">
              選考種類<span className="cAttention">*</span>
            </p>
            <SelectPrimary
              name="selection_type"
              options={jobInterviewTypes}
              required={true}
            />
          </div>
          <div className="contentBox__flex">
            <div className="label-input">
              <p className="label-input__txt">
                応募職種<span className="cAttention">*</span>
              </p>
              <SelectPrimary name="job" options={jobTypes} required={true} />
            </div>
            <div className="label-input">
              <Primary
                isRequired={true}
                type="string"
                ttl="その他"
                placeholder="職種を入力"
              />
            </div>
          </div>
        </article>
      );
    } else if (props.thisPage === "interview") {
      return (
        <article className="contentBox contentBox--big">
          <h1 className="heading4">概要</h1>
          <div className="label-input mb16">
            <p className="label-input__txt">
              選考種類<span className="cAttention">*</span>
            </p>
            <SelectPrimary
              name="selection_type"
              options={jobInterviewTypes}
              required={true}
            />
          </div>
          <div className="contentBox__flex">
            <div className="label-input">
              <p className="label-input__txt">
                応募職種<span className="cAttention">*</span>
              </p>
              <SelectPrimary name="job" options={jobTypes} required={true} />
            </div>
            <div className="label-input">
              <Primary
                isRequired={false}
                type="string"
                ttl="結果"
                placeholder="合格"
              />
            </div>
          </div>
        </article>
      );
    } else if (props.thisPage === "entry") {
      return (
        <article className="contentBox contentBox--big">
          <h1 className="heading4">概要</h1>
          <div className="label-input mb16">
            <p className="label-input__txt">
              選考種類<span className="cAttention">*</span>
            </p>
            <SelectPrimary
              name="selection_type"
              options={jobInterviewTypes}
              required={true}
            />
          </div>
          <div className="contentBox__flex">
            <div className="label-input">
              <p className="label-input__txt">
                応募職種<span className="cAttention">*</span>
              </p>
              <SelectPrimary name="job" options={jobTypes} required={true} />
            </div>
            <div className="label-input">
              <Primary
                isRequired={true}
                type="string"
                ttl="その他"
                placeholder="職種を入力"
              />
            </div>
          </div>
        </article>
      );
    }
  };

  return (
    <>
      {props.thisPage === "interview" && (
        <div className="insert-tab">
          <ol ref={insertTab} className="insert-tab__wrap">
            <li className="insert-tab__item current">
              <span>
                一次面接
                <img src={PenIcon} alt="" />
              </span>
            </li>
            {/* <li className="insert-tab__item">二次面接</li> */}
          </ol>
          <button ref={addTabBtn} className="btn btn--plus"></button>
        </div>
      )}
      <main className="main company-info-edit">
        <div className="main__container">
          <Link to="/company-info" className="btn pageBack-link">
            <span className="heading4">情報一覧へ</span>
          </Link>
          <div className="company-info-edit__container">
            <div className="company-info-edit__left-col">
              {renderSummary()}
              {renderContents()}
              <InsertAddBtn txt="項目を追加" />
            </div>
            <CompanyInfo />
          </div>
        </div>
      </main>
    </>
  );
};

export default CompanyInfoEdit;
