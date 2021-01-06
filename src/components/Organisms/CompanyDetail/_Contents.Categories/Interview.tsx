import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { companyDetailUser } from "../../../../assets/script";
interface Props {
  thisPage: string;
  params: any;
  userData: any;
  isLoading: boolean;
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
  const [postData, setPostData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    companyDetailUser(props.params.company_id, props.params.student_id).then(
      (getData: any) => {
        console.log(getData.data);
        const postContent = getData.data.user.company_information.filter(
          (data: any) => {
            return data.company_id == props.params.company_id;
          }
        );
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

  const renderContentDOM = () => {
    return (
      <>
        {postData.map((content: any) => {
          return (
            <>
              {content.interviews.length != 0 && (
                <div className="aboutCompany-item">
                  <div className="aboutCompany-item__left-col">
                    <h2 className="heading5">
                      {content.internship.name} (
                      {props.userData.year_of_graduation}
                      卒)
                    </h2>
                    <p className="aboutCompany-item__job">
                      {content.occupational_category.name}応募
                    </p>
                    　　
                  </div>

                  <div className="aboutCompany-item__right-col">
                    {content.interviews.map((interview: any) => {
                      return (
                        <>
                          <section>
                            <h3 className="heading5 mb8">
                              {interview.step}次面接&nbsp; - &nbsp;
                              {interview.interview_date + "月"}
                            </h3>
                            <table className="about-overview">
                              <th>選考結果</th>
                              <td>
                                {interview.results == 1 ? "合格" : "不合格"}
                              </td>
                            </table>
                          </section>
                          {interview.interview_contents.map((text: any) => {
                            return <p className="mt16 mb42">{text.content}</p>;
                          })}
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
        {renderContentDOM()}

        {/* <section>
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
            </section> */}
        {/* <div className="aboutCompany-item">
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
        </div> */}
      </motion.div>
    );
  };
  return <>{props.isLoading && loading && renderDOM()}</>;
};

export default Entry;
