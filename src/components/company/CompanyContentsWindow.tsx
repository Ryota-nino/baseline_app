import React,{useState} from 'react';
import {UserComment} from '../user';
import {Modal} from '../modal';
import {WriteIcon} from '../../assets/images/index';
import {Link} from 'react-router-dom';
import {CompanyDetailItem} from './index';
import { AnimatePresence,motion } from 'framer-motion';

interface Props {
    thisPage: string;
}

const CompanyContentsWindow:React.FC<Props> = props => {
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
    const [showModal, setShowModal] = useState<boolean>(false);
    const renderTabMenuList = () => {
        return (
            <div className="companyContentsWindow__list">
                <ul>
                    <li className={props.thisPage === 'about' ? 'current' : ''}><Link to="/company-detail/:id/about">会社概要</Link></li>
                    <li className={props.thisPage === 'step' ? 'current' : ''}><Link to="/company-detail/:id/step">選考ステップ</Link></li>
                    <li className={props.thisPage === 'entry' ? 'current' : ''}><Link to="/company-detail/:id/entry">エントリーシート</Link></li>
                    <li className={props.thisPage === 'interview' ? 'current' : ''}><Link to="/company-detail/:id/interview">面接情報</Link></li>
                </ul>
            </div>
        );
    };

    const renderContents = () => {
        if(props.thisPage === 'about') {
            return (
                <>
                    <motion.div className="companyDetail-contents about" initial="out" animate="in" exit="out" variants={pageTransition}>
                        <section className="companyDetail-contents__section">
                            <h2 className="heading6">事業内容</h2>
                            <p className="company">UI/UXデザイン、ビジネスモデルデザイン、ブランド体験デザイン、組織デザイン、ソフトウェア開発</p>
                        </section>
                        <section className="companyDetail-contents__section">
                            <h2 className="heading6">従業員数</h2>
                            <p>100 ~ 200人</p>
                        </section>
                        <section className="companyDetail-contents__section">
                            <div>
                                <h2 className="heading6">会社についてのコメント</h2>
                                <button onClick={()=> setShowModal(true)} className="btn btn--edit"><img src={WriteIcon} alt="" />コメントを書く</button>
                            </div>
                            <UserComment isArrow={false} />
                            <UserComment isArrow={false} />
                            <UserComment isArrow={false} />
                            <UserComment isArrow={false} />
                        </section>
                    </motion.div>
                    <Modal type="write-comment" showModal={showModal} setShowModal={setShowModal}/>
                </>
            );
        } else if(props.thisPage === 'step') {
            return (
                <motion.div className="companyDetail-contents step" initial="out" animate="in" exit="out" variants={pageTransition}>
                    <CompanyDetailItem ttl="本選考(22卒)" isPass={false} job="デザイナー" userName="山本 敦" />
                    <CompanyDetailItem ttl="本選考(22卒)" isPass={false} job="デザイナー" userName="山本 敦" />
                    <CompanyDetailItem ttl="本選考(22卒)" isPass={false} job="デザイナー" userName="山本 敦" />
                </motion.div>
            );
        } else if(props.thisPage === 'entry') {
            return (
                <>
                    <motion.div className="companyDetail-contents entry" initial="out" animate="in" exit="out" variants={pageTransition}>
                        <CompanyDetailItem ttl="本選考(22卒)" isPass={false} job="デザイナー" userName="山本 敦" />
                        <CompanyDetailItem ttl="サマーインターンシップ(22卒)" isPass={true} job="デザイナー" userName="山本 敦" />
                        <CompanyDetailItem ttl="本選考(22卒)" isPass={false} job="デザイナー" userName="山本 敦" />
                    </motion.div>
                </>
            );
        } else if(props.thisPage === 'interview') {
            return (
                <motion.div className="companyDetail-contents interview" initial="out" animate="in" exit="out" variants={pageTransition}>
                    <CompanyDetailItem ttl="本選考(22卒)" isPass={false} job="デザイナー" userName="山本 敦" />
                    <CompanyDetailItem ttl="サマーインターンシップ(22卒)" isPass={true} job="デザイナー" userName="山本 敦" />
                    <CompanyDetailItem ttl="本選考(22卒)" isPass={false} job="デザイナー" userName="山本 敦" />
                </motion.div>
            );
        }

    }

    return(
        <motion.div className="companyContentsWindow" initial="out" animate="in" exit="out" variants={pageTransition}>
            {renderTabMenuList()}
            {renderContents()}
        </motion.div>
    );
};

export default CompanyContentsWindow