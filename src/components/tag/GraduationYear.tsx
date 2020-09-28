import React from 'react';

interface Props {
    txt: string;
}

const GraduationYear:React.FC<Props> = props => {
    return(
        <p className="graduationYear-tag">{props.txt}</p>
    );
};

export default GraduationYear