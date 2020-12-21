import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { companyDetailUser, indexJob } from "../../../../assets/script";

interface Props {
  thisPage: string;
  params: any;
  userData: any;
  isLoading: boolean;
  match?: any;
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
  const [content, setContent] = useState<any>();
  const [jobs, setJobs] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [postData, setPostData] = useState<any>();
  useEffect(() => {
    companyDetailUser(props.params.company_id, props.params.student_id).then(
      (getData: any) => {
        console.log(getData.data);
        const postContent = getData.data.user.company_information.filter(
          (data: any) => {
            return data.company_id == props.params.company_id;
          }
        );
        console.log(postContent);
        setPostData(postContent);
        setLoading(true);
      }
    );
  }, []);

  const timeTextConversion = (time: string) => {
    const dateTime: string = String(time).slice(0, 10);
    const timeText: string = dateTime.replace(/-/g, ".");
    const texts: {
      dateTime: string;
      timeText: string;
    } = {
      dateTime,
      timeText,
    };
    return texts;
  };

  const graduationYearConversion = (year: string) => {
    const text = year;
    return text.substr(2, 2);
  };

  const renderContentDOM = () => {
    return (
      <>
        {postData.map((content: any) => {
          return (
            <>
              {content.entries.length != 0 && (
                <div className="aboutCompany-item">
                  <div className="aboutCompany-item__left-col">
                    <h2 className="heading5">
                      {content.internship.name} (
                      {graduationYearConversion(
                        props.userData.year_of_graduation
                      )}
                      卒)
                    </h2>
                    <p className="aboutCompany-item__job">
                      {content.occupational_category.name}応募
                    </p>
                  </div>

                  <div className="aboutCompany-item__right-col">
                    {content.entries.map((entry: any) => {
                      return (
                        <>
                          <section className="aboutCompany-Content">
                            <h3 className="heading5">{entry.title}</h3>
                            <p className="aboutCompany-Content__txt">
                              {entry.content}
                            </p>
                          </section>
                        </>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          );
        })}
      </>
    );
  };

  const renderDOM = () => {
    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
      >
        <p className="companyContentsWindow__update">
          {
            timeTextConversion(postData[postData.length - 1].updated_at)
              .timeText
          }
          &nbsp;更新
        </p>

        {loading && renderContentDOM()}

        {/* <div className="aboutCompany-item">
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
    </div> */}
      </motion.div>
    );
  };

  return <>{props.isLoading && loading && renderDOM()}</>;
};

export default Entry;
