import React from 'react';
import {UserListWindow} from '../user';
import {CompanyContentsWindow,CompanyBar} from '../company';
import { AnimatePresence,motion } from 'framer-motion';

interface Props {
  thisPage: string;
}

const CompanyDetail:React.FC<Props> = props => {
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
    <section className="app-main company-detail">
        <div className="left-col">
            <CompanyBar hasActionBtn={true} />
            <CompanyContentsWindow thisPage={props.thisPage}/>
        </div>
        <div className="right-col">
            <UserListWindow thisPage="insert-users"/>
            <UserListWindow thisPage="company-users"/>
        </div>
    </section>
  );
}

export default CompanyDetail;
