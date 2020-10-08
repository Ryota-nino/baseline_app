import React from 'react';
import { TrashIcon, PenIcon } from '../../assets/images/index';
import { InputTextArea } from './index';
import { AnimatePresence,motion } from 'framer-motion';

interface Props {
    id: number;
}


const InputWindowInterview:React.FC<Props> = props => {
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

    const deleteHandler = () => {
        const article = document.getElementById(`inputWindow-${props.id}`)!;
        if(props.id !== 1) {
            article.style.display = 'none';
        }
    }

    return(
        <motion.article id={`inputWindow-${props.id}`} key={props.id} className="contentBox contentBox--big interview" initial="out" animate="in" exit="out" variants={pageTransition}>
            <h1 className="heading4">面接の内容</h1>
            <InputTextArea ttl="面接を受けた感想をお書きください" placeholder="アドバイスや指摘、気づいた点など"/>
            {
                props.id !== 1 && <div id={`inputWindowDelete-${props.id}`} className="btn btn--delete" onClick={deleteHandler}><img src={TrashIcon} alt=""/></div>
            }
        </motion.article>
        
    );
};

export default InputWindowInterview;