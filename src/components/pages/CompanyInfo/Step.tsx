import React, { useState } from "react";
import { Link } from "react-router-dom";

import { SelectPrimary } from "../../Atoms/Input";
import { InsertAddBtn } from "../../Atoms/Btn";
import { CompanyInfo } from "../../Molecules/Card/index";
import { StepSheet } from "../../Organisms/Window";

const Step: React.FC = (props) => {
  let [inputWindow, setInputWindow] = useState([{ id: 1 }]);
  let inputLength = inputWindow.length;
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

  const createInputWindow = () => {
    if (inputLength < 10) {
      setInputWindow([...inputWindow, { id: inputLength + 1 }]);
    }
  };

  return (
    <main className="main company-info-edit">
      <div className="main__container">
        <Link to="/company-info" className="btn pageBack-link">
          <span className="heading4">情報一覧へ</span>
        </Link>
        <div id="type-step" className="company-info-edit__container">
          <form className="company-info-edit__left-col">
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
                  <SelectPrimary
                    name="job"
                    options={jobTypes}
                    required={true}
                  />
                </div>
                {/* <div className="label-input">
                    <FreeWordInput isRequired={true} type="string" ttl="その他" placeholder="職種を入力" />
                </div> */}
              </div>
            </article>

            {/* <InputWindowListStep obj={inputWindow} /> */}
            {inputWindow.map((box) => {
              return <StepSheet id={box.id} />;
            })}

            <InsertAddBtn txt="項目を追加" click={createInputWindow} />
          </form>
          <CompanyInfo />
        </div>
      </div>
    </main>
  );
};

export default Step;
