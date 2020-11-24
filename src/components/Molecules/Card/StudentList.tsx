import React from "react";
import { Link } from "react-router-dom";
import { MyAvatar } from "../Info/index";
import { GraduationYear } from "../../Atoms/Tag";

interface Props {
  id: number;
  name: string;
  student_number: string;
  graduationYear: string;
  job: string;
  updateTime: string;
  iconPath: string;
}

const StudentList: React.FC<Props> = (props) => {
  const timeTextConversion = () => {
    const dateTime: string = String(props.updateTime).slice(0, 10);
    const timeText: string = dateTime.replace(/-/g, ".");
    const texts: {
      dateTime: string;
      timeText: string;
    } = {
      dateTime,
      timeText,
    };
    return texts;
  };

  return (
    <article className="studentCard-item">
      <Link to={`/user/${props.id}`}>
        <MyAvatar
          name={props.name}
          student_number={props.student_number}
          ml="8px"
          iconPath={props.iconPath}
          isArrow={false}
        />
        <GraduationYear txt={props.graduationYear} />
        <p className="studentListTable__job">{props.job}</p>
        <p className="studentListTable__time">
          <time dateTime={timeTextConversion().dateTime}>
            {timeTextConversion().timeText}
          </time>
        </p>
      </Link>
    </article>
  );
};

export default StudentList;
