import React from 'react';
import {Link} from 'react-router-dom';
import { Goodpatch } from '../../assets/images/index';

const CompanyCard:React.FC = () => {
  return (
        <article className="company-card">
            <Link to="/company-detail/01/about">
              <figure className="company-card__img"><img src={Goodpatch} alt=""/></figure>
              <h3 className="company-card__name">株式会社グッドパッチ</h3>
              <p className="company-card__desc">UI/UXデザイン、ビジネスモデルデザイン、ブランド体験デザイン、組織デザイン、ソフトウェア開発...</p>
              <p className="company-card__address">東京</p>
              <p className="company-card__time"><time dateTime="">2020.09.02</time></p>
            </Link>
        </article>
  );
}

export default CompanyCard;
