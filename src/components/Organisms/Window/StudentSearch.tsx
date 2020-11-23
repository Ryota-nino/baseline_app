import React, { useState } from "react";

import { Search } from "../../Atoms/TextInput";
import { CheckboxWithText } from "../../Molecules/Input";
import { SelectPrimary } from "../../Atoms/Input/index.js";

interface Props {
  searchFunc: any;
  className?: string;
}

const StudentSearch: React.FC<Props> = (props) => {
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
        <CheckboxWithText
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
        <p className="search-item__name">ユーザー名で検索</p>
        <Search
          width={"200px"}
          isIcon={true}
          placeholder={"検索ワードを入力"}
          searchFunc={props.searchFunc}
          types={"student_name"}
        />
      </div>

      <div className="search-item">
        <p className="search-item__name">卒業年</p>
        <SelectPrimary
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

export default StudentSearch;
