import React, { useEffect, } from 'react';
import { AnimatePresence,motion } from 'framer-motion';
import {CheckIcon, CloseIcon} from '../../assets/images/index';

interface Props {
    type: string;
}

const Popup:React.FC<Props> = props => {
    console.log(props.type)
    
    const createElement = (txt:string, imgPath:any, type:boolean) => {

        let className = type ? 'update' : 'error';

        return (
            <div className={`${className}-bar`}>
                <div className={`${className}-bar__wrap`}>
                    <div className={`${className}-bar__icon`}><img src={imgPath} alt=""/></div>
                    <p>{txt}</p>
                </div>
            </div>
        );
    };

    const rootingText = () => {
        if(props.type === 'activityUpdate') {
            return createElement('アクティビティの投稿が完了しました',CheckIcon, true);
        } else if(props.type === 'activityError') {
            return createElement('アクティビティの投稿が失敗しました', CloseIcon, false);
        }
    }

    return (
        <>
            {rootingText()}
        </>
    );
}

export default Popup;