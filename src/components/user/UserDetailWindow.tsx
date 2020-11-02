import React,{useState, useEffect} from 'react';
import {Avatar,MailIcon} from '../../assets/images/index';
import {ActionBtn} from '../btn';

interface Props {
    account: any;
    account_id: any;
}

const UserDetailWindow:React.FC<Props> = (props) => {
    // console.log(props.account)
    // props.account ? props.account[props.account_id].graduation_year : ''

    return(
        <div className="userDetail-window">
            <div className="userDetail-window__container">
                <img src={Avatar} alt=""/>
                <div>
                    <div className="userDetail-window__wrap">
                        <p className="userDetail-window__name">{props.account ? props.account[props.account_id].last_name + ' ' + props.account[props.account_id].first_name : ''}</p>
                        <p className="userDetail-window__id">@{props.account ? props.account[props.account_id].student_number : ''}</p>
                    </div>
                    <ul className="userDetail-window__list">
                        <li className="userDetail-window__year">{props.account ? props.account[props.account_id].graduation_year : ''}</li>
                        <li className="userDetail-window__gender">&nbsp;/&nbsp; {props.account ? props.account[props.account_id].gender : ''} &nbsp;/&nbsp;</li>
                        <li className="userDetail-window__job">{props.account ? props.account[props.account_id].job : ''}</li>
                    </ul>
                </div>
            </div>
            <div className="userDetail-window__right-col">
                <a href={`mailto:${props.account ? props.account[props.account_id].mail : ''}`} className="btn btn--mail"><img src={MailIcon} alt=""/></a>
                <ActionBtn type="button" txt="プロフィールを編集" isPlus={false}  linkUrl="profile-edit"/> 
            </div>
        </div>
    );
};

export default UserDetailWindow