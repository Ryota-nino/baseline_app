import React, {useEffect,useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import { setTextRange } from 'typescript';
import { ArrowBold_Gray, ArrowBold_White } from '../../../assets/images/index';

interface Props {
  // pageNum: number;
  // setPageNum: any;
  totalPage?: number;
}

const Pagenation:React.FC<Props> = (props) => {
    const items = [
      { name: 'AAA', color: 'black'},
      { name: 'BBB', color: 'blue'},
      { name: 'CCC', color: 'orange'},
      { name: 'DDD', color: 'green'},
    ];

    const [pageNum, setPageNum] = useState<number>(1);
    // const [arrays, setArrays] = useState<any>([]);
    const paginationList = document.querySelectorAll('.pagination-number li');

    useEffect(() => {
      const currentLi = document.querySelector(`.pagination-${pageNum}`);
      currentLi?.classList.add('current');

    }, []);

    // countが更新されたら呼ばれる部分
    useEffect(() => {
      // console.log(pageNum);  // これなら1増えた値が表示される
      paginationList.forEach(el => {
        el.classList.remove('current');
      })
      const currentLi = document.querySelector(`.pagination-${pageNum}`);
      currentLi?.classList.add('current');
    }, [pageNum]);

    const countUp = () => {
      if(pageNum < items.length) {
        setPageNum(pageNum + 1);
      }
    };
    const countDown = () => {
      if(pageNum > 1) {
        setPageNum(pageNum - 1);
      }
    };

    return(
        <div className="pagenation">
          <Link onClick={() => countDown() } to={`?page=${pageNum === 1 ? pageNum : pageNum - 1}`}  className="btn page-prevBtn"><img src={ArrowBold_Gray} alt="" /></Link>
          <ol className="pagination-number">
            
            {items.map((item, index) => (
              <li className={`pagination-${index + 1}`}><Link onClick={()=> {setPageNum(index + 1);}} 
              to={`?page=${index + 1}`}>{index + 1}</Link>
              </li>
            ))}
          </ol>
          <Link onClick={() => countUp() } to={`?page=${pageNum === items.length ? pageNum : pageNum + 1}`} className="btn page-nextBtn"><img src={ArrowBold_White} alt="" /></Link>
        </div>
    );
};

export default Pagenation;