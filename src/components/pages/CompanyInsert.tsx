import React from 'react';
import {CameraIcon , LinkIcon} from '../../assets/images/index';
import {InputBig, ThumbnailUploadInput, PrefectureAccordion, InputDropdown} from '../form';
import {ActionBtn} from '../btn';


const CompanyInsert:React.FC = () => {
  const isError = [
      {isEmpty1: false},
      {isEmpty2: false},
      {isEmpty3: false}
  ];
  const employeesObj = [
    {value: '100~200人'},
    {value: '200~300人'},
    {value: '300~400人'},
    {value: '400~500人'}
  ];
  return (
    <section className="app-main company-insert single">
        <h2 className="heading1">企業登録</h2>
        <div className="companyInsert-window">
          <InputBig type="text" labelTxt="企業名" isRequired={true} placeholderTxt="ビジョナル株式会社" isError={isError} isIcon={false}/>
          <InputBig type="text" labelTxt="フリガナ" isRequired={true} placeholderTxt="カブシキガイシャビジョナル" isError={isError} isIcon={false}/>
          
          <ThumbnailUploadInput />

          <InputBig type="text" labelTxt="企業URL" isRequired={true} placeholderTxt="https://www.google.com" isError={isError} isIcon={true} iconUrl={LinkIcon}/>
          <InputBig type="text" labelTxt="事業内容" isRequired={false} placeholderTxt="UI/UXデザイン、ビジネスモデルデザイン、ソフトウェア開発" isError={isError} isIcon={false}/>

          <PrefectureAccordion />

          <InputDropdown ttl="従業員数" selectObj={employeesObj}/>

          <div className="company-insert__enter">
            <p className="company-insert__cancel">キャンセル</p>
            <ActionBtn txt="確認画面へ" isPlus={false} linkUrl="#"/>
          </div>

        </div>
    </section>
  );
}

export default CompanyInsert;
