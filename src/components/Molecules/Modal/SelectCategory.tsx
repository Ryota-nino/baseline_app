import React from "react";
import { motion } from "framer-motion";
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
  companyId: string;
}

const SelectCategory: React.FC<Props> = (props) => {
  return (
    <motion.div className="modal modal--normal" variants={modal}>
      <div className="modal__header modal__header--normal">
        <p className="heading4">どの項目の情報を追加しますか？</p>
      </div>
      <ul className="selectPost-caegoryList">
        <li className="selectPost-caegoryList__item">
          <Link to={`/company-info/${props.companyId}/edit/step`}>
            選考ステップ
          </Link>
        </li>
        <li className="selectPost-caegoryList__item">
          <Link to={`/company-info/${props.companyId}/edit/entry`}>
            エントリーシート
          </Link>
        </li>
        <li className="selectPost-caegoryList__item">
          <Link to={`/company-info/${props.companyId}/edit/interview`}>
            面接情報
          </Link>
        </li>
      </ul>
      <div
        className="btn closeIcon-btn"
        onClick={() => props.setShowModal(false)}
      ></div>
    </motion.div>
  );
};

export default SelectCategory;
