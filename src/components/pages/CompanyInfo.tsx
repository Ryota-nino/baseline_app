import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {CompanyBar, CompanyDetailItem,} from '../company';
import {InputCheckRadio, FreeWordInput} from '../form';
import {ActionBtn, RoundedBtn} from '../btn';
import { Modal } from '../modal';
import { propTypes } from 'react-addons-css-transition-group';

interface Props {
  // showModal?: any;
  // setShowModal?: any;
}

const CompanyInfo:React.FC<Props> = props => {
  const history = useHistory();
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <section className="app-main company-info single">
          <button className="btn pageBack-link" onClick={() => history.goBack()}><span className="heading4">企業詳細へ</span></button>
          <CompanyBar hasActionBtn={false}/>
          <div className="contentBox2">
            <h2 className="heading4">共通情報</h2>
            <div className="company-info__form">
              <form action="">
                <FreeWordInput type="number" ttl="卒業年次" placeholder="22" unit="卒" isRequired={false} maxLength={3}/>
                <div>
                  <InputCheckRadio type="checkbox" txt="あなたはこの企業に入社予定ですか？" />
                  <RoundedBtn txt="保存" />
                </div>
              </form>
            </div>
          </div>

          <div className="contentBox2 added-info">
            <div>
              <h2 className="heading4">あなたが記入した情報</h2>
              <ActionBtn txt="情報を追加する" isPlus={false} showModal={showModal} setShowModal={setShowModal} />
            </div>
            <ul className="company-info__added">
              <li><CompanyDetailItem ttl="本選考 (22卒)" isPass={false} job="デザイナー" userName="山本 仁"/></li>
              <li><CompanyDetailItem ttl="サマーインターンシップ (22卒)" isPass={true} job="エンジニア" userName="中村 智"/></li>
              <li><CompanyDetailItem ttl="本選考 (22卒)" isPass={false} job="デザイナー" userName="山本 仁"/></li>
            </ul>
          </div>
      </section>
      <Modal type="select-post-category" showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
}

export default CompanyInfo;