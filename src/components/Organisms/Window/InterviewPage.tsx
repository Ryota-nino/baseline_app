import React, { useState, useEffect } from "react";
import { InterviewSheet } from ".";
import { SelectPrimary } from "../../Atoms/Input";
import { motion } from "framer-motion";
import { InsertAddBtn } from "../../Atoms/Btn";
import { SelectSecondary } from "../../Atoms/Input/index";
interface Props {
  window: any;
  func: any;
  pages: any;
  jobs: any;
  internship: any;
}

const InputWindowListInterview: React.FC<Props> = (props) => {
  let [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
  }, []);

  const calendarObj = [
    { id: 1, name: "1月" },
    { id: 1, name: "2月" },
    { id: 1, name: "3月" },
    { id: 1, name: "4月" },
    { id: 1, name: "5月" },
    { id: 1, name: "6月" },
    { id: 1, name: "7月" },
    { id: 1, name: "8月" },
    { id: 1, name: "9月" },
    { id: 1, name: "10月" },
    { id: 1, name: "11月" },
    { id: 1, name: "12月" },
  ];

  const result = [
    { id: 0, name: "不合格" },
    { id: 1, name: "合格" },
  ];
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
    <InterviewSheet id={todo.id} />
  ));

  const renderDOM = () => {
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
              options={props.internship}
              required={true}
            />
          </div>
          <div className="contentBox__flex mb16">
            <div className="label-input">
              <p className="label-input__txt">
                応募職種<span className="cAttention">*</span>
              </p>
              <SelectPrimary name="job" options={props.jobs} required={true} />
            </div>
            <div className="label-input">
              <p className="label-input__txt">結果</p>
              <SelectPrimary name="result" options={result} required={true} />
            </div>
          </div>
          <div className="label-input mb16">
            <p className="label-input__txt">
              選考種類<span className="cAttention">*</span>
            </p>
            <SelectSecondary name="date" ttl="" selectObj={calendarObj} />
          </div>
        </article>

        {element}
        <InsertAddBtn txt="項目を追加" click={createInputWindow} />
      </motion.form>
    );
  };
  return <>{loading && renderDOM()}</>;
};

export default InputWindowListInterview;
