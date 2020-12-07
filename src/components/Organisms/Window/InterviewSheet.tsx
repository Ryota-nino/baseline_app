import React, { useRef } from "react";
import { TrashIcon } from "../../../assets/images/index";
import { TextareaPrimary } from "../../Atoms/TextInput/index";
import { SelectSecondary } from "../../Atoms/Input/index";

import { motion } from "framer-motion";

interface Props {
  id: number;
}

const calendarObj = [
  { id: 1, name: "1月" },
  { id: 1, name: "2月" },
  { id: 1, name: "3月" },
  { id: 1, name: "4月" },
  { id: 1, name: "5月" },
  { id: 1, name: "6月" },
  { id: 1, name: "7月" },
  { id: 1, name: "8月" },
  { id: 1, name: "9月" },
  { id: 1, name: "10月" },
  { id: 1, name: "11月" },
  { id: 1, name: "12月" },
];

const InputWindowInterview: React.FC<Props> = (props) => {
  const el = useRef(null);

  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
    out: {
      x: 20,
      opacity: 0,
    },
  };

  const deleteHandler = () => {
    // const article = document.getElementById(`inputWindow-${props.id}`)!;
    // console.log(el.current);
    if (props.id !== 1) {
      const element = el.current! as HTMLElement;
      element.style.display = "none";
    }
  };

  return (
    <motion.article
      id={`inputWindow-${props.id}`}
      key={props.id}
      className="contentBox contentBox--big interview-formBox"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      ref={el}
    >
      <h1 className="heading4">面接の内容</h1>
      <SelectSecondary name="date" ttl="" selectObj={calendarObj} />
      <TextareaPrimary
        ttl="面接を受けた感想をお書きください"
        placeholder="アドバイスや指摘、気づいた点など"
      />
      {props.id !== 1 && (
        <div
          id={`inputWindowDelete-${props.id}`}
          className="btn btn--delete"
          onClick={deleteHandler}
        >
          <img src={TrashIcon} alt="" />
        </div>
      )}
    </motion.article>
  );
};

export default InputWindowInterview;
