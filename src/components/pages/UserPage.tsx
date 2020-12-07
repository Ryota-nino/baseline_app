import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { UserData } from "../Molecules/Bar/index";
import { ActivityMeter } from "../Organisms/Activity/index";
import { Comment } from "../Molecules/Card/index";
import { Modal } from "../Organisms/Modal";
import { motion } from "framer-motion";
import { pageTransitionNormal } from "../../assets/script/pageTransition";
import { getUserData } from "../../assets/script";
import axios from "axios";
interface Props {
  match?: any;
}

const UserPage: React.FC<Props> = (props) => {
  const history = useHistory();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModal2, setShowModal2] = useState<boolean>(false);

  const [activity, setActivity] = useState<any>();
  const [account, setAccount] = useState<any>();
  const [userData, setUserData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const userId = props.match.params.id;
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

    getUserData(userId).then((userData: any) => {
      setUserData(userData.data);
      console.log(userData.data);
      setLoading(true);
    });
  }, []);

  const renderDOM = () => {
    return (
      <>
        <motion.section
          className={`app-main user-page single`}
          initial="out"
          animate="in"
          exit="out"
          variants={pageTransitionNormal}
        >
          <button
            className="btn pageBack-link"
            onClick={() => history.goBack()}
          >
            <span className="heading4">戻る</span>
          </button>
          <h2 className="heading1">
            {/* {isUsrPage
            ? `${
                account
                  ? account[props.match.params.id - 1].last_name +
                    " " +
                    account[props.match.params.id - 1].first_name
                  : ""
              }さんのページ`
            : "マイページ"} */}
          </h2>

          <UserData
            isPage="userpage"
            userData={userData}
            userId={userData.id}
          />
          {/* <ActivityMeter /> */}
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
                    type={"user"}
                    clickFunc={setShowModal}
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

export default UserPage;
