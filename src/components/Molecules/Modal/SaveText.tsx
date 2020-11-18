import React from "react";
import { motion } from "framer-motion";
import { RoundedBtn } from "../../Atoms/Btn";
import {
  TrashIcon,
  CheckIcon_Green,
  MenuDownIcon,
} from "../../../assets/images/index";

interface Props {
  setSaveTextModal: any;
  draft: any;
}

const SaveText: React.FC<Props> = (props) => {
  return (
    <motion.div
      className="modal modal--normal scroll"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="modal__header modal__header--side">
        <div onClick={() => props.setSaveTextModal(false)}>
          <img src={MenuDownIcon} alt="" />
          <p className="heading5">戻る</p>
        </div>
        <RoundedBtn txt="保存" />
      </div>
      <div className="scrollContent">
        {(() => {
          if (props.draft) {
            return props.draft.map((data: any) => (
              <article className="saveText-item">
                <p className="saveText-item__time">
                  <time dateTime="2020-09-12-07-07">{data.saveTime}</time>
                </p>
                <p className="saveText-item__txt">{data.txt}</p>
                <div className="saveText-item__wrap">
                  <button className="btn saveText-item__deleteBtn">
                    <img src={TrashIcon} alt="" />
                  </button>
                  <button
                    onClick={() => props.setSaveTextModal(false)}
                    className="btn saveText-item__useBtn"
                  >
                    <img src={CheckIcon_Green} alt="" />
                  </button>
                </div>
              </article>
            ));
          }
        })()}
      </div>
    </motion.div>
  );
};

export default SaveText;
