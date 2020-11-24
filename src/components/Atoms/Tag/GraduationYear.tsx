import React from "react";

interface Props {
  txt: string;
}
const GraduationYear: React.FC<Props> = (props) => {
  const graduationYearConversion = () => {
    const text = props.txt;
    return text.substr(2, 2);
  };
  return <p className="graduationYear-tag">{graduationYearConversion()}卒</p>;
};
export default GraduationYear;
