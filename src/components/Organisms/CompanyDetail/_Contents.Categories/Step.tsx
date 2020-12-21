import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { companyDetailUser } from "../../../../assets/script";
interface Props {
  thisPage: string;
  params: any;
  userData: any;
  isLoading: boolean;
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
  // useEffect(() => {
  //   console.log(props.params.cateogry_id);
  //   showSelection(props.params.cateogry_id).then((getData: any) => {
  //     console.log(getData);
  //   });
  // }, []);
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
              {content.selections.length != 0 && (
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
                    <ol className="step-list">
                      {content.selections.map((selection: any) => {
                        return (
                          <li className="step-item">
                            <p className="step-item__time">
                              {selection.interview_date}月
                            </p>
                            <div className="step-item__circle"></div>
                            <div className="step-item__wrap">
                              <p className="step-item__ttl">
                                {selection.title}
                              </p>
                              <p className="step-item__txt">
                                {selection.content}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ol>
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
        <p className="companyContentsWindow__update">2020.09.18更新</p>
        {loading && renderContentDOM()}
        {/* <div className="aboutCompany-item">
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
        </div> */}
        {/* <div className="aboutCompany-item">
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
        </div> */}
      </motion.div>
    );
  };

  return <>{props.isLoading && loading && renderDOM()}</>;
};

export default Step;
