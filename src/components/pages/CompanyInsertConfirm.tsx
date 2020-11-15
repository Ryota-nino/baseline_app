import React from "react";
import { LinkIcon } from "../../assets/images/index";
import { ImageUpload, SelectSecondary } from "../Atoms/Input/index";
import { PrefectureSelector } from "../Organisms/Input/index";
import { Secondary } from "../Atoms/TextInput";
import { ActionBtn } from "../Atoms/Btn";
import { motion } from "framer-motion";

const CompanyInsertConfirm: React.FC = () => {
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
        <form action="/company-insert-confirm" method="GET">
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
              txt="確認画面へ"
              isPlus={false}
              linkUrl="#"
            />
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default CompanyInsertConfirm;
