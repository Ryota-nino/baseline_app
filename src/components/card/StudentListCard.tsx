import React from 'react';
import {Link} from 'react-router-dom';
import { MyAvatar } from '../user';
import { GraduationYear } from '../tag';

interface Props {
  id: number;
  name: string;
  student_number: string;
  graduationYear: string;
  job: string;
  updateTime: string;
}

const SearchStudent:React.FC<Props> = (props) => {
  return (
    <article className="studentCard-item">
        <Link to={`/user/${props.id}`}>
          <MyAvatar name={props.name} student_number={props.student_number} ml="8px" isArrow={false}/>
          <GraduationYear txt={props.graduationYear}/>
          <p className="studentListTable__job">{props.job}</p>
          <p className="studentListTable__time">{props.updateTime}</p>
        </Link>
    </article>
  );
}

export default SearchStudent;
