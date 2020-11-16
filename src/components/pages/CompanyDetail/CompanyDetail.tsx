import React from "react";
import { UserList } from "../../Organisms/Window";
import { Categories, CompanyBar } from "../../Organisms/CompanyDetail";
import { motion } from "framer-motion";

interface Props {
  // thisPage: string;
  match?: any;
}

const CompanyDetail: React.FC<Props> = (props) => {
  // const location = useLocation();
  const companyId = props.match.params.id;

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
      className="app-main company-detail"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <div className="left-col">
        <CompanyBar
          companyId={companyId}
          hasActionBtn={true}
          thisPage="detail"
        />
        <Categories companyId={companyId} thisPage={thisPage} />
      </div>
      <div className="right-col">
        <UserList thisPage="insert-users" />
        <UserList thisPage="company-users" />
      </div>
    </motion.section>
  );
};

export default CompanyDetail;
