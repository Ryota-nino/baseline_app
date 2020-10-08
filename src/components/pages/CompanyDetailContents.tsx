import React from 'react';
import {Link} from 'react-router-dom';
import {StudentAboutCompanyBar, CompanyDetailContentsWindow} from '../company'
import { AnimatePresence,motion } from 'framer-motion';

interface Props {
    // thisPage: string;
    match?: any;
}

const CompanyDetailContents:React.FC<Props> = props => {
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
        <motion.section className="app-main companyDetail-contents signle" initial="out" animate="in" exit="out" variants={pageTransition}>
            <Link to="/company-detail/:id/about" className="btn pageBack-link"><span className="heading4">企業詳細へ</span></Link>
            <StudentAboutCompanyBar />

            <CompanyDetailContentsWindow thisPage={thisPage}/>
        </motion.section>
    );
}

export default CompanyDetailContents;
