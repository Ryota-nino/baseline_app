import React from 'react';
import {Link} from 'react-router-dom';
import { Goodpatch } from '../../assets/images/index';
const CompanyDetailCard:React.FC = props => {
  return (
        <article className="comapay-detailCard">
            <Link to="">
                <figure className="comapay-detailCard__img"><img src={Goodpatch} alt=""/></figure>
                <h1 className="comapay-detailCard__name">株式会社Visional</h1>
            </Link>
            <p className="comapay-detailCard__link"><a target="_blank" href="https://visional.inc/">https://visional.inc/</a></p>
        </article>
  );
}

export default CompanyDetailCard;
