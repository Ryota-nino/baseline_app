import React, {useState} from 'react';
import {GearIcon} from '../../assets/images/index';
import {Link} from 'react-router-dom';
import {UserDetailWindow} from '../user';
import {MyActivityCountWindow} from '../activity';
import {UserComment} from '../user';
import {Modal} from '../modal';
import { motion } from 'framer-motion';

interface Props {
  type: 'user' | 'mypage';
  match?: any;
}

const UserPage:React.FC<Props> = props => {
  const [showModal, setShowModal] = useState<boolean>(false);
  let isUsrPage = props.type === 'user';
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
      <motion.section className={`app-main ${isUsrPage ? 'userpage' : 'mypage'} single`} initial="out" animate="in" exit="out" variants={pageTransition}>
        <h2 className="heading1">{isUsrPage ? `${props.match.params.id}さんのページ` : 'マイページ' }</h2>
        <UserDetailWindow />
        {/* {!isUsrPage && <p className="attention-txt"><img src={TrashIcon} alt="" />アカウントを削除する</p>} */}
        {!isUsrPage && <Link to="/01/account-setting" className="icon-txt icon-txt--normal"><img src={GearIcon} alt="" />アカウント設定へ</Link>}
        <MyActivityCountWindow />
        <div className="activity-list">
          <UserComment isArrow={true} type={props.type}　clickFunc={setShowModal}/>
          <UserComment isArrow={true} type={props.type}　clickFunc={setShowModal}/>
          <UserComment isArrow={true} type={props.type}　clickFunc={setShowModal}/>
          <UserComment isArrow={true} type={props.type}　clickFunc={setShowModal}/>
          <UserComment isArrow={true} type={props.type}　clickFunc={setShowModal}/>
          <UserComment isArrow={true} type={props.type}　clickFunc={setShowModal}/>
          <UserComment isArrow={true} type={props.type}　clickFunc={setShowModal}/>
        </div>
      </motion.section>
      {/* <Modal type="delete-account" showModal={showModal} setShowModal={setShowModal}/> */}
      <Modal type="activity-edit" showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
}

export default UserPage;
