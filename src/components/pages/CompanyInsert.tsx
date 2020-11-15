import React from "react";
import { LinkIcon } from "../../assets/images/index";
import { Secondary } from "../Atoms/TextInput";
import { ImageUpload, SelectSecondary } from "../Atoms/Input/index";
import { PrefectureSelector } from "../Organisms/Input";
import { ActionBtn } from "../Atoms/Btn";
import { motion } from "framer-motion";
import { insertCompany } from "../../assets/script/index";

const CompanyInsert: React.FC = () => {
  const isError = [
    { isEmpty1: false },
    { isEmpty2: false },
    { isEmpty3: false },
  ];
  const employeesObj = [
    { value: "100~200人" },
    { value: "200~300人" },
    { value: "300~400人" },
    { value: "400~500人" },
  ];
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
    out: {
      x: -20,
      opacity: 0,
    },
  };
  const formOnClickHandler = (e: any) => {
    const forms = document.forms[0];
    const company_name = forms.company_name;
    const furigana = forms.furigana;
    const logo = forms.logo.files[0];
    const url = forms.url;
    const business = forms.business.value;
    const employee_number = forms.employee_number.value;
    const prefArray: number[] = [];
    const fr = new FileReader();

    forms.pref.forEach((item: any) => {
      if (item.checked) {
        const numberPref: number = Number(item.dataset.key);
        prefArray.push(numberPref);
      }
    });
    const sendObj: any = {
      frigana: furigana.value,
      company_name: company_name.value,
      business_description: business,
      prefecture_id: prefArray,
      number_of_employees: 1000,
      logo_path: "aaaa",
      company_url: url.value,
    };
    // 画像まだらしいので保留
    // fr.onloadend = function () {
    //   sendObj.logo_path = String(fr.result);
    // };
    // fr.readAsDataURL(logo);
    insertCompany(sendObj);
  };

  return (
    <motion.section
      className="app-main company-insert single"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <h2 className="heading1">企業登録</h2>
      <div className="companyInsert-window">
        <form action="#" method="POST">
          <Secondary
            name="company_name"
            type="text"
            labelTxt="企業名"
            isRequired={true}
            isRequiredTxt={true}
            placeholderTxt="ビジョナル株式会社"
            isError={isError}
            isIcon={false}
          />
          <Secondary
            name="furigana"
            type="text"
            labelTxt="フリガナ"
            isRequired={true}
            isRequiredTxt={true}
            placeholderTxt="カブシキガイシャビジョナル"
            isError={isError}
            isIcon={false}
          />

          <ImageUpload name={"logo"} />

          <Secondary
            name="url"
            type="text"
            labelTxt="企業URL"
            isRequired={true}
            isRequiredTxt={true}
            placeholderTxt="https://www.google.com"
            isError={isError}
            isIcon={true}
            iconUrl={LinkIcon}
          />
          <Secondary
            name="business"
            type="text"
            labelTxt="事業内容"
            isRequired={false}
            isRequiredTxt={false}
            placeholderTxt="UI/UXデザイン、ビジネスモデルデザイン、ソフトウェア開発"
            isError={isError}
            isIcon={false}
          />

          <PrefectureSelector />

          <SelectSecondary
            name="employee_number"
            ttl="従業員数"
            selectObj={employeesObj}
          />

          <div className="company-insert__enter">
            <p className="company-insert__cancel">キャンセル</p>
            <ActionBtn
              type="submit"
              txt="登録する"
              isPlus={false}
              linkUrl="#"
              clickFunc={formOnClickHandler}
            />
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default CompanyInsert;
