import React from "react";
import { Link } from "react-router-dom";
import { Contents } from "../../Organisms/CompanyDetail";
import { UnofficialOffer } from "../../Molecules/Bar/index";
import { motion } from "framer-motion";

interface Props {
  // thisPage: string;
  match?: any;
}

const DetailContents: React.FC<Props> = (props) => {
  const thisPage = props.match.params.category;
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
    <motion.section
      className="app-main companyDetail-contents signle"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <Link to="/company-detail/:id/about" className="btn pageBack-link">
        <span className="heading4">企業詳細へ</span>
      </Link>
      <UnofficialOffer />

      <Contents thisPage={thisPage} />
    </motion.section>
  );
};

export default DetailContents;
