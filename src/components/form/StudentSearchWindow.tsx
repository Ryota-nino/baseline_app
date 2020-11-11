import React, { useState } from "react";
import { SearchBar, InputCheckRadio, SelectBox } from "./index.js";

interface Props {
  className?: string;
}

const StudentSearchWindow: React.FC<Props> = (props) => {
  const [seachJob, setSeachJob] = useState<any>();
  const seachJobHandler = (value: any) => {
    setSeachJob(value);
    console.log(value);
  };

  const [seachGraduationYear, setSeachGraduationYear] = useState<any>();

  const seachGraduationYearHandler = (value: any) => {
    setSeachGraduationYear(value);
    console.log(value);
  };

  const jobList = ["デザイナー", "エンジニア", "企画職"];
  const yearList = ["21卒", "22卒", "23卒"];
  const renderJobList = () => {
    return jobList.map((item, index) => {
      return (
        <InputCheckRadio
          keyName={`job-${index}`}
          className={"checkbox-item"}
          type={"checkbox"}
          txt={item}
          checkboxFunc={seachJobHandler}
        />
      );
    });
  };

  return (
    <div className={`sideSearchBar ${props.className}`}>
      <div className="search-item">
        <p className="search-item__name">フリーワード</p>
        <SearchBar
          width={"200px"}
          isIcon={true}
          placeholder={"検索ワードを入力"}
        />
      </div>

      <div className="search-item">
        <p className="search-item__name">卒業年</p>
        <SelectBox
          name="graduation_year"
          options={yearList}
          selectFunc={seachGraduationYearHandler}
          required={false}
        />
      </div>

      <div className="search-item">
        <p className="search-item__name">希望職種</p>
        <div className="checkbox-list">{renderJobList()}</div>
      </div>
    </div>
  );
};

export default StudentSearchWindow;
