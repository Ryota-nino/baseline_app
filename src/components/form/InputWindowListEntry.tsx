import React, { useState, useEffect } from 'react';
import { InputWindowEntry } from './index';
import { AnimatePresence,motion } from 'framer-motion';

interface Props {
    obj: any;
}

const InputWindowListStep:React.FC<Props> = props => {
    
    const todos = props.obj.map((todo:any) =>
        <InputWindowEntry id={todo.id} />
      )

    return(
        <>
            {todos}
        </>
    );
};

export default InputWindowListStep;