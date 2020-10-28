import React, {useState, useEffect} from 'react';
import { CompanySearchWindow, SortBar } from '../form/index';
import { Pagenation } from '../common/index';
import { ActionBtn } from '../btn/index';
import { motion } from 'framer-motion';
import { CompanyCard } from '../card/index';
import axios from "axios";


class SearchCompany extends React.Component<{}, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
  }

  pageTransition = {
    in: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2
      }
    },
    out: {
      x: -20,
      opacity: 0,
    },
  }
  renderLength = 5; // １ページあたりのデータ件数
  page = 1;

  componentDidMount() {
    const url = "./companies.json";
    axios.get(url).then(res => {
      this.setState({
        data: res.data,
        companiesLength: res.data.length,
        totalPage: Math.ceil(res.data.length / this.renderLength)
      });
    })
  }

  render() {
    return (
      <motion.section className="app-main searchCompany" initial="out" animate="in" exit="out" variants={this.pageTransition}>
        <h2 className="heading1">企業を探す</h2>
        
        <div className="app-main__container">
          <CompanySearchWindow className={"left-col"}/>
          <div className="right-col">
              <div className="right-col__header">
                <SortBar />
                <ActionBtn txt="企業を新規掲載" isPlus={true} linkUrl="company-insert"/>
              </div>
              <div className="company-list">
                {this.state.data.map((data:any) => (
                  <CompanyCard class={"item"} name={data.name}　business={data.business} pref={data.pref} registerTime={data.registerTime} img={data.image} />
                ))}
              </div>
            </div>
          </div>
          {/* <Pagenation pageNum={pageNum} setPageNum={setPageNum}/> */}
          <Pagenation totalPage={this.state.totalPage}/>
      </motion.section>
    )
  };
}

export default SearchCompany;
