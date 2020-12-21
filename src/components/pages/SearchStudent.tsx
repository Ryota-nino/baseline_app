import React, { useState, useEffect } from "react";
import StudentSearch from "../Organisms/Window/StudentSearch";
import { StudentList } from "../Molecules/Card";
import { Pagenation } from "../Organisms/Header";
import { motion } from "framer-motion";
import { pageTransitionNormal } from "../../assets/script/pageTransition";
import axios from "axios";
import { searchUser } from "../../assets/script/index";

const SearchStudent: React.FC = () => {
  const [students, setStudents] = useState<any>();
  const [usersData, setUsersData] = useState<any>([]);
  const [query, setQuery] = useState<object>();

  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const url = "./database/account.json";
    axios.get(url).then((res) => {
      const output = res.data;
      setStudents(output);
    });

    searchUser({ ...query }).then((getData: any) => {
      setUsersData({
        data: getData.data,
        users: getData.data.data,
      });
      console.log(getData.data);
      setLoading(true);
    });
  }, []);

  const searchUserWithParam = (param: any) => {
    console.log(param);
    setQuery({
      ...query,
      ...param,
    });
    searchUser({ ...query, ...param }).then((getData: any) => {
      setUsersData({
        data: getData.data,
        users: getData.data.data,
      });
    });
  };

  const renderStudentList = () => {
    return (
      <motion.div
        className="studentListTable__wrapper"
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransitionNormal}
      >
        {usersData.users.map((data: any) => (
          <StudentList
            id={data.id}
            name={`${data.last_name} ${data.first_name}`}
            student_number={data.student_number}
            graduationYear={data.year_of_graduation}
            job={data.desired_occupation.name}
            updateTime={data.updated_at}
            iconPath={data.icon_image_path}
          />
        ))}
      </motion.div>
    );
  };
  const renderPagenation = () => {
    return (
      <Pagenation
        searchFunc={searchUserWithParam}
        lastPage={usersData.data.last_page}
      />
    );
  };

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
        <StudentSearch
          className={"left-col"}
          searchFunc={searchUserWithParam}
        />
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
            {loading && renderStudentList()}
          </div>
          {loading && renderPagenation()}
        </div>
      </div>
    </motion.section>
  );
};

export default SearchStudent;
