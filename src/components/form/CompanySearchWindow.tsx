import React, {useState} from 'react';
import { SearchBar, InputCheckRadio } from './index.js';
import PrefecturesData from '../../assets/data/prefectures';

interface Props {
  className?: string;
}

const CompanySearchWindow:React.FC<Props> = props => {
  let isShow = false;

  const [prefNumber, setPrefNumber] = useState<any>();
  const [graduateStudent, setGraduateStudent] = useState<any>();
  
  const prefSearchHandler = (value:any) => {
    setPrefNumber(value);
    console.log(value) ;
  }
  const graduateStudentHandler = (value:any) => {
    setGraduateStudent(value);
    console.log(value) ;
  }

  const renderPrefecturesList = (isAllShow: boolean) => {
    return Object.entries(PrefecturesData['prefectures']).map(([key,value]) => {
      return (
        <>
          <p className="checkbox-list__heading">{key}</p>
          {value.map(data => {
            return <InputCheckRadio keyName={data.code.toString()} className={"checkbox-item"} type={"checkbox"} txt={data.name} checkboxFunc={prefSearchHandler} />
          })}
        </>
      );
    });
  };

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
        <InputCheckRadio className={"search-item__checkbox"} type={"checkbox"} txt={"卒業生の在籍"} keyName={"alumni"} checkboxFunc={graduateStudentHandler} />
      </div>

    </div>
  );
}

export default CompanySearchWindow;
