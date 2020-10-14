import React, {useEffect,useState, useRef} from 'react';
import {Avatar,ArrowIcon, PencilIcon, TrashIcon} from '../../assets/images/index';

interface Props {
    isArrow: boolean;
}

const ActivityItem:React.FC<Props> = props => {
    const activityTxtEl = useRef<HTMLParagraphElement>(null);

    const setUrlText = ():void => {
        const reg = /((https?|ftp)(:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#]+))/;
        const txtEl: string = activityTxtEl.current!.innerText;
        const searchUrlTxt = txtEl.match(reg);
        activityTxtEl.current!.innerHTML = txtEl.replace(reg, `<a href="${searchUrlTxt![0]}">${searchUrlTxt![0]}</a>`);
    }

    useEffect( ():void => {
        setUrlText();
    }, []);

    let [toggleMenu, setToggleMenu] = useState(false);
    const arrowClickHandler = () :void => {
        setToggleMenu(!toggleMenu);
    }

    const isArrowRender = () => {
        if(props.isArrow) {
            return (
                <div className={`activity-item__arrow`} onClick={arrowClickHandler}><img src={ArrowIcon} alt=""/></div>
            )
        }
    }
    
    return(
        <article className="activity-item">
            <img src={Avatar} alt="" />
            <div className="activity-item__content">
                <div className="activity-item__head">
                    <h1 className="activity-item__name">山本 仁</h1>
                    <ul className="activity-item__list">
                        <li>1年次</li>
                        <li>&nbsp;|&nbsp;</li>
                        <li><span>今日</span> <time dateTime="2020-09-20T13:30">13:30</time></li>
                    </ul>
                    {isArrowRender()}
                </div>
                <p ref={activityTxtEl} className="activity-item__txt">マイナビ就職セミナーに行って来た話した企業、goodpatch DeNAgoodpatchとは9/12に面談予定。参加したセミナー: https://sbfl.net/blog/2019/11/12/react-hooks-introduction/</p>
            </div>
            <ul className={`activity-item-menu ${toggleMenu && 'view'}`}>
                <li className="activity-item-menu__item"><img src={PencilIcon} alt=""/><span>編集</span></li>
                <li className="activity-item-menu__item cAttention"><img src={TrashIcon} alt=""/><span>削除</span></li>
            </ul>
        </article>
    );
};

export default ActivityItem