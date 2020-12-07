import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Contents } from "../../Organisms/CompanyDetail";
import { UnofficialOffer } from "../../Molecules/Bar/index";
import { motion } from "framer-motion";
import { pageTransitionNormal } from "../../../assets/script/pageTransition";
import { indexEntry } from "../../../assets/script";
import axios from "axios";

interface Props {
  match?: any;
}

const DetailContents: React.FC<Props> = (props) => {
  const thisPage = props.match.params.category;
  const params = props.match.params;
  const history = useHistory();
  useEffect(() => {
    // indexEntry(1).then((getData) => {
    //   console.log(getData);
    // });
  }, []);

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

      <Contents params={params} thisPage={thisPage} />
    </motion.section>
  );
};

export default DetailContents;
