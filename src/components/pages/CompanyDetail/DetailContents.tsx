import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Contents } from "../../Organisms/CompanyDetail";
import { UnofficialOffer } from "../../Molecules/Bar/index";
import { motion } from "framer-motion";
import { pageTransitionNormal } from "../../../assets/script/pageTransition";

interface Props {
  // thisPage: string;
  match?: any;
}

const DetailContents: React.FC<Props> = (props) => {
  const thisPage = props.match.params.category;
  const history = useHistory();
  return (
    <motion.section
      className="app-main companyDetail-contents signle"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransitionNormal}
    >
      <button className="btn pageBack-link" onClick={() => history.goBack()}>
        <span className="heading4">企業情報へ</span>
      </button>
      <UnofficialOffer />

      <Contents thisPage={thisPage} />
    </motion.section>
  );
};

export default DetailContents;
