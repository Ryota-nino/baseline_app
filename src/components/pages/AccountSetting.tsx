import React, {useState} from 'react';
import {ArrowIcon, TrashIcon} from '../../assets/images/';
import {Link} from 'react-router-dom';
import { AnimatePresence,motion } from 'framer-motion';
import {Modal} from '../modal';

const AccountSetting:React.FC = props => {
    const [showModal, setShowModal] = useState<boolean>(false);
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
            <h2 className="heading1">設定</h2>
            <section className="contentBox contentBox--big step">
                <h3 className="heading4">アカウント設定</h3>
                <ul className="setting-list">
                    <li className="setting-item">
                        <Link to="/01/account-setting/student-number" >
                            <p className="setting-item__label">学籍番号</p>
                            <p className="setting-item__value">2180075</p>
                            <p className="setting-item__arrow"><img src={ArrowIcon} alt=""/></p>
                        </Link>
                    </li>
                    <li className="setting-item">
                        <Link to="/01/account-setting/password" >
                            <p className="setting-item__label">パスワード</p>
                            <p className="setting-item__value">●●●●●●●●●</p>
                            <p className="setting-item__arrow"><img src={ArrowIcon} alt=""/></p>
                        </Link>
                    </li>
                    <li className="setting-item">
                        <Link to="/01/account-setting/mail" >
                            <p className="setting-item__label">メールアドレス</p>
                            <p className="setting-item__value">ogurahiroki@gmail.com</p>
                            <p className="setting-item__arrow"><img src={ArrowIcon} alt=""/></p>
                        </Link>
                    </li>
                    <li className="setting-item delete" onClick={()=> setShowModal(true)}>
                        <p className="icon-txt icon-txt--attention"><img src={TrashIcon} alt="" />アカウントを削除する</p>
                        <p className="setting-item__arrow"><img src={ArrowIcon} alt=""/></p>
                    </li>
                </ul>
            </section>
            <Modal type="account-delete" showModal={showModal} setShowModal={setShowModal}/>
        </motion.section>
    </>
  );
}

export default AccountSetting;
