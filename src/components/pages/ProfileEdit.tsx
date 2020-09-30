import React, {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {InputBig , InputDropdown} from '../form';
import {ActionBtn, RoundedBtn} from '../btn';
import { AnimatePresence,motion } from 'framer-motion';
import {Avatar, CameraIcon} from '../../assets/images/index';

const ProfileEdit:React.FC = () => {
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
const history = useHistory();
const handleLink = (path:string) => history.push(path);
const isError = [
    {isEmpty1: false},
    {isEmpty2: false},
    {isEmpty3: false}
];
const yearList = [
    {value: '21卒'},
    {value: '22卒'},
    {value: '23卒'},
    {value: '24卒'},
    {value: '25卒'},
    {value: '26卒'},
];
const jobList = [
    {value: '企画職'},
    {value: 'デザイナー'},
    {value: 'エンジニア'},
    
];

useEffect( ()=> {
    selectBtnChanges();
    
}, [])

const selectBtnChanges = () => {
    const selectBtns = document.querySelectorAll('.select-btn');
    console.log(selectBtns)
    selectBtns.forEach(btn => {
        btn.classList.remove('current');
        btn.addEventListener('click', ()=> {
            btn.classList.add('current');
        });
    });
};

return (
    <motion.section className="app-main profile-edit single" initial="out" animate="in" exit="out" variants={pageTransition}>
        <button className="btn pageBack-link" onClick={() => history.goBack()}><span className="heading4">マイページへ</span></button>
        <form>
          <div className="contentBox contentBox--big">
                <h2 className="heading4">プロフィール編集</h2>

                <div className="userEdit-header">

                    <div className="userEdit-header__left-col">
                        <label className="select-image">
                            <div className="select-image__wrap">
                                <img className="select-image__avatar" src={Avatar} alt=""/>
                                <div className="select-image__overlay">
                                    <img className="select-image__icon" src={CameraIcon} alt=""/>
                                    <span className="select-image__txt">画像を選択</span>
                                </div>
                            </div>
                            <input type="file"/>
                        </label>
                    </div>

                    <div className="userEdit-header__right-col">
                        <InputBig type="text" labelTxt="名前" isRequired={false} placeholderTxt="山本 仁" isError={isError} isIcon={false} />
                        <div className="gender-select">
                            <p className="gender-select__heading">性別</p>
                            <ul className="gender-select-list">
                                <li>
                                    <label className="btn select-btn current">
                                        <span>男性</span>
                                        <input type="checkbox" name=""/>
                                    </label>
                                </li>
                                <li>
                                    <label className="btn select-btn">
                                        <span>女性</span>
                                        <input type="checkbox" name=""/>
                                    </label>
                                </li>
                                <li>
                                    <label className="btn select-btn">
                                        <span>その他</span>
                                        <input type="checkbox" name=""/>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

            <div className="contentBox contentBox--big">
                <InputBig type="number" labelTxt="学籍番号" isRequired={false} placeholderTxt="2180098" isError={isError} isIcon={false} />
                <InputDropdown ttl="希望職種" selectObj={jobList}/>
                <InputDropdown ttl="卒業年次" selectObj={yearList}/>
                <div className="contentBox__wrap">
                    <p className="contentBox__cansel btn"><Link to="/mypage">キャンセル</Link></p>
                    <div onClick={ () => handleLink('/mypage')}>
                        <RoundedBtn txt="変更する"/>
                    </div>
                </div>
            </div>
            
        </form>
    </motion.section>
  );
}

export default ProfileEdit;
