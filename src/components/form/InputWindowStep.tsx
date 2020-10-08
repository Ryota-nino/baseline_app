import React from 'react';
import { TrashIcon, PenIcon } from '../../assets/images/index';
import { InputBig , InputDropdown, } from '.';
import { AnimatePresence,motion } from 'framer-motion';

interface Props {
    id: number;
}


const InputWindowStep:React.FC<Props> = props => {
    const isError = [
        {isEmpty1: false},
        {isEmpty2: false},
        {isEmpty3: false}
    ];
    const calendarObj = [
        {value: '1月'},
        {value: '2月'},
        {value: '3月'},
        {value: '4月'},
        {value: '5月'},
        {value: '6月'},
        {value: '7月'},
        {value: '8月'},
        {value: '9月'},
        {value: '10月'},
        {value: '11月'},
        {value: '12月'},
    ];

    const deleteHandler = () => {
        const article = document.getElementById(`inputWindow-${props.id}`)!;
        if(props.id !== 1) {
            article.style.display = 'none';
        }
    }

    return(
        <article id={`inputWindow-${props.id}`} key={props.id} className="contentBox contentBox--big step">
            <h1 className="heading4">選考ステップを記述しよう</h1>
            <div className="contentBox__wrap">
                <InputBig type="string" labelTxt="タイトル" isRequired={true} isRequiredTxt={true} placeholderTxt="例) エントリーシート" isError={isError} isIcon={false} />
                <InputDropdown ttl="" selectObj={calendarObj}/>
            </div>
            <div className="input-txtarea">
                <p className="input-txtarea__heading">本文</p>
                <textarea placeholder="本文を記入"></textarea>
            </div>
            {
                props.id !== 1 && <div id={`inputWindowDelete-${props.id}`} className="btn btn--delete" onClick={deleteHandler}><img src={TrashIcon} alt=""/></div>
            }
            
        </article>
    );
};

export default InputWindowStep;