import React from 'react';
interface Props {
    txt: string;
    isDelete?: string;
    className?: any;
}

const RoundedBtn:React.FC<Props> = props => {
    return(
        <button className={`btn btn--rounded ${props.isDelete && 'delete'} ${props.className}`} type="submit">{props.txt}</button>
    );
};

export default RoundedBtn