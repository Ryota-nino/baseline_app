import React from "react";
import { motion } from "framer-motion";
import { RoundedBtn } from "../../Atoms/Btn";
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

const ActivityDelete: React.FC<Props> = (props) => {
  return (
    <motion.div
          className="modal modal--normal activity-delete"
          variants={modal}
          onClick={(event) => event.stopPropagation()}
        >
          <p className="heading4">この活動履歴を削除しますか？</p>
          <p className="txt">
            今まで投稿した活動履歴が全て削除されます。
            <br />
            投稿した企業情報については削除されません。
          </p>
          <div className="flex">
            <p className="cansel" onClick={() => props.setShowModal(false)}>
              キャンセル
            </p>
            <RoundedBtn txt="アカウントを削除" isDelete={"true"} />
          </div>
        </motion.div>
  );
};

export default ActivityDelete;
