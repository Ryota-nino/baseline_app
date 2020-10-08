import React from 'react';
import { TrashIcon, PenIcon } from '../../assets/images/index';
import { InputBig , InputTextArea, } from '.';
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
        <>
        <article id={`inputWindow-${props.id}`} key={props.id} className="contentBox contentBox--big entry">
            {props.id === 1 && <h1 className="heading4">エントリーシート</h1>}
            <InputBig className="mb42" type="string" labelTxt="タイトル" isRequired={true} isRequiredTxt={true} placeholderTxt="例) エントリーシート" isError={isError} isIcon={false} />
            <InputTextArea ttl="本文" placeholder="本文を記入"/>
            <div className="btn btn--delete"><img src={TrashIcon} alt=""/></div>
        </article>
        </>
    );
};

export default InputWindowStep;