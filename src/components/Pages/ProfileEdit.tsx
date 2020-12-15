import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { SelectSecondary } from "../Atoms/Input/index";
import { Secondary } from "../Atoms/TextInput";
import { RoundedBtn } from "../Atoms/Btn";
import { motion } from "framer-motion";
import { Avatar, CameraIcon } from "../../assets/images/index";
import { pageTransitionNormal } from "../../assets/script/pageTransition";
import { mypage, indexJob } from "../../assets/script";
import axios from "axios";

interface Props {
  myData: any;
}
const ProfileEdit: React.FC<Props> = (props) => {
  const [myData, setMyData] = useState<any>();
  const [jobs, setJobs] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    mypage().then((getData: any) => {
      setMyData(getData.data);
      console.log(getData.data);
    });

    indexJob().then((getData: any) => {
      setJobs(getData.data);
      setLoading(true);
    });
  }, []);
  const history = useHistory();
  const handleLink = (path: string) => history.push(path);
  const isError = [
    { isEmpty1: false },
    { isEmpty2: false },
    { isEmpty3: false },
  ];
  const yearList = [
    { id: 1, name: "21卒" },
    { id: 1, name: "22卒" },
    { id: 1, name: "23卒" },
    { id: 1, name: "24卒" },
    { id: 1, name: "25卒" },
    { id: 1, name: "26卒" },
  ];
  const gender = [
    { id: 1, name: "男性" },
    { id: 2, name: "女性" },
    { id: 3, name: "その他" },
  ];

  const selectBtnChanges = (e: any) => {
    const selectBtns = document.querySelectorAll(".select-btn");
    selectBtns.forEach((btn) => {
      btn.classList.remove("current");
      const checkbox = btn.querySelector(
        'input[type="checkbox"]'
      ) as HTMLInputElement;
      checkbox.checked = false;
    });
    e.currentTarget.classList.add("current");
    e.currentTarget.querySelector('input[type="checkbox"]').checked = true;
  };

  const changeBtnClickHandler = () => {};

  const renderDOM = () => {
    return (
      <motion.section
        className="app-main profile-edit single"
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransitionNormal}
      >
        <button className="btn pageBack-link" onClick={() => history.goBack()}>
          <span className="heading4">マイページへ</span>
        </button>
        <form>
          <div className="contentBox contentBox--big">
            <h2 className="heading4">プロフィール編集</h2>

            <div className="userEdit-header">
              <div className="userEdit-header__left-col">
                <label className="select-image">
                  <div className="select-image__wrap">
                    <img
                      className="select-image__avatar"
                      src={myData.icon_image_path}
                      alt=""
                    />
                    <div className="select-image__overlay">
                      <img
                        className="select-image__icon"
                        src={CameraIcon}
                        alt=""
                      />
                      <span className="select-image__txt">画像を選択</span>
                    </div>
                  </div>
                  <input type="file" />
                </label>
              </div>

              <div className="userEdit-header__right-col">
                <Secondary
                  name="name"
                  type="text"
                  labelTxt="苗字"
                  isRequired={false}
                  isRequiredTxt={false}
                  defaultValue={myData.first_name}
                  placeholderTxt="山本 仁"
                  isError={isError}
                  isIcon={false}
                />
                <Secondary
                  name="name"
                  type="text"
                  labelTxt="名前"
                  isRequired={false}
                  isRequiredTxt={false}
                  defaultValue={myData.last_name}
                  placeholderTxt="山本 仁"
                  isError={isError}
                  isIcon={false}
                />
                <div className="gender-select">
                  <p className="gender-select__heading">性別</p>
                  <ul className="gender-select-list">
                    {gender.map((data) => {
                      return (
                        <li>
                          <label
                            onClick={(e) => selectBtnChanges(e)}
                            className={`btn select-btn ${
                              data.id === myData.sex ? "current" : ""
                            }`}
                          >
                            <span>{data.name}</span>
                            <input
                              onClick={(event) => event.stopPropagation()}
                              type="checkbox"
                              name="gender"
                            />
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="contentBox contentBox--big">
            <SelectSecondary ttl="希望職種" name="job" selectObj={jobs} />
            <SelectSecondary
              ttl="卒業年次"
              name="graduation_year"
              selectObj={yearList}
            />
            <div className="contentBox__wrap">
              <p className="contentBox__cansel btn">
                <Link to="/mypage">キャンセル</Link>
              </p>
              <div onClick={() => handleLink("/mypage")}>
                <RoundedBtn txt="変更する" />
              </div>
            </div>
          </div>
        </form>
      </motion.section>
    );
  };

  return <>{loading && renderDOM()}</>;
};

export default ProfileEdit;
