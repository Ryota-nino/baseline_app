import React from 'react';
import {ArrowIcon, TrashIcon} from '../../assets/images/';
import {Link} from 'react-router-dom';



const AccountSetting:React.FC = props => {
  return (
    <>
        <section className="app-main account-setting">
            <h2 className="heading1">設定</h2>
            <section className="contentBox contentBox--big step">
                <h3 className="heading4">アカウント設定</h3>
                <ul className="setting-list">
                    <li className="setting-list__item">
                        <Link to="/01/account-setting/password" >
                            <div>
                                <p>学籍番号</p>
                                <p>2180075</p>
                            </div>
                            <p><img src={ArrowIcon} alt=""/></p>
                        </Link>
                    </li>
                    <li className="setting-list__item">
                        <Link to="/01/account-setting/password" >
                            <div>
                                <p>パスワード</p>
                                <p>●●●●●●●●●</p>
                            </div>
                            <p><img src={ArrowIcon} alt=""/></p>
                        </Link>
                    </li>
                    <li className="setting-list__item">
                        <Link to="/01/account-setting/password" >
                            <div>
                                <p className="icon-txt icon-txt--attention"><img src={TrashIcon} alt="" />アカウントを削除する</p>
                            </div>
                            <p><img src={ArrowIcon} alt=""/></p>
                        </Link>
                    </li>
                </ul>
            </section>
        </section>
    </>
  );
}

export default AccountSetting;
