import React, {useEffect} from 'react';
import {UserListWindow} from '../user';
import {CompanyContentsWindow,CompanyBar} from '../company';
import { AnimatePresence,motion } from 'framer-motion';

interface Props {
  // thisPage: string;
  match?: any;
}

const CompanyDetail:React.FC<Props> = props => {
  const thisPage = props.match.params.category;
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
  };

  return (
    <motion.section className="app-main company-detail" initial="out" animate="in" exit="out" variants={pageTransition}>
        <div className="left-col">
            <CompanyBar hasActionBtn={true} />
            {/* <CompanyContentsWindow thisPage={props.thisPage}/> */}
            <CompanyContentsWindow thisPage={thisPage}/>
        </div>
        <div className="right-col">
            <UserListWindow thisPage="insert-users"/>
            <UserListWindow thisPage="company-users"/>
        </div>
    </motion.section>
  );
}

export default CompanyDetail;
