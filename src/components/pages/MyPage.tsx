import React, { useState, useEffect } from "react";
import { GearIcon } from "../../assets/images/index";
import { Link, useLocation } from "react-router-dom";
import { UserData } from "../Molecules/Bar/index";
import { ActivityMeter } from "../Organisms/Activity/index";
import { Comment } from "../Molecules/Card/index";
import { Modal } from "../Organisms/Modal";
import { motion } from "framer-motion";
import { pageTransitionNormal } from "../../assets/script/pageTransition";
// import { getMyActivity, mypage } from "../../assets/script/";
import axios from "axios";
interface Props {
  getMyData: any;
  myData: any;
  loading: boolean;
  match?: any;
}

const MyPage: React.FC<Props> = (props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModal2, setShowModal2] = useState<boolean>(false);

  const [activity, setActivity] = useState<any>();
  const [account, setAccount] = useState<any>();
  const [editContent, setEditContent] = useState<any>();
  const [editId, setEditId] = useState<number>();

  const commentEdit = (id: number, isOpen: boolean, content: string) => {
    setShowModal(isOpen);
    setEditContent(content);
    setEditId(id);
  };

  const renderMyActivities = () => {
    const activitiesArrray: any[] = [];
    if (props.myData.company_information) {
      props.myData.company_information.forEach((data: any) => {
        if (data.my_activities[0])
          activitiesArrray.push({
            id: data.id,
            activity: data.my_activities[0],
          });
      });
      return activitiesArrray.map((data: any) => (
        <Comment
          id={data.id}
          name={
            props.myData.data.first_name + " " + props.myData.data.last_name
          }
          year={data.activity.posted_year}
          txt={data.activity.content}
          updateTime={data.activity.updated_at}
          isArrow={true}
          type={"mypage"}
          clickFunc={commentEdit}
          clickFunc2={setShowModal2}
        />
      ));
    }
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
            userData={props.myData.data}
            userId={props.myData.data.id}
          />

          <Link to="/01/account-setting" className="icon-txt icon-txt--normal">
            <img src={GearIcon} alt="" />
            アカウント設定へ
          </Link>
          <ActivityMeter />
          <div className="activity-list">{renderMyActivities()}</div>
        </motion.section>
        <Modal
          type="activity-edit"
          showModal={showModal}
          setShowModal={setShowModal}
          content={editContent}
          editId={editId}
          getMyData={props.getMyData}
        />
        <Modal
          type="activity-delete"
          showModal={showModal2}
          setShowModal={setShowModal2}
        />
      </>
    );
  };
  return <>{props.loading && renderDOM()}</>;
};

export default MyPage;
