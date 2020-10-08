import React from 'react';
interface Props {
    txt: string;
    isDelete?: string;
}

const RoundedBtn:React.FC<Props> = props => {
    return(
        <button className={`btn btn--rounded ${props.isDelete && 'delete'}`} type="submit">{props.txt}</button>
    );
};

export default RoundedBtn