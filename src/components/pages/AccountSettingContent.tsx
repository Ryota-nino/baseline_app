import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {ArrowIcon, TrashIcon} from '../../assets/images';
import {InputBig} from '../form';
import {ActionBtn} from '../btn';
import { AnimatePresence,motion } from 'framer-motion';



const AccountSettingContent:React.FC = props => {
    const history = useHistory();
    const isError = [
        {isEmpty1: false},
        {isEmpty2: false},
        {isEmpty3: false}
    ];
    const pageTransition = {
        in: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.2
          }
        },
        out: {
          x: -20,
          opacity: 0,
        },
    }
  return (
    <>
        <motion.section className="app-main account-setting" initial="out" animate="in" exit="out" variants={pageTransition}>
        <button className="btn pageBack-link" onClick={() => history.goBack()}><span className="heading4">設定一覧へ</span></button>
            <section className="contentBox contentBox--big step">
                <h3 className="heading4">学籍番号を変更</h3>
                <InputBig
                    type="number" 
                    labelTxt="学籍番号" 
                    isRequired={false} 
                    placeholderTxt=""
                    isError={isError}
                    isIcon={false}
                />
                <div>
                    <p>キャンセル</p>
                    <ActionBtn txt="保存" isPlus={false} />
                </div>
            </section>
        </motion.section>
    </>
  );
}

export default AccountSettingContent;
