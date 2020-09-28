import React from 'react';
interface Props {
    txt: string;
}

const RoundedBtn:React.FC<Props> = props => {
    return(
        <button className="btn btn--rounded" type="submit">{props.txt}</button>
    );
};

export default RoundedBtn