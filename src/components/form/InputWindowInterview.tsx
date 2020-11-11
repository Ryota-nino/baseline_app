import React, { useRef } from "react";
import { TrashIcon, PenIcon } from "../../assets/images/index";
import { InputTextArea } from "./index";
import { AnimatePresence, motion } from "framer-motion";
import { InputDropdown } from ".";

interface Props {
  id: number;
}

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
  const calendarObj = [
    { value: "1月" },
    { value: "2月" },
    { value: "3月" },
    { value: "4月" },
    { value: "5月" },
    { value: "6月" },
    { value: "7月" },
    { value: "8月" },
    { value: "9月" },
    { value: "10月" },
    { value: "11月" },
    { value: "12月" },
  ];

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
      className="contentBox contentBox--big interview"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      ref={el}
    >
      <h1 className="heading4">面接の内容</h1>
      <InputDropdown name="date" ttl="" selectObj={calendarObj} />
      <InputTextArea
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
