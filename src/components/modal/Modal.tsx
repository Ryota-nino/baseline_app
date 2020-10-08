import React, { useState, } from 'react';
import {Link} from 'react-router-dom';
import { AnimatePresence,motion } from 'framer-motion';
import {RoundedBtn} from '../btn';
import {Avatar, StepIcon, PaperIcon ,BagIcon, TrashIcon, CheckIcon_Green, MenuDownIcon} from '../../assets/images/index';

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
    const [inputText, setInputText ] = useState({
        count: 0,
        textValue: 'initial value'
    });

    const handleTextChange = (textValue:string)=> {
        setInputText({
            count: inputText.count,
            textValue: textValue
        });
    }
    const handleCountChange = (textLength:number)=> {
        setInputText({
            count: textLength,
            textValue: inputText.textValue
        });
    }

    const commentWindowRender = (ttl:string) =>  (
        <>
            <motion.div className="modal modal--normal" variants={modal} onClick={(event)=> event.stopPropagation()}>
                <div className="modal__header modal__header--normal">
                    <p className="heading4">{ ttl }</p>
                </div>
                <div className="btn closeIcon-btn" onClick={() => props.setShowModal(false)}></div>
                <div className="modal__input-area">
                    <img src={Avatar} alt=""/>
                    <textarea className="modal__textarea" 
                        onChange={e => handleTextChange(e.target.value)} 
                        onKeyUp={e => handleCountChange(e.currentTarget.value.length)}
                    ></textarea>
                </div>
                <div className="modal__bottom">
                    <p className="text-count">
                        <span 
                            className={`text-count__current-num ${inputText.count > 200 && 'cAttention'}`}>{inputText.count}
                        </span>
                        &nbsp;/ 200</p>
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
                <motion.div className="modal modal--normal" variants={modal}>
                    <div className="modal__header modal__header--normal">
                        <p className="heading4">どの項目の情報を追加しますか？</p>
                    </div>
                    <ul className="selectPost-caegoryList">
                        <li className="selectPost-caegoryList__item"><Link to="/company-info/edit/step">選考ステップ</Link></li>
                        <li className="selectPost-caegoryList__item"><Link to="/company-info/edit/entry">エントリーシート</Link></li>
                        <li className="selectPost-caegoryList__item"><Link to="/company-info/edit/interview">面接情報</Link></li>
                    </ul>
                    <div className="btn closeIcon-btn" onClick={() => props.setShowModal(false)}></div>
                </motion.div>
            );
        } else if (props.type === 'write-comment') {
            return (
                commentWindowRender('会社に対するコメントを書く')
            );
        } else if (props.type === 'company-level') {
            return (
                <motion.div className="modal modal--normal company-level" variants={modal} onClick={(event)=> event.stopPropagation()}>
                    <div className="modal__header modal__header--normal">
                        <p className="heading4">企業の閲覧には情報の投稿が必要です</p>
                    </div>
                    <div className="company-level__container">
                        <table className="company-level__table">
                            <tr>
                                <th>投稿数</th>
                                <th>可能になること</th>
                            </tr>
                            <tr>
                                <td className="company-level__count">1件</td>
                                <td className="company-level__txt">Lv1: 在校生のアクティビティを閲覧可能</td>
                            </tr>
                            <tr>
                                <td className="company-level__count">3件</td>
                                <td className="company-level__txt">Lv2: 企業の選考ステップを閲覧可能</td>
                            </tr>
                            <tr>
                                <td className="company-level__count">5件</td>
                                <td className="company-level__txt">Lv3: 選考エントリーシートの閲覧可能 </td>
                            </tr>
                            <tr>
                                <td className="company-level__count">8件</td>
                                <td className="company-level__txt">Lv4: 面接情報の閲覧可能 </td>
                            </tr>
                        </table>
                        <p className="company-level__note">※ 投稿には新規企業の追加・企業情報の追加・活動のツイートが含まれます。</p>
                    </div>
                    <div className="modal__bottom">
                        <div>
                            <Link to="/mypage" >マイページ</Link>
                            <RoundedBtn txt="OK" />
                        </div>
                    </div>
                    <div className="btn closeIcon-btn" onClick={() => props.setShowModal(false)}></div>
                </motion.div>
            );
        } else if('account-delete') {
            return (
                <motion.div className="modal modal--normal modal--accountDelete" variants={modal} onClick={(event)=> event.stopPropagation()}>
                    <div className="accountDelete-user">
                        <img className="accountDelete-user__avatar" src={Avatar} alt=""/>
                        <div>
                            <p className="accountDelete-user__name">山本 仁</p>
                            <p className="accountDelete-user__stundet-number">@2180075</p>
                        </div>
                    </div>
                    <p className="heading4">アカウントが削除されます</p>
                    <p className="txt">今まで投稿した活動履歴が全て削除されます。投稿した企業情報については削除されません。</p>
                    <div className="flex">
                        <p onClick={() => props.setShowModal(false)}>キャンセル</p>
                        <RoundedBtn txt="アカウントを削除" isDelete={'true'} />
                    </div>
                </motion.div>
            );
        }
    }

    const saveTextModalRender = () => {
        return(
            <motion.div className="modal modal--normal scroll" onClick={(event)=> event.stopPropagation()}>
                <div className="modal__header modal__header--side">
                    <div onClick={()=> setSaveTextModal(false)}>
                        <img src={MenuDownIcon} alt=""/>
                        <p className="heading5">戻る</p>
                    </div>
                    <RoundedBtn txt="保存" />
                </div>
                <div className="scrollContent">
                    <article className="saveText-item">
                        <p className="saveText-item__time"><time dateTime="2020-09-12-07-07">2020.09.12</time></p>
                        <p className="saveText-item__txt">一次面接を10:00~から受けて面接官と話したが、...</p>
                        <div className="saveText-item__wrap">
                            <button className="btn saveText-item__deleteBtn"><img src={TrashIcon} alt=""/></button>
                            <button onClick={()=> setSaveTextModal(false)} className="btn saveText-item__useBtn"><img src={CheckIcon_Green} alt=""/></button>
                        </div>
                    </article>
                    <article className="saveText-item">
                        <p className="saveText-item__time"><time dateTime="2020-09-12-07-07">2020.09.12</time></p>
                        <p className="saveText-item__txt">一次面接を10:00~から受けて面接官と話したが、...</p>
                        <div className="saveText-item__wrap">
                            <button className="btn saveText-item__deleteBtn"><img src={TrashIcon} alt=""/></button>
                            <button onClick={()=> setSaveTextModal(false)} className="btn saveText-item__useBtn"><img src={CheckIcon_Green} alt=""/></button>
                        </div>
                    </article>
                    <article className="saveText-item">
                        <p className="saveText-item__time"><time dateTime="2020-09-12-07-07">2020.09.12</time></p>
                        <p className="saveText-item__txt">一次面接を10:00~から受けて面接官と話したが、...</p>
                        <div className="saveText-item__wrap">
                            <button className="btn saveText-item__deleteBtn"><img src={TrashIcon} alt=""/></button>
                            <button onClick={()=> setSaveTextModal(false)} className="btn saveText-item__useBtn"><img src={CheckIcon_Green} alt=""/></button>
                        </div>
                    </article>
                    <article className="saveText-item">
                        <p className="saveText-item__time"><time dateTime="2020-09-12-07-07">2020.09.12</time></p>
                        <p className="saveText-item__txt">一次面接を10:00~から受けて面接官と話したが、...</p>
                        <div className="saveText-item__wrap">
                            <button className="btn saveText-item__deleteBtn"><img src={TrashIcon} alt=""/></button>
                            <button onClick={()=> setSaveTextModal(false)} className="btn saveText-item__useBtn"><img src={CheckIcon_Green} alt=""/></button>
                        </div>
                    </article>
                    <article className="saveText-item">
                        <p className="saveText-item__time"><time dateTime="2020-09-12-07-07">2020.09.12</time></p>
                        <p className="saveText-item__txt">一次面接を10:00~から受けて面接官と話したが、...</p>
                        <div className="saveText-item__wrap">
                            <button className="btn saveText-item__deleteBtn"><img src={TrashIcon} alt=""/></button>
                            <button onClick={()=> setSaveTextModal(false)} className="btn saveText-item__useBtn"><img src={CheckIcon_Green} alt=""/></button>
                        </div>
                    </article>
                    <article className="saveText-item">
                        <p className="saveText-item__time"><time dateTime="2020-09-12-07-07">2020.09.12</time></p>
                        <p className="saveText-item__txt">一次面接を10:00~から受けて面接官と話したが、...</p>
                        <div className="saveText-item__wrap">
                            <button className="btn saveText-item__deleteBtn"><img src={TrashIcon} alt=""/></button>
                            <button onClick={()=> setSaveTextModal(false)} className="btn saveText-item__useBtn"><img src={CheckIcon_Green} alt=""/></button>
                        </div>
                    </article>
                    <article className="saveText-item">
                        <p className="saveText-item__time"><time dateTime="2020-09-12-07-07">2020.09.12</time></p>
                        <p className="saveText-item__txt">一次面接を10:00~から受けて面接官と話したが、...</p>
                        <div className="saveText-item__wrap">
                            <button className="btn saveText-item__deleteBtn"><img src={TrashIcon} alt=""/></button>
                            <button onClick={()=> setSaveTextModal(false)} className="btn saveText-item__useBtn"><img src={CheckIcon_Green} alt=""/></button>
                        </div>
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
                <motion.div className="modal-background" onClick={()=> props.setShowModal(false)} variants={backdrop} initial="hidden" animate="visible" exit="hidden">
                    {renderModal()}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;