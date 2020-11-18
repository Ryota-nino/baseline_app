import React, { useState, useEffect } from "react";
import StudentSearch from "../Organisms/Window/StudentSearch";
import { StudentList } from "../Molecules/Card";
import { Pagenation } from "../Organisms/Header";
import { motion } from "framer-motion";
import { pageTransitionNormal } from "../../assets/script/pageTransition";
import axios from "axios";

const SearchStudent: React.FC = () => {
  const [students, setStudents] = useState<any>();
  useEffect(() => {
    const url = "./database/account.json";
    axios.get(url).then((res) => {
      const output = res.data;
      setStudents(output);
    });
    console.log(students);
  }, []);

  // const getUser = () => {
  //   apiClient.get("/sanctum/csrf-cookie").then((response) => {
  //     apiClient
  //       .get("/api/auth/user")
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   });
  // };

  return (
    <motion.section
      className="app-main searchStudent"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransitionNormal}
    >
      <h2 className="heading1">他者の就活を探す</h2>
      <div className="app-main__container">
        <StudentSearch className={"left-col"} />
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
            <motion.div
              className="studentListTable__wrapper"
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransitionNormal}
            >
              {(() => {
                if (students) {
                  return students.map((data: any) => (
                    <StudentList
                      id={data.id}
                      name={`${data.last_name} ${data.first_name}`}
                      student_number={data.student_number}
                      graduationYear={data.graduation_year}
                      job={data.job}
                      updateTime={data.updateTime}
                    />
                  ));
                }
              })()}
            </motion.div>

            <Pagenation />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SearchStudent;
