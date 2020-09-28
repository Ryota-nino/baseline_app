import React from 'react';
import {Avatar,MailIcon} from '../../assets/images/index';
import {ActionBtn} from '../btn';



const UserDetailWindow:React.FC = () => {
    return(
        <div className="userDetail-window">
            <div className="userDetail-window__container">
                <img src={Avatar} alt=""/>
                <div>
                    <div className="userDetail-window__wrap">
                        <p className="userDetail-window__name">山本 仁</p>
                        <p className="userDetail-window__id">@2180075</p>
                    </div>
                    <ul className="userDetail-window__list">
                        <li className="userDetail-window__year">22卒</li>
                        <li className="userDetail-window__gender">男性</li>
                        <li className="userDetail-window__job">デザイナー</li>
                    </ul>
                </div>
            </div>
            <div className="userDetail-window__right-col">
                <button className="btn btn--mail"><img src={MailIcon} alt=""/></button>
                <ActionBtn txt="プロフィールを編集" isPlus={false}  linkUrl="profile-edit"/> 
            </div>
        </div>
    );
};

export default UserDetailWindow