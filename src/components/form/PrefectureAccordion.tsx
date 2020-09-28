import React from 'react';
import {InputCheckRadio} from '../form';

const PrefectureAccordion:React.FC = props => {
  
  return (
    <div className="prefecture-accordion">
        <p className="prefecture-accordion__heading">地域選択</p>
        <ul className="prefecture-accordion__select-list">
            <li className="prefecture-accordion__item">
            <p className="prefecture-accordion__category">北海道・登録</p>
            <ul className="prefecture-accordion__child-item">
                <li><InputCheckRadio type="checkbox" txt="北海道"/></li>
                <li><InputCheckRadio type="checkbox" txt="北海道"/></li>
                <li><InputCheckRadio type="checkbox" txt="北海道"/></li>
                <li><InputCheckRadio type="checkbox" txt="北海道"/></li>
            </ul>
            </li>
            <li className="prefecture-accordion__item">
            <p className="prefecture-accordion__category">北海道・登録</p>
            <ul className="prefecture-accordion__child-item">
                <li><InputCheckRadio type="checkbox" txt="北海道"/></li>
                <li><InputCheckRadio type="checkbox" txt="北海道"/></li>
                <li><InputCheckRadio type="checkbox" txt="北海道"/></li>
                <li><InputCheckRadio type="checkbox" txt="北海道"/></li>
                <li><InputCheckRadio type="checkbox" txt="北海道"/></li>
                <li><InputCheckRadio type="checkbox" txt="北海道"/></li>
                <li><InputCheckRadio type="checkbox" txt="北海道"/></li>
                <li><InputCheckRadio type="checkbox" txt="北海道"/></li>
            </ul>
            </li>
        </ul>
    </div>
  );
}

export default PrefectureAccordion;
