import React from 'react';
import {InputCheckRadio} from '../form';
import PrefecturesData from '../../assets/data/prefectures';

const PrefectureAccordion:React.FC = props => {

  const renderPrefecturesList = ()=> {
    return Object.entries(PrefecturesData['prefectures']).map(([key,value]) => {
      return (
        <li className="prefecture-accordion__item">
          <p className="prefecture-accordion__category">{key}</p>
          <ul className="prefecture-accordion__child-item">
            {value.map((data:any) => {
              return <li><InputCheckRadio keyName={data.id} id={data.code} type="checkbox" txt={data.name}/></li>
            })}
          </ul>
        </li>
      );
      
    })
  }
  
  return (
    <div className="prefecture-accordion">
        <p className="prefecture-accordion__heading">地域選択</p>
        <ul className="prefecture-accordion__select-list">
          {renderPrefecturesList()}
        </ul>
    </div>
  );
}

export default PrefectureAccordion;
