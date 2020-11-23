import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowBold_Gray, ArrowBold_White } from "../../../assets/images/index";

interface Props {
  searchFunc: any;
  lastPage: number;
  totalPage?: number;
}

const Pagenation: React.FC<Props> = (props) => {
  const [pageNum, setPageNum] = useState<number>(1);
  const paginationList = document.querySelectorAll(".pagination-number li");

  useEffect(() => {
    const currentLi = document.querySelector(`.pagination-${pageNum}`);
    currentLi?.classList.add("current");
  }, []);

  // countが更新されたら呼ばれる部分
  useEffect(() => {
    // console.log(pageNum);  // これなら1増えた値が表示される
    paginationList.forEach((el) => {
      el.classList.remove("current");
    });
    const currentLi = document.querySelector(`.pagination-${pageNum}`);
    currentLi?.classList.add("current");
  }, [pageNum]);

  const countUp = () => {
    if (pageNum < props.lastPage) {
      setPageNum(pageNum + 1);
      props.searchFunc({
        page: pageNum + 1,
      });
    }
  };
  const countDown = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
      props.searchFunc({
        page: pageNum - 1,
      });
    }
  };
  const setPage = (num: number) => {
    setPageNum(num);
    props.searchFunc({
      page: num,
    });
  };

  const renderPageNumber = () => {
    const elements = [];
    for (let i = 0; i < props.lastPage; i++) {
      elements.push(
        <li className={`pagination-${i + 1}`}>
          <Link
            onClick={() => {
              setPage(i + 1);
            }}
            to={`?page=${i + 1}`}
          >
            {i + 1}
          </Link>
        </li>
      );
    }
    return elements;
  };

  return (
    <div className="pagenation">
      <Link
        onClick={() => countDown()}
        to={`?page=${pageNum === 1 ? pageNum : pageNum - 1}`}
        className="btn page-prevBtn"
      >
        <img src={ArrowBold_Gray} alt="" />
      </Link>
      <ol className="pagination-number">
        {renderPageNumber().map((el) => {
          return el;
        })}
      </ol>
      <Link
        onClick={() => countUp()}
        to={`?page=${pageNum === props.lastPage ? pageNum : pageNum + 1}`}
        className="btn page-nextBtn"
      >
        <img src={ArrowBold_White} alt="" />
      </Link>
    </div>
  );
};

export default Pagenation;
