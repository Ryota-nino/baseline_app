import React, { useState, useEffect } from "react";
import { Comment } from "../../../Molecules/Card/index";
import { Modal } from "../../Modal";
import { Pagenation } from "../../Header/index";
import { WriteIcon } from "../../../../assets/images/index";
import { motion } from "framer-motion";

interface Props {
  thisPage: string;
  companyId: any;
  activity: any;
  companies: any;
  companyComment: any;
}

const About: React.FC<Props> = (props) => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
    out: {
      x: -20,
      opacity: 0,
    },
  };
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <motion.div
        className="companyDetail-contents about"
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
      >
        <section className="companyDetail-contents__section">
          <h2 className="heading6">事業内容</h2>
          <p className="company">
            {props.companies[props.companyId]
              ? props.companies[props.companyId].business
              : ""}
          </p>
        </section>
        <section className="companyDetail-contents__section">
          <h2 className="heading6">従業員数</h2>
          <p>
            {props.companies[props.companyId]
              ? props.companies[props.companyId].employee_number
              : ""}
          </p>
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
