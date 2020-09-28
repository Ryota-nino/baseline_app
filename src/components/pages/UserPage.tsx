import React from 'react';
import {TrashIcon} from '../../assets/images/index';
import {UserDetailWindow} from '../user';
import {MyActivityCountWindow} from '../activity';
import {UserComment} from '../user';
import { AnimatePresence,motion } from 'framer-motion';

const UserPage:React.FC = () => {
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
    <motion.section className="app-main mypage single" initial="out" animate="in" exit="out" variants={pageTransition}>
      <h2 className="heading1">マイページ</h2>
      <UserDetailWindow />
      <p className="attention-txt"><img src={TrashIcon} alt="" />アカウントを削除する</p>
      <MyActivityCountWindow />
      <div className="activity-list">
        <UserComment isArrow={true} />
        <UserComment isArrow={true} />
        <UserComment isArrow={true} />
        <UserComment isArrow={true} />
        <UserComment isArrow={true} />
        <UserComment isArrow={true} />
        <UserComment isArrow={true} />
      </div>
    </motion.section>
  );
}

export default UserPage;
