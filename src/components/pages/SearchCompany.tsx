import React from 'react';
import {Link} from 'react-router-dom';
import { CompanySearchWindow, SortBar } from '../form/index';
import { Pagenation } from '../common/index';
import { ActionBtn } from '../btn/index';
import { AnimatePresence,motion } from 'framer-motion';
import { CompanyCard } from '../card/index';

const SearchCompany:React.FC = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2
      }
    },
    out: {
      x: -20,
      opacity: 0,
    },
  }
  return (
    <motion.section className="app-main searchCompany" initial="out" animate="in" exit="out" variants={pageTransition}>
      <h2 className="heading1">企業を探す</h2>
      
      <div className="app-main__container">
        <CompanySearchWindow className={"left-col"}/>
        <div className="right-col">
            <div className="right-col__header">
              <SortBar/>
              <ActionBtn txt="企業を新規掲載" isPlus={true} linkUrl="company-insert"/>
            </div>
            <div className="company-list">
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
            </div>
          </div>
        </div>
        <Pagenation />
    </motion.section>
  );
}

export default SearchCompany;
