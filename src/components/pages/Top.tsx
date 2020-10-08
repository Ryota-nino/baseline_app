import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { SearchBar } from '../form/index';
import { ActionBtn } from '../btn/index';
import { Modal } from '../modal';
import { AnimatePresence,motion } from 'framer-motion';
import { CompanyCard, NewsBars, ActivityCard } from '../card/index';


const Top:React.FC = props => {

  const [showModal, setShowModal] = useState<boolean>(false);

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
    }
  }
  return (
    <>
      <motion.section className="app-main toppage" initial="out" animate="in" exit="out" variants={pageTransition}>
        <h2 className="heading1">新着の企業情報</h2>

        <div className="action-sheet">
          <SearchBar width={"316px"} isIcon={true} placeholder={"企業名で検索"}/>
          <ActionBtn txt="企業を新規掲載" isPlus={true} linkUrl="company-insert"/>
        </div>

        <div className="company-list">
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </div>

        <div className="activity-column">
          <div className="left-col">
            <NewsBars />
            <article className="contentBox contentBox--big">
              <h1 className="heading4">新着の活動情報</h1>
              <div className="contentBox__wrap">
                <ActivityCard isSmall={true}/>
                <ActivityCard isSmall={true}/>
                <ActivityCard isSmall={true}/>
              </div>
            </article>
          </div>

          <article className="contentBox contentBox--small">
            <h1 className="heading5" onClick={ () => setShowModal(true)}>あなたのアクティビティ</h1>
            <ActivityCard isSmall={false}/>
            <ActivityCard isSmall={false}/>
            <Link className="page-link" to="/mypage">マイページへ</Link>
          </article>
        </div>
      </motion.section>
      <Modal type="company-level" showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
}

export default Top;
