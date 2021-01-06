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
  companyData: any;
  getCompanyData: any;
}

const About: React.FC<Props> = (props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModal2, setShowModal2] = useState<boolean>(false);
  const [companyComments, setCompanyComments] = useState<any>(null);
  const [editContent, setEditContent] = useState<any>();
  const [editId, setEditId] = useState<number>();
  useEffect(() => {
    console.log(props.companyData);
    getComment(props.companyData);
  }, []);

  const getComment = (companyData: any) => {
    // コメントを配列に保存
    const companyCommentsArray: any = [];
    companyData.company_information.forEach((data: any) => {
      const user = {
        name: data.user.last_name + " " + data.user.first_name,
        annual: data.user.annual,
        comments: [] as any,
        updated_at: data.updated_at,
      };
      data.company_comments.forEach((comment: string) => {
        user.comments.push(comment);
      });
      companyCommentsArray.push(user);
    });

    setCompanyComments(companyCommentsArray);
  };

  const commentEdit = (edit_id: number, isOpen: boolean, content: string) => {
    setShowModal2(isOpen);
    setEditContent(content);
    setEditId(edit_id);
  };

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
          <p>{props.companyData.number_of_employees + "人以上"}</p>
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
            if (companyComments) {
              return companyComments.map((data: any) =>
                data.comments.map((comment: any) => {
                  return (
                    <Comment
                      id={comment.id}
                      name={data.name}
                      year={data.annual + "年次"}
                      txt={comment.comment_content}
                      updateTime={data.updated_at}
                      isArrow={true}
                      clickFunc={commentEdit}
                    />
                  );
                })
              );
            }
          })()}
          <Pagenation searchFunc={() => console.log("a")} lastPage={1} />
        </section>
      </motion.div>
      <Modal
        type="company-comment"
        showModal={showModal}
        setShowModal={setShowModal}
        companyId={props.companyId}
        getCompanyData={props.getCompanyData}
        getComment={getComment}
      />
      <Modal
        type="company-comment-edit"
        showModal={showModal2}
        setShowModal={setShowModal2}
        companyId={props.companyId}
        getCompanyData={props.getCompanyData}
        getComment={getComment}
        content={editContent}
        editId={editId}
      />
    </>
  );
};

export default About;
