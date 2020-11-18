import React, { useState, useEffect } from "react";
import { Comment } from "../../../Molecules/Card/index";
import { Modal } from "../../Modal";
import { Pagenation } from "../../Header/index";
import { WriteIcon } from "../../../../assets/images/index";
import { motion } from "framer-motion";
import { pageTransitionNormal } from "../../../../assets/script/pageTransition";
interface Props {
  thisPage: string;
  companyId: any;
  activity: any;
  companies: any;
  companyComment: any;
  companyData: any;
}

const About: React.FC<Props> = (props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <motion.div
        className="companyDetail-contents about"
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransitionNormal}
      >
        <section className="companyDetail-contents__section">
          <h2 className="heading6">事業内容</h2>
          <p className="company">{props.companyData.business_description}</p>
        </section>
        <section className="companyDetail-contents__section">
          <h2 className="heading6">従業員数</h2>
          <p>{props.companyData.number_of_employees}</p>
        </section>
        <section className="companyDetail-contents__section">
          <div>
            <h2 className="heading6">会社についてのコメント</h2>
            <button
              onClick={() => setShowModal(true)}
              className="btn btn--edit"
            >
              <img src={WriteIcon} alt="" />
              コメントを書く
            </button>
          </div>
          {(() => {
            if (props.activity) {
              return props.activity.map((data: any) => (
                <Comment
                  year={data.year}
                  txt={data.txt}
                  updateTime={data.updateTime}
                  isArrow={true}
                />
              ));
            }
          })()}
          <Pagenation />
        </section>
      </motion.div>
      <Modal
        type="write-comment"
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default About;
