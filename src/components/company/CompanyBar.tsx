import React from 'react';
import {ActionBtn} from '../btn';
import { Goodpatch } from '../../assets/images/index';

interface Props {
    hasActionBtn: boolean;
}

const CompanyBar:React.FC<Props> = props => {
    return(
        <article className="company-bar">
            <div className="company-bar__wrap">
                <img src={Goodpatch} alt=""/>
                <div className="company-bar__inner">
                    <h1 className="heading4">ビジョナル株式会社</h1>
                    <div>
                        <p className="company-bar__link"><a target="_blank" href="https://visional.inc/">https://visional.inc/</a></p>
                        <p className="company-bar__address">東京</p>
                    </div>
                </div>
            </div>
            {props.hasActionBtn && <ActionBtn txt="情報を追加する" isPlus={false} linkUrl="company-info"/>}
        </article>
    );
};

export default CompanyBar