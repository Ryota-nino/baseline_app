import React from 'react';
import { SearchBar, InputCheckRadio } from './index.js';
import PrefecturesData from '../../assets/data/prefectures';
import { render } from '@testing-library/react';

interface Props {
  className?: string;
}

const CompanySearchWindow:React.FC<Props> = props => {
  let dataShowNum = PrefecturesData['prefectures'].length;
  let isShow = false;
  const renderPrefecturesList = (isAllShow: boolean) => {
    return PrefecturesData['prefectures'].map(data => {
      if(data.code < dataShowNum) {
        if(data.code === 0) {
          return (
            <p className="checkbox-list__heading">{data.name}</p>
          )
        } else {
          return (
            <InputCheckRadio keyName={data.code.toString()} className={"checkbox-item"} type={"checkbox"} txt={data.name} />
          );  
        }
      }
    })

  }

  const showList = () => {
    const isListBtn = document.getElementById('isShow-ListBtn') as HTMLButtonElement;
    if(!isShow) {
      const prefecturesList = document.querySelector('.prefectures-list__wrap') as HTMLElement;
      prefecturesList.style.height = "100%";
      prefecturesList.style.overflowY = "visible";
      isListBtn.innerText = '閉じる';
    } else {
      const prefecturesList = document.querySelector('.prefectures-list__wrap') as HTMLElement;
      isListBtn.innerText = 'すべての項目を表示';
      prefecturesList.style.height = "149px";
      prefecturesList.style.overflowY = "hidden";
    }
    isShow = !isShow;
  };
  return (
    <div className={`sideSearchBar ${props.className}`}>

      <div className="search-item">
        <p className="search-item__name">フリーワード</p>
        <SearchBar width={"200px"} isIcon={true} placeholder={"企業名で検索"}/>
      </div>

      <div className="search-item">

        <p className="search-item__name">地域で検索</p>
        <div className="checkbox-list prefectures-list">
          <div className="checkbox-list__wrap prefectures-list__wrap">
            {/* <p className="checkbox-list__heading">北海道・東北</p> */}
            { renderPrefecturesList(false) }
          </div>
          <button className="btn" id="isShow-ListBtn" onClick={showList}>すべての項目を表示</button>
        </div>
      </div>

      <div className="search-item">
        <p className="search-item__name">事業内容</p>
        <SearchBar width={"200px"} isIcon={false} placeholder={"事業内容で検索"}/>
      </div>

      <div className="search-item">
        <InputCheckRadio className={"search-item__checkbox"} type={"checkbox"} txt={"卒業生の在籍"} keyName={"alumni"} />
      </div>

    </div>
  );
}

export default CompanySearchWindow;