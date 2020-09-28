import React from 'react';
import StudentSearchWindow from '../form/StudentSearchWindow';
import {StudentListCard} from '../card';
import {Pagenation} from '../common';
import { AnimatePresence,motion } from 'framer-motion';

const SearchStudent:React.FC = () => {
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
    <motion.section className="app-main searchStudent" initial="out" animate="in" exit="out" variants={pageTransition}>
      <h2 className="heading1">他者の就活を探す</h2>
      <div className="app-main__container">
          <StudentSearchWindow className={"left-col"}/>
          <div className="right-col">
            <div className="studentListTable">
              <div className="studentListTable__head">
                <ul>
                  <li className="studentListTable__heading">ユーザー</li>
                  <li className="studentListTable__heading">卒業年次</li>
                  <li className="studentListTable__heading">希望職種</li>
                  <li className="studentListTable__heading">更新日時</li>
                </ul>
              </div>
              <div className="studentListTable__wrapper">
                <StudentListCard />
                <StudentListCard />
                <StudentListCard />
                <StudentListCard />
                <StudentListCard />
                <StudentListCard />
              </div>
              <Pagenation />
            </div>  
          </div>
      </div>
    </motion.section>
  );
}

export default SearchStudent;
