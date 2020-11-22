import React, { useState, useEffect } from "react";
import { GearIcon } from "../../assets/images/index";
import { Link, useLocation } from "react-router-dom";
import { UserData } from "../Molecules/Bar/index";
import { Meter } from "../Atoms/Activity";
import { Comment } from "../Molecules/Card/index";
import { Modal } from "../Organisms/Modal";
import { motion } from "framer-motion";
import { pageTransitionNormal } from "../../assets/script/pageTransition";
import axios from "axios";
interface Props {
  match?: any;
}

const UserPage: React.FC<Props> = (props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModal2, setShowModal2] = useState<boolean>(false);

  const [activity, setActivity] = useState<any>();
  const [account, setAccount] = useState<any>();
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
  }, []);

  return (
    <>
      <motion.section
        className={`app-main user-page single`}
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransitionNormal}
      >
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

        <UserData isPage="userpage" userData={account} userId={0} />
        <Meter />
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

export default UserPage;
