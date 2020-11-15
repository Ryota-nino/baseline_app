import React from "react";

import { CompanySearch } from "../Organisms/Window";
import { Sort } from "../Atoms/Input";
import { Pagenation } from "../Organisms/Header/index";
import { ActionBtn } from "../Atoms/Btn/index";
import { motion } from "framer-motion";
import { Company } from "../Molecules/Card/index";
import axios from "axios";

class SearchCompany extends React.Component<{}, any> {
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
        duration: 0.2,
      },
    },
    out: {
      x: -20,
      opacity: 0,
    },
  };
  renderLength = 5; // １ページあたりのデータ件数
  page = 1;

  componentDidMount() {
    const url = "./database/companies.json";
    axios.get(url).then((res) => {
      this.setState({
        data: res.data,
        companiesLength: res.data.length,
        totalPage: Math.ceil(res.data.length / this.renderLength),
      });
    });
  }

  render() {
    return (
      <motion.section
        className="app-main searchCompany"
        initial="out"
        animate="in"
        exit="out"
        variants={this.pageTransition}
      >
        <h2 className="heading1">企業を探す</h2>

        <div className="app-main__container">
          <CompanySearch className={"left-col"} />
          <div className="right-col">
            <div className="right-col__header">
              <Sort />
              <ActionBtn
                type="button"
                txt="企業を新規掲載"
                isPlus={true}
                linkUrl="company-insert/register"
              />
            </div>
            <div className="company-list">
              {this.state.data.map((data: any) => (
                <Company
                  companyId={data.id}
                  class={"item"}
                  name={data.company_name}
                  business={data.business}
                  pref={data.pref}
                  registerTime={data.registerTime}
                  img={data.logo}
                />
              ))}
            </div>
          </div>
        </div>
        {/* <Pagenation pageNum={pageNum} setPageNum={setPageNum}/> */}
        <Pagenation totalPage={this.state.totalPage} />
      </motion.section>
    );
  }
}

export default SearchCompany;
