import React, {useState, useEffect} from 'react';
import StudentSearchWindow from '../form/StudentSearchWindow';
import {StudentListCard} from '../card';
import {Pagenation} from '../common';
import { AnimatePresence,motion } from 'framer-motion';
import axios from "axios";

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

  const [students, setStudents] = useState<any>();
  useEffect( ()=> {

    const url = "./students.json";
    axios.get(url).then(res => {
      const output = res.data;
      setStudents(
        output,
      );
    })
  }, []);
  
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
              <motion.div className="studentListTable__wrapper" initial="out" animate="in" exit="out" variants={pageTransition}>
                {/* {students.map((data:any) => (
                  <StudentListCard />
                ))} */}
                {console.log(students)}
                
              </motion.div>
              {/* <Pagenation pageNum={pageNum} setPageNum={setPageNum}/> */}
              <Pagenation/>
            </div>  
          </div>
      </div>
    </motion.section>
  );
}

export default SearchStudent;
