import React, { useState, useEffect } from "react";
import { CheckIcon } from "../../../assets/images/index";

interface Props {
  type: "checkbox" | "radio";
  category?: string;
  checkboxFunc?: any;
  keyName?: string;
  id?: string;
  className?: string;
  txt?: string;
  checkedPref?: string[];
  isChecked?: boolean;
}

const Checkbox: React.FC<Props> = (props) => {
  let typeClass;
  if (props.type === "checkbox") {
    typeClass = "input-checkbox input-checkbox--normal";
  }
  const checkHandler = (e: any) => {
    e.stopPropagation();
    // 卒業生の在籍
    if (props.category == "enrollment_of_graduates" && props.checkboxFunc) {
      props.checkboxFunc(e.currentTarget.checked);
    }
    // 希望職種
    if (props.category == "jobs" && props.checkboxFunc) {
      if (e.currentTarget.checked) {
        props.checkboxFunc(e.currentTarget.name, true);
      } else {
        props.checkboxFunc(e.currentTarget.name, false);
      }
    }
    // 都道府県
    if (props.category == "prefectures" && props.checkboxFunc) {
      if (e.currentTarget.checked) {
        props.checkboxFunc(e.currentTarget.name, true);
      } else {
        props.checkboxFunc(e.currentTarget.name, false);
      }
    }
    // 地域選択(企業登録)
    if (props.category == "prefSelect" && props.checkboxFunc) {
      if (e.currentTarget.checked) {
        props.checkboxFunc();
      }
    }
  };
  const isCheckedPref = () => {
    return props.checkedPref?.some((pref: any) => {
      if (props.id == pref.id) {
        return true;
      } else {
        return false;
      }
    });
  };
  const onDefaultCheckedFunc = ()=> {
    if(props.checkedPref){
      isCheckedPref()
    }
    if(props.isChecked){
      return true;
    }
  }
  
  return (
    <>
      <input
        onChange={checkHandler}
        id={`input-${props.id}`}
        data-key={props.id}
        className="check-radio-input"
        type={props.type}
        value={props.txt}
        name={props.keyName}
        defaultChecked={onDefaultCheckedFunc()}
      />
      <label htmlFor={`input-${props.id}`} className={`${typeClass}`}>
        <img src={CheckIcon} alt="" />
      </label>
    </>
  );
};

export default Checkbox;
