import React, { useState, useEffect } from "react";
import { UserList } from "../../Organisms/Window";
import { Categories, CompanyBar } from "../../Organisms/CompanyDetail";
import { pageTransitionNormal } from "../../../assets/script/pageTransition";
import { showCompany } from ".././../../assets/script/";
import { motion } from "framer-motion";

interface Props {
  // thisPage: string;
  match?: any;
}

const CompanyDetail: React.FC<Props> = (props) => {
  // const location = useLocation();
  const companyId = props.match.params.id;
  const thisPage = props.match.params.category;
  const [companyData, setCompanyData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    showCompany(companyId).then((getData: any) => {
      if (getData.data) {
        setCompanyData({
          ...getData.data,
        });
        setLoading(true);
      }
    });
  }, []);
  const renderDOM = () => {
    return (
      <motion.section
        className="app-main company-detail"
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransitionNormal}
      >
        <div className="left-col">
          <CompanyBar
            companyId={companyId}
            hasActionBtn={true}
            thisPage="detail"
            companyData={companyData}
          />
          <Categories
            companyId={companyId}
            thisPage={thisPage}
            companyData={companyData}
          />
        </div>
        <div className="right-col">
          <UserList thisPage="insert-users" />
          <UserList thisPage="company-users" />
        </div>
      </motion.section>
    );
  };
  return <>{loading && renderDOM()}</>;
};

export default CompanyDetail;
