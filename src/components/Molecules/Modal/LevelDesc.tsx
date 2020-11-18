import React from "react";
import { motion } from "framer-motion";
import { RoundedBtn } from "../../Atoms/Btn";
import { Link } from "react-router-dom";
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

const LevelDesc: React.FC<Props> = (props) => {
  return (
    <motion.div
      className="modal modal--normal company-level"
      variants={modal}
      onClick={(event) => event.stopPropagation()}
    >
      <div className="modal__header modal__header--normal">
        <p className="heading4">企業の閲覧には情報の投稿が必要です</p>
      </div>
      <div className="company-level__container">
        <table className="company-level__table">
          <tr>
            <th>投稿数</th>
            <th>可能になること</th>
          </tr>
          <tr>
            <td className="company-level__count">1件</td>
            <td className="company-level__txt">
              Lv1: 在校生のアクティビティを閲覧可能
            </td>
          </tr>
          <tr>
            <td className="company-level__count">3件</td>
            <td className="company-level__txt">
              Lv2: 企業の選考ステップを閲覧可能
            </td>
          </tr>
          <tr>
            <td className="company-level__count">5件</td>
            <td className="company-level__txt">
              Lv3: 選考エントリーシートの閲覧可能{" "}
            </td>
          </tr>
          <tr>
            <td className="company-level__count">8件</td>
            <td className="company-level__txt">Lv4: 面接情報の閲覧可能 </td>
          </tr>
        </table>
        <p className="company-level__note">
          ※ 投稿には新規企業の追加・企業情報の追加・活動のツイートが含まれます。
        </p>
      </div>
      <div className="modal__bottom">
        <div>
          <Link to="/mypage">マイページ</Link>
          <RoundedBtn txt="OK" />
        </div>
      </div>
      <div
        className="btn closeIcon-btn"
        onClick={() => props.setShowModal(false)}
      ></div>
    </motion.div>
  );
};

export default LevelDesc;
