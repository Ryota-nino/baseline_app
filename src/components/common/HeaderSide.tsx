import React from 'react';
import {Link} from 'react-router-dom';
import { Logo } from '../../assets/images/index';
import { RoundedBtn } from '../btn';



const HeaderSide:React.FC = () => {
    return(
        <header className="header-side">
            <div className="header-side__wrapper">
                <h1 className="header-side__logo"><Link to=""><img src={Logo} alt=""/></Link></h1>
                <div className="header-side__right">
                    <Link to="/company-info" className="header-side__cancel btn">キャンセル</Link>
                    <RoundedBtn txt="保存" />
                </div>
            </div>
        </header>
    );
};

export default HeaderSide