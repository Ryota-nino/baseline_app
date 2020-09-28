import React from 'react';
import {AccountDefaultIcon, ArrowIcon} from '../../assets/images/index';

interface Props {
    ml: string;
    isArrow: boolean;
}

const MyAvatar:React.FC<Props> = props => {

    const isArrowRender = () => {
        if(props.isArrow) {
            return (
                <img src={ArrowIcon} alt=""/>
            )   
        }
    }

    return(
        <div className="myAvatar">
            <img src={AccountDefaultIcon} alt=""/>
            <div className="myAvatar__wrap" style={{ marginLeft: props.ml }}>
                <p className="myAvatar__name">山本 仁</p>
                <p className="myAvatar__id">@2180075</p>
            </div>
    <div className="myAvatar__arrow">{isArrowRender()}</div>
        </div>
    );
};

export default MyAvatar