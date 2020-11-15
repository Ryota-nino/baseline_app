import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "../Atoms/TextInput";
import { ActionBtn } from "../Atoms/Btn/index";
import { Modal } from "../Organisms/Modal";
import { motion } from "framer-motion";
import { Company, Activity } from "../Molecules/Card/index";
import { News } from "../Molecules/Bar/index";
import axios from "axios";

const Top: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [companies, setCompanies] = useState<any>([]);
  useEffect(() => {
    const url = "./database/companies.json";
    axios.get(url).then((res) => {
      const output = res.data;
      setCompanies(output);
    });
  }, []);

  const pageTransition = {
    in: { opacity: 1, x: 0, transition: { duration: 0.2 } },
    out: { x: -20, opacity: 0 },
  };
  return (
    <>
      <motion.section
        className="app-main toppage"
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
      >
        <h2 className="heading1">新着の企業情報</h2>

        <div className="action-sheet">
          <Search width={"316px"} isIcon={true} placeholder={"企業名で検索"} />
          <ActionBtn
            type="button"
            txt="企業を新規掲載"
            isPlus={true}
            linkUrl="company-insert/register"
          />
        </div>

        <div className="company-list">
          {(() => {
            if (companies) {
              return companies.map((data: any) => (
                <Company
                  companyId={data.id}
                  class={"item"}
                  name={data.company_name}
                  business={data.business}
                  pref={data.pref}
                  registerTime={data.updateTime}
                  img={data.logo}
                />
              ));
            }
          })()}
        </div>

        <div className="activity-column">
          <div className="left-col">
            <News />
            <article className="contentBox contentBox--big">
              <h1 className="heading4">新着の活動情報</h1>
              <div className="contentBox__wrap">
                <Activity isSmall={true} />
                <Activity isSmall={true} />
                <Activity isSmall={true} />
              </div>
            </article>
          </div>

          <article className="contentBox contentBox--small">
            <h1 className="heading5" onClick={() => setShowModal(true)}>
              あなたのアクティビティ
            </h1>
            <Activity isSmall={false} />
            <Activity isSmall={false} />
            <Link className="page-link" to="/mypage">
              マイページへ
            </Link>
          </article>
        </div>
      </motion.section>
      <Modal
        type="company-level"
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default Top;
