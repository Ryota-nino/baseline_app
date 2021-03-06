import React, { useState } from "react";
import { TrashIcon } from "../../../assets/images/index";
import { TextareaPrimary } from "../../Atoms/TextInput/index";
import { Secondary } from "../../Atoms/TextInput";
import { motion } from "framer-motion";
import {
  numberValidation,
  handleChange,
} from "../../../assets/script/validation";

interface Props {
  id: number;
}

const EntrySheet: React.FC<Props> = (props) => {
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

  const [state, setState] = useState({
    info: {
      title: "",
    },
    message: {
      title: "",
    },
  });

  const isError = [
    { isEmpty1: false },
    { isEmpty2: false },
    { isEmpty3: false },
  ];

  const inputChangeHandler = (e: any) => {
    handleChange(state, setState, e);
    console.log(state);
  };

  const deleteHandler = () => {
    const article = document.getElementById(`inputWindow-${props.id}`)!;
    if (props.id !== 1) {
      article.style.display = "none";
    }
  };

  return (
    <>
      <motion.article
        id={`inputWindow-${props.id}`}
        key={props.id}
        className="contentBox contentBox--big interview-formBox"
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
      >
        {props.id === 1 && <h1 className="heading4">エントリーシート</h1>}
        <Secondary
          name="title"
          className="mb42"
          type="string"
          labelTxt="タイトル"
          isRequired={true}
          isRequiredTxt={true}
          placeholderTxt="例) エントリーシート"
          isError={isError}
          isIcon={false}
          onChange={inputChangeHandler}
        />
        <TextareaPrimary ttl="本文" placeholder="本文を記入" />
        {props.id !== 1 && (
          <div className="btn btn--delete" onClick={deleteHandler}>
            <img src={TrashIcon} alt="" />
          </div>
        )}
      </motion.article>
    </>
  );
};

export default EntrySheet;
