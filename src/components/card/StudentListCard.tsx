import React from 'react';
import {Link} from 'react-router-dom';
import { MyAvatar } from '../user';
import { GraduationYear } from '../tag';

const SearchStudent:React.FC = () => {
  return (
    <article className="studentCard-item">
        <Link to="">
        <MyAvatar ml="8px" isArrow={false}/>
        <GraduationYear txt="22卒"/>
        <p className="studentListTable__job">デザイナー</p>
        <p className="studentListTable__time">今日 13:30</p>
        </Link>
    </article>
  );
}

export default SearchStudent;
