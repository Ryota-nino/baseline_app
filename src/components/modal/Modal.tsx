import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { AnimatePresence,motion } from 'framer-motion';
import {RoundedBtn} from '../btn';
import {Avatar, StepIcon, PaperIcon ,BagIcon, TrashIcon, CheckIcon_Green} from '../../assets/images/index';
// import {Avatar, StepIcon, PaperIcon ,BagIcon} from 'react-svg-loader!../../../src/assets/images/index';
const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const modal = {
    hidden: {
        left: "50vw",
        top: "80vh",
        opacity: 0
    },
    visible: {
        top: "45vh",
        opacity : 1,
        transition: {delay: 0.5}
    }
}

interface Props {
    showModal: any;
    setShowModal: any;
    type: string;
}

const Modal:React.FC<Props> = props => {

    const [saveTextModal, setSaveTextModal] = useState<boolean>(false);

    const commentWindowRender = (ttl:string) =>  (
        <>
            <motion.div className="activity-modal" variants={modal}>
                <p className="heading4">{ ttl }</p>
                <div className="btn closeIcon-btn" onClick={() => props.setShowModal(false)}></div>
                <div className="activity-modal__input-area">
                <img src={Avatar} alt=""/>
                <textarea className="activity-modal__textarea"></textarea>
                </div>
                <div className="activity-modal__bottom">
                    <p className="text-count"><span className="text-count__current-num">10</span>/200</p>
                    <div>
                        <p onClick={()=> setSaveTextModal(true)}>下書き</p>
                        <RoundedBtn txt="投稿" />
                    </div>
                </div>
            </motion.div>
        </>
    );

    const rootingModalRender = () => {
        if(props.type === 'activity-post') {
            return (
                commentWindowRender('アクティビティを投稿')
            );
        } else if (props.type === 'select-post-category') {
            return (
                <motion.div className="activity-modal" variants={modal}>
                    <p className="heading4">どの項目の情報を追加しますか？</p>
                    <ul className="selectPost-caegoryList">
                        <li className="selectPost-caegoryList__item current"><Link to="/company-info/edit/step"><img src={StepIcon} alt=""/>選考ステップ</Link></li>
                        <li className="selectPost-caegoryList__item"><Link to="/company-info/edit/entry"><img src={PaperIcon} alt=""/>エントリーシート</Link></li>
                        <li className="selectPost-caegoryList__item"><Link to="/company-info/edit/interview">面接情報</Link></li>
                    </ul>
                    <div className="btn closeIcon-btn" onClick={() => props.setShowModal(false)}></div>
                </motion.div>
            );
        } else if (props.type === 'write-comment') {
            return (
                commentWindowRender('会社に対するコメントを書く')
            );
        }
    }

    const saveTextModalRender = () => {
        return(
            <motion.div className="activity-modal" variants={modal}>
                <div className="modal-header">
                    <p className="heading4">アクティビティを保存</p>
                    <RoundedBtn txt="保存" />
                    <article className="saveText-item">
                        <p className="saveText-item__time"><time dateTime="2020-09-12-07-07">2020.09.12</time></p>
                        <p className="saveText-item__txt">一次面接を10:00~から受けて面接官と話したが、他の学生...</p>
                        <button className="saveText-item__deleteBtn"><img src={TrashIcon} alt=""/></button>
                        <button className="saveText-item__useBtn"><img src={CheckIcon_Green} alt=""/></button>
                    </article>
                    <article className="saveText-item">
                        <p className="saveText-item__time"><time dateTime="2020-09-12-07-07">2020.09.12</time></p>
                        <p className="saveText-item__txt">一次面接を10:00~から受けて面接官と話したが、他の学生...</p>
                        <button className="saveText-item__deleteBtn"><img src={TrashIcon} alt=""/></button>
                        <button className="saveText-item__useBtn"><img src={CheckIcon_Green} alt=""/></button>
                    </article>
                    <article className="saveText-item">
                        <p className="saveText-item__time"><time dateTime="2020-09-12-07-07">2020.09.12</time></p>
                        <p className="saveText-item__txt">一次面接を10:00~から受けて面接官と話したが、他の学生...</p>
                        <button className="saveText-item__deleteBtn"><img src={TrashIcon} alt=""/></button>
                        <button className="saveText-item__useBtn"><img src={CheckIcon_Green} alt=""/></button>
                    </article>
                </div>
            </motion.div>
        );
    }

    const renderModal = () => {
        if(saveTextModal) {
            return saveTextModalRender();
        } else {
            return rootingModalRender();
        }
    }

    return (
        <AnimatePresence exitBeforeEnter>
            { props.showModal && (
                <motion.div className="modal-background" variants={backdrop} initial="hidden" animate="visible" exit="hidden">
                    {renderModal()}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;