import React from "react";
import { motion } from "framer-motion";
import { PostStudent } from "../../../Molecules/Card/index";

interface Props {
  thisPage: string;
  companyId: any;
}

const Entry: React.FC<Props> = (props) => {
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

  return (
    <motion.div
      className="companyDetail-contents interview"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <PostStudent
        ttl="本選考(22卒)"
        isPass={false}
        job="デザイナー"
        userName="山本 敦"
      />
      <PostStudent
        ttl="サマーインターンシップ(22卒)"
        isPass={true}
        job="デザイナー"
        userName="山本 敦"
      />
      <PostStudent
        ttl="本選考(22卒)"
        isPass={false}
        job="デザイナー"
        userName="山本 敦"
      />
    </motion.div>
  );
};

export default Entry;
