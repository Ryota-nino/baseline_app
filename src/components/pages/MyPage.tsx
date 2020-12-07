import React, { useState, useEffect } from "react";
import { GearIcon } from "../../assets/images/index";
import { Link, useLocation } from "react-router-dom";
import { UserData } from "../Molecules/Bar/index";
import { ActivityMeter } from "../Organisms/Activity/index";
import { Comment } from "../Molecules/Card/index";
import { Modal } from "../Organisms/Modal";
import { motion } from "framer-motion";
import { pageTransitionNormal } from "../../assets/script/pageTransition";
import { getMyActivity, mypage } from "../../assets/script/";
import axios from "axios";
interface Props {
  match?: any;
}

const MyPage: React.FC<Props> = (props) => {
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModal2, setShowModal2] = useState<boolean>(false);

  // ここでmyDataが取れない

  const [activity, setActivity] = useState<any>();
  const [account, setAccount] = useState<any>();
  const [myData, setMyData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [editContent, setEditContent] = useState<string>();

  useEffect(() => {
    const url = "./activity.json";
    axios.get(url).then((res) => {
      const output = res.data;
      setActivity(output);
    });

    const url2 = "./database/account.json";
    axios.get(url2).then((res) => {
      const output = res.data;
      setAccount(output);
    });
    getMyActivity().then((getData: any) => {
      console.log(getData);
    });
    mypage().then((getData: any) => {
      setMyData({
        data: getData.data,
        company_information: getData.company_information,
      });
      console.log(getData.data);
      setLoading(true);
    });
  }, []);

  const commentEdit = (isOpen: boolean, content: string) => {
    setShowModal(isOpen);
    setEditContent(content);
  };

  const renderDOM = () => {
    return (
      <>
        <motion.section
          className={`app-main mypage single`}
          initial="out"
          animate="in"
          exit="out"
          variants={pageTransitionNormal}
        >
          <h2 className="heading1">マイページ</h2>

          <UserData
            isPage="mypage"
            userData={myData.data}
            userId={myData.data.id}
          />

          <Link to="/01/account-setting" className="icon-txt icon-txt--normal">
            <img src={GearIcon} alt="" />
            アカウント設定へ
          </Link>
          <ActivityMeter />
          <div className="activity-list">
            {(() => {
              if (activity) {
                return activity.map((data: any) => (
                  <Comment
                    name={data.name}
                    year={data.year}
                    txt={data.txt}
                    updateTime={data.updateTime}
                    isArrow={true}
                    type={"mypage"}
                    clickFunc={commentEdit}
                    clickFunc2={setShowModal2}
                  />
                ));
              }
            })()}
          </div>
        </motion.section>
        <Modal
          type="activity-edit"
          showModal={showModal}
          setShowModal={setShowModal}
          content={editContent}
        />
        <Modal
          type="activity-delete"
          showModal={showModal2}
          setShowModal={setShowModal2}
        />
      </>
    );
  };
  return <>{loading && renderDOM()}</>;
};

export default MyPage;
