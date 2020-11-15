import React from "react";
import { motion } from "framer-motion";

interface Props {
  thisPage: string;
}

const Entry: React.FC<Props> = (props) => {
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

  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <p className="companyContentsWindow__update">2020.09.18更新</p>
      <div className="aboutCompany-item">
        <div className="aboutCompany-item__left-col">
          <h2 className="heading5">本選考 (22卒)</h2>
          <p className="aboutCompany-item__job">エンジニア応募</p>　　
        </div>

        <div className="aboutCompany-item__right-col">
          <div className="aboutCompany-Content">
            <section>
              <h3 className="heading5">1次面接</h3>
              <table className="about-overview">
                <th>選考結果</th>
                <td>合格</td>
              </table>
            </section>
            <section>
              <h3 className="heading5">面接内容</h3>
              <p className="aboutCompany-Content__txt">
                受付を済ませ、会議室に遠され、面接がスタート。その後、事業説明などの会社説明があり、最後に質疑応答があった。全部で1時間くらい　【質問内容】志望動機、学チカ、長所や短所、失敗、挫折経験など、そこからどう立ち直って成長したのかといったことを重点的に聞かれた。
              </p>
            </section>
          </div>
          <div className="aboutCompany-Content">
            <section>
              <h3 className="heading5">2次面接</h3>
              <table className="about-overview">
                <th>選考結果</th>
                <td>合格</td>
              </table>
            </section>
            <section>
              <h3 className="heading5">面接内容</h3>
              <p className="aboutCompany-Content__txt">
                受付を済ませ、会議室に遠され、面接がスタート。その後、事業説明などの会社説明があり、最後に質疑応答があった。全部で1時間くらい　【質問内容】志望動機、学チカ、長所や短所、失敗、挫折経験など、そこからどう立ち直って成長したのかといったことを重点的に聞かれた。
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className="aboutCompany-item">
        <div className="aboutCompany-item__left-col">
          <h2 className="heading5">サマーインターンシップ(22卒)</h2>
          <p className="aboutCompany-item__job">エンジニア応募</p>　　
        </div>
        <div className="aboutCompany-item__right-col">
          <div className="aboutCompany-Content">
            <section>
              <h3 className="heading5">1次面接</h3>
              <table className="about-overview">
                <th>選考結果</th>
                <td>合格</td>
              </table>
            </section>
            <section>
              <h3 className="heading5">面接内容</h3>
              <p className="aboutCompany-Content__txt">
                受付を済ませ、会議室に遠され、面接がスタート。その後、事業説明などの会社説明があり、最後に質疑応答があった。全部で1時間くらい　【質問内容】志望動機、学チカ、長所や短所、失敗、挫折経験など、そこからどう立ち直って成長したのかといったことを重点的に聞かれた。
              </p>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Entry;
