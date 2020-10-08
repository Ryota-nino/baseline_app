import React, { useState,useRef, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { SelectBox, FreeWordInput, InputWindowListInterview } from '../form';

import { CompanyDetailCard } from '../company';
import { PenIcon } from '../../assets/images/index';
import { AnimatePresence,motion } from 'framer-motion';



const CompanyInfoEditInterview:React.FC = props => {

    const pageTransition = {
        in: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8
          }
        },
        out: {
          y: -20,
          opacity: 0,
        },
    }

    let [inputWindow, setInputWindow] = useState([
        {id: 1,},
    ]);

    
    let [inputPages, setInputPages] = useState([
        {
            id: 1,
            page: <></>
        },
    ]);

    let pagesLength = inputPages.length;    

    let windowLength = inputWindow.length;

    function createInputWindow () {
        if(windowLength < 10) {
            setInputWindow([
                ...inputWindow,
                { id: windowLength + 1, },
            ])
        }
    }
    
    const addTabBtn = useRef<HTMLButtonElement>(null);
    const insertTab = useRef<HTMLOListElement>(null);
    
    let isFirstClick:boolean;
    useEffect( ()=> {
         isFirstClick = true;
    }, [])

    const createTabMenu = () => {
        if(pagesLength < 6) {
            
            const nowCurrentEl = document.querySelector('.insert-tab__item.current')!;
            nowCurrentEl.classList.remove('current');

            // タブを増やす処理
            const li = document.createElement('li');
            const span = document.createElement('span');
            li.classList.add('insert-tab__item');
            li.id = `insertTab-${pagesLength}`
            li.dataset.id = pagesLength.toString();
            li.classList.add('current');
            li.appendChild(span);
            span.textContent = `${pagesLength + 1}次面接`;
            insertTab.current?.append(li);

            // ⭐️ページ切り替えのスタイルをつける
            const AllInputWindow = document.querySelectorAll('.company-info-edit__left-col');
            AllInputWindow.forEach(el => {
                el.classList.add('none');
            })

            // 新しいページを作成
            setInputPages([
                ...inputPages,
                {
                    id: pagesLength + 1,
                    page: <InputWindowListInterview window={inputWindow} func={createInputWindow} pages={inputPages} />
                },
            ]);

            // タブをクリックでスタイルを変えるイベントを設定
            const tabsEl = document.querySelectorAll('.insert-tab__item')!;
            
            
            tabsEl.forEach((tab:any)=> {
                tab.addEventListener('click', ()=> {
                    tabsEl.forEach((el:any)=> {
                        el.classList.remove('current');
                    });
                    // やること
                    // ① 一旦作成したinterview-数字　の要素を全てnoneにする
                    // ② そのあとクリックしたタブに適するinterview-数字を表示する

                    // ⭐️作ったばかりのタブ要素にもページ切り替えのスタイルをつける
                    const AllInputWindow = document.querySelectorAll('.company-info-edit__left-col');
                    AllInputWindow.forEach(el => {
                        el.classList.add('none');
                    })

                    tab.classList.add('current');  
                    document.getElementById(`interview-${tab.dataset.id}`)?.classList.remove('none');
                })
            });
            
            if(isFirstClick) {
                document.getElementById('interview-0')!.classList.add('none');
                isFirstClick = false;
                
            } else {
                const interviewEl = document.getElementById(`interview-${pagesLength - 1}`);
                interviewEl!.classList.add('none');
            }
            
        }
    }
    


    return(
        <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
            <div className="insert-tab">
                <ol ref={insertTab} className="insert-tab__wrap">
                    <li data-id="0" id="insertTab-0" className="insert-tab__item current">
                        <span>1次面接</span>
                    </li>
                    {/* <li className="insert-tab__item">二次面接</li> */}
                </ol>
                <button ref={addTabBtn} onClick={createTabMenu} className="btn btn--plus"></button>
            </div>
            <main className="main company-info-edit">
                
                <div className="main__container">
                    <Link to="/company-info" className="btn pageBack-link"><span className="heading4">情報一覧へ</span></Link>
                    <div className="company-info-edit__container">
                        <InputWindowListInterview window={inputWindow} func={createInputWindow} pages={0} />
                        {inputPages.map((data)=> {
                            return data.page;
                        })}
                        <CompanyDetailCard/>
                    </div>
                </div>
            </main>
        </motion.div>
    );
};

export default CompanyInfoEditInterview