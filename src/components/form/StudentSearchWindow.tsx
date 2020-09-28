import React from 'react';
import { SearchBar, InputCheckRadio, SelectBox } from './index.js';
import PrefecturesData from '../../assets/data/prefectures';
import { render } from '@testing-library/react';

interface Props {
  className?: string;
}

const StudentSearchWindow:React.FC<Props> = props => {
  const jobList = ['デザイナー', 'エンジニア' , '企画職']
  const renderJobList = () => {
    return jobList.map((item, index) => {
        return (
          <InputCheckRadio keyName={`job-${index}`} className={"checkbox-item"} type={"checkbox"} txt={item} />
        );  
    })
  }

  return (
    <div className={`sideSearchBar ${props.className}`}>

      <div className="search-item">
        <p className="search-item__name">フリーワード</p>
        <SearchBar width={"200px"} isIcon={true} placeholder={"検索ワードを入力"}/>
      </div>


      <div className="search-item">
        <p className="search-item__name">卒業年</p>
        <SelectBox />
      </div>

      <div className="search-item">
        <p className="search-item__name">希望職種</p>
        <div className="checkbox-list">
          {renderJobList()}
        </div>
      </div>

    </div>
  );
}

export default StudentSearchWindow;
