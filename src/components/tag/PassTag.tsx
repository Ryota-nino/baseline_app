import React from 'react';

interface Props {
    txt: string;
}

const PassTag:React.FC<Props> = props => {
    return(
        <p className="pass-tag">{props.txt}</p>
    );
};

export default PassTag;