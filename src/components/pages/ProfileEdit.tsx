import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {InputBig , InputDropdown} from '../form';
import {ActionBtn} from '../btn';
import {Avatar, CameraIcon} from '../../assets/images/index';

const ProfileEdit:React.FC = () => {
const history = useHistory();
const isError = [
    {isEmpty1: false},
    {isEmpty2: false},
    {isEmpty3: false}
]
  return (
    <section className="app-main profile-edit single">
        <button className="btn pageBack-link" onClick={() => history.goBack()}><span className="heading4">マイページへ</span></button>
        <div className="contentBox">
          <h2 className="heading4">プロフィール編集</h2>
            <form action="">
                <InputBig type="text" labelTxt="名前" isRequired={false} placeholderTxt="山本 仁" isError={isError} isIcon={false} />
                <InputBig type="number" labelTxt="学籍番号" isRequired={false} placeholderTxt="2180098" isError={isError} isIcon={false} />
                <div className="gender-select">
                    <p className="gender-select__heading">学籍番号</p>
                    <ul className="gender-select-list">
                        <li>
                            <label className="select-btn">
                                <span>男性</span>
                                <input type="checkbox" name=""/>
                            </label>
                        </li>
                        <li>
                            <label className="select-btn">
                                <span>女性</span>
                                <input type="checkbox" name=""/>
                            </label>
                        </li>
                        <li>
                            <label className="select-btn">
                                <span>その他</span>
                                <input type="checkbox" name=""/>
                            </label>
                        </li>
                    </ul>
                </div>

                <label className="select-image">
                    <p className="select-image__heading">サムネイル画像</p>
                    <div className="select-image__wrap">
                        <img src={Avatar} alt=""/>
                        <img className="select-image__icon" src={CameraIcon} alt=""/>
                        <span>画像を選択</span>
                    </div>
                    <input type="file"/>
                </label>

                <InputDropdown />
                <InputDropdown />
                <ActionBtn txt="プロフィールを変更" isPlus={false} linkUrl=""/>
            </form>
        </div>
    </section>
  );
}

export default ProfileEdit;
