import React, { useState, useEffect } from 'react';
import { InputWindowInterview } from './index';
import { SelectBox, FreeWordInput } from '../form';
import { AnimatePresence,motion } from 'framer-motion';
import { InsertAddBtn } from '../btn';

interface Props {
    window: any;
    func: any;
    pages: any;
}

const InputWindowListInterview:React.FC<Props> = props => {
    const pageTransition = {
        in: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.8
          }
        },
        out: {
          x: 20,
          opacity: 0,
        },
    }
    
    const element = props.window.map((todo:any) =>
        <InputWindowInterview id={todo.id} />
    );

    return(
        <motion.div id={`interview-${props.pages === 0 ? '0' : props.pages.length}`} className="company-info-edit__left-col" initial="out" animate="in" exit="out" variants={pageTransition}>
            <article className="contentBox contentBox--big">
                <h1 className="heading4">{props.pages === 0 ? '1' : props.pages.length + 1}次面接の概要をご記入ください</h1>
                <div className="label-input mb16">
                    <p className="label-input__txt">選考種類<span className="cAttention">*</span></p>
                    <SelectBox />
                </div>
                <div className="contentBox__flex mb16">
                    <div className="label-input">
                        <p className="label-input__txt">応募職種<span className="cAttention">*</span></p>
                        <SelectBox />
                    </div>
                    <div className="label-input">
                        <p className="label-input__txt">結果</p>
                        <SelectBox />
                    </div>
                </div>
                <div className="label-input">
                    <p className="label-input__txt">面接人数</p>
                    <SelectBox />
                </div>
            </article>

            {element}
            <InsertAddBtn txt="項目を追加" click={props.func} />
        </motion.div>
    );
};

export default InputWindowListInterview;