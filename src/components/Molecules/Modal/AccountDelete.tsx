import React from "react";
import { motion } from "framer-motion";
import { RoundedBtn } from "../../Atoms/Btn";
import { Avatar } from "../../../assets/images/index";
const modal = {
  hidden: {
    left: "50vw",
    top: "80vh",
    opacity: 0,
  },
  visible: {
    top: "45vh",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

interface Props {
  setShowModal: any;
}

const AccountDelete: React.FC<Props> = (props) => {
  return (
    <motion.div
      className="modal modal--normal modal--accountDelete"
      variants={modal}
      onClick={(event) => event.stopPropagation()}
    >
      <div className="accountDelete-user">
        <img className="accountDelete-user__avatar" src={Avatar} alt="" />
        <div>
          <p className="accountDelete-user__name">山本 仁</p>
          <p className="accountDelete-user__stundet-number">@2180075</p>
        </div>
      </div>
      <p className="heading4">アカウントが削除されます</p>
      <p className="txt">
        今まで投稿した活動履歴が全て削除されます。投稿した企業情報については削除されません。
      </p>
      <div className="flex">
        <p onClick={() => props.setShowModal(false)}>キャンセル</p>
        <RoundedBtn txt="アカウントを削除" isDelete={"true"} />
      </div>
    </motion.div>
  );
};

export default AccountDelete;
