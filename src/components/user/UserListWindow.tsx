import React from 'react';
import {Link} from 'react-router-dom';
import {Avatar} from '../../assets/images/index';

interface Props {
    thisPage: string;
}

const UserListWindow:React.FC<Props> = props => {
    let pageTtl, linkTo;
    if(props.thisPage === 'insert-users') {
        pageTtl = 'この会社に就職した方';
        linkTo = 'company-users';
    } else if (props.thisPage === 'company-users') {
         pageTtl = '情報提供に協力した方';
         linkTo = 'insert-users';
    }
    
    return(
        <article className="contentBox userListWindow">
            <h1 className="heading5">{pageTtl}</h1>
            <ul className="userListWindow__list">
                <li className="user-excerpt">
                    <Link to="">
                        <img src={Avatar} alt=""/>
                        <div className="user-excerpt__wrap">
                            <p className="user-excerpt__name">山本 人</p>
                            <div>
                                <p className="user-excerpt__year">22卒</p>
                                <p className="user-excerpt__job">デザイナー希望</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className="user-excerpt">
                    <Link to="">
                        <img src={Avatar} alt=""/>
                        <div className="user-excerpt__wrap">
                            <p className="user-excerpt__name">山本 人</p>
                            <div>
                                <p className="user-excerpt__year">22卒</p>
                                <p className="user-excerpt__job">デザイナー希望</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className="user-excerpt">
                    <Link to="">
                        <img src={Avatar} alt=""/>
                        <div className="user-excerpt__wrap">
                            <p className="user-excerpt__name">山本 人</p>
                            <div>
                                <p className="user-excerpt__year">22卒</p>
                                <p className="user-excerpt__job">デザイナー希望</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className="user-excerpt">
                    <Link to="">
                        <img src={Avatar} alt=""/>
                        <div className="user-excerpt__wrap">
                            <p className="user-excerpt__name">山本 人</p>
                            <div>
                                <p className="user-excerpt__year">22卒</p>
                                <p className="user-excerpt__job">デザイナー希望</p>
                            </div>
                        </div>
                    </Link>
                </li>
                
            </ul>
            <Link className="userListWindow__link" to={`/${linkTo}`}>さらに表示する</Link>
        </article>
    );
};

export default UserListWindow