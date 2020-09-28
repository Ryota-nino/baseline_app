import React from 'react';
import {Goodpatch} from '../../assets/images';


const CompanyExcerptCard:React.FC = props => {
  
  return (
    <article className="companyExcerpt-card">
        <img src={Goodpatch} alt=""/>
        <div className="companyExcerpt-card__wrap">
            <h1 className="heading5">ビジョナル株式会社</h1>
            <p className="companyExcerpt-card__link"><a href="https://visional.inc/">https://visional.inc/</a></p>
        </div>
    </article>        
  );
}

export default CompanyExcerptCard;
