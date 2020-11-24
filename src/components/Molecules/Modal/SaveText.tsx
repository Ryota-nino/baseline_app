import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RoundedBtn } from "../../Atoms/Btn";
import {
  TrashIcon,
  CheckIcon_Green,
  MenuDownIcon,
} from "../../../assets/images/index";
import { indexDraft, registDraft } from "../../../assets/script";

interface Props {
  setSaveTextModal: any;
  useDraft: any;
  currentText?: string;
}

const SaveText: React.FC<Props> = (props) => {
  const [draft, setDraft] = useState<any>();
  const [postedById, setPostedById] = useState<number>();
  useEffect(() => {
    indexDraft().then((getData: any) => {
      setDraft(getData.data);
      if (getData.data[0]) setPostedById(getData.data[0].posted_by);
      console.log(getData.data);
    });
    console.log(props.currentText);
  }, []);

  const useDraftHandler = (data: any) => {
    props.setSaveTextModal(false);
    props.useDraft(data);
  };

  const registDraftHandler = () => {
    registDraft({
      content: props.currentText,
      posted_by: postedById,
    });
  };

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
        <RoundedBtn txt="保存" Func={registDraftHandler} />
      </div>
      <div className="scrollContent">
        {(() => {
          if (draft) {
            return draft.map((data: any) => (
              <article className="saveText-item">
                <p className="saveText-item__time">
                  <time dateTime="2020-09-12-07-07">{data.created_at}</time>
                </p>
                <p className="saveText-item__txt">{data.content}</p>
                <div className="saveText-item__wrap">
                  <button className="btn saveText-item__deleteBtn">
                    <img src={TrashIcon} alt="" />
                  </button>
                  <button
                    onClick={useDraftHandler.bind(null, data)}
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
