import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { showSelection } from "../../../../assets/script";
interface Props {
  thisPage: string;
  params: any;
}

const Step: React.FC<Props> = (props) => {
  const pageTransition = {
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
  useEffect(() => {
    console.log(props.params.cateogry_id);
    showSelection(props.params.cateogry_id).then((getData: any) => {
      console.log(getData);
    });
  }, []);

  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <p className="companyContentsWindow__update">2020.09.18更新</p>
      <div className="aboutCompany-item">
        <div className="aboutCompany-item__left-col">
          <h2 className="heading5">本選考 (22卒)</h2>
          <p className="aboutCompany-item__job">エンジニア応募</p>　　
        </div>
        <div className="aboutCompany-item__right-col">
          <ol className="step-list">
            <li className="step-item">
              <p className="step-item__time">12月</p>
              <div className="step-item__circle"></div>
              <div className="step-item__wrap">
                <p className="step-item__ttl">エントリーシート</p>
                <p className="step-item__txt"></p>
              </div>
            </li>
            <li className="step-item">
              <p className="step-item__time">12月</p>
              <div className="step-item__circle"></div>
              <div className="step-item__wrap">
                <p className="step-item__ttl">WEBテスト</p>
                <p className="step-item__txt">
                  内容は普通のSPIでした。やるべきことは参考書を購入して１冊やればそれで十分なレベルだと思います。
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div className="aboutCompany-item">
        <div className="aboutCompany-item__left-col">
          <h2 className="heading5">サマーインターンシップ(22卒)</h2>
          <p className="aboutCompany-item__job">エンジニア応募</p>　　
        </div>
        <div className="aboutCompany-item__right-col">
          <ol className="step-list">
            <li className="step-item">
              <p className="step-item__time">12月</p>
              <div className="step-item__circle"></div>
              <div className="step-item__wrap">
                <p className="step-item__ttl">エントリーシート</p>
                <p className="step-item__txt"></p>
              </div>
            </li>
            <li className="step-item">
              <p className="step-item__time">12月</p>
              <div className="step-item__circle"></div>
              <div className="step-item__wrap">
                <p className="step-item__ttl">WEBテスト</p>
                <p className="step-item__txt">
                  内容は普通のSPIでした。やるべきことは参考書を購入して１冊やればそれで十分なレベルだと思います。
                </p>
              </div>
            </li>
            <li className="step-item">
              <p className="step-item__time">12月</p>
              <div className="step-item__circle"></div>
              <div className="step-item__wrap">
                <p className="step-item__ttl">WEBテスト</p>
                <p className="step-item__txt">
                  内容は普通のSPIでした。やるべきことは参考書を購入して１冊やればそれで十分なレベルだと思います。
                </p>
                内容は普通のSPIでした。やるべきことは参考書を購入して１冊やればそれで十分なレベルだと思います。
              </div>
            </li>
            <li className="step-item">
              <p className="step-item__time">12月</p>
              <div className="step-item__circle"></div>
              <div className="step-item__wrap">
                <p className="step-item__ttl">WEBテスト</p>
                <p className="step-item__txt">
                  内容は普通のSPIでした。やるべきことは参考書を購入して１冊やればそれで十分なレベルだと思います。
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </motion.div>
  );
};

export default Step;
