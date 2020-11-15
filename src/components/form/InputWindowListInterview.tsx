import React, { useState } from "react";
import { InputWindowInterview } from "./index";
import { SelectPrimary } from "../Atoms/Input";
import { motion } from "framer-motion";
import { InsertAddBtn } from "../Atoms/Btn";

interface Props {
  window: any;
  func: any;
  pages: any;
}

const InputWindowListInterview: React.FC<Props> = (props) => {
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
  const result = ["合格", "不合格"];
  const interviewPeople = ["1人", "2人", "3人", "4人", "5人以上"];

  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
    out: {
      x: 20,
      opacity: 0,
    },
  };

  let [inputWindow, setInputWindow] = useState([{ id: 1 }]);
  let windowLength = inputWindow.length;
  function createInputWindow() {
    if (windowLength < 10) {
      console.log(inputWindow);
      setInputWindow([...inputWindow, { id: windowLength + 1 }]);
    }
  }

  const element = inputWindow.map((todo: any) => (
    <InputWindowInterview id={todo.id} />
  ));
  //   const element = props.window.map((todo: any) => (
  //     <InputWindowInterview id={todo.id} />
  //   ));

  return (
    <motion.form
      id={`interview-${props.pages === 0 ? "0" : props.pages.length}`}
      className="company-info-edit__left-col companyEdit-form"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <article className="contentBox contentBox--big">
        <h1 className="heading4">
          {props.pages === 0 ? "1" : props.pages.length + 1}
          次面接の概要をご記入ください
        </h1>
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
        <div className="contentBox__flex mb16">
          <div className="label-input">
            <p className="label-input__txt">
              応募職種<span className="cAttention">*</span>
            </p>
            <SelectPrimary name="job" options={jobTypes} required={true} />
          </div>
          <div className="label-input">
            <p className="label-input__txt">結果</p>
            <SelectPrimary name="result" options={result} required={true} />
          </div>
        </div>
        {/* <div className="label-input">
                    <p className="label-input__txt">面接人数</p>
                    <SelectBox options={interviewPeople} />
                </div> */}
      </article>

      {element}
      {/* <InsertAddBtn txt="項目を追加" click={props.func} /> */}
      <InsertAddBtn txt="項目を追加" click={createInputWindow} />
    </motion.form>
  );
};

export default InputWindowListInterview;
