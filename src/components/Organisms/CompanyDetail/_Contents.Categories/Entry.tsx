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
          <section className="aboutCompany-Content">
            <h3 className="heading5">
              今までに頑張り抜いたことを教えてください
            </h3>
            <p className="aboutCompany-Content__txt">
              大学時代に洋菓子店でアルバイトについて話した。
              <br />
              クリスマスシーズンにケーキを1人50個予約販売するというノルマがありました。
              <br />
              そこで私はどうすれば確実に目標を達成できるのかを考え、すぐに方法と1日あたりの目標販売個数を考えました。方法としては、レジ担当だったことを活かし、接客時に宣伝したり、折り込みを買い物袋に入れたりしましたというエピソードを話すと以外にも反応が良かった。アルバイト経験が活きるかもしれない。
            </p>
          </section>
        </div>
      </div>
      <div className="aboutCompany-item">
        <div className="aboutCompany-item__left-col">
          <h2 className="heading5">サマーインターンシップ(22卒)</h2>
          <p className="aboutCompany-item__job">エンジニア応募</p>　　
        </div>
        <div className="aboutCompany-item__right-col">
          <section className="aboutCompany-Content">
            <h3 className="heading5">
              今までに頑張り抜いたことを教えてください
            </h3>
            <p className="aboutCompany-Content__txt">
              大学時代に洋菓子店でアルバイトについて話した。
              <br />
              クリスマスシーズンにケーキを1人50個予約販売するというノルマがありました。
              <br />
              そこで私はどうすれば確実に目標を達成できるのかを考え、すぐに方法と1日あたりの目標販売個数を考えました。方法としては、レジ担当だったことを活かし、接客時に宣伝したり、折り込みを買い物袋に入れたりしましたというエピソードを話すと以外にも反応が良かった。アルバイト経験が活きるかもしれない。
            </p>
          </section>
          <section className="aboutCompany-Content">
            <h3 className="heading5">
              今までに頑張り抜いたことを教えてください
            </h3>
            <p className="aboutCompany-Content__txt">
              大学時代に洋菓子店でアルバイトについて話した。
              <br />
              クリスマスシーズンにケーキを1人50個予約販売するというノルマがありました。
              <br />
              そこで私はどうすれば確実に目標を達成できるのかを考え、すぐに方法と1日あたりの目標販売個数を考えました。方法としては、レジ担当だったことを活かし、接客時に宣伝したり、折り込みを買い物袋に入れたりしましたというエピソードを話すと以外にも反応が良かった。アルバイト経験が活きるかもしれない。
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Entry;
