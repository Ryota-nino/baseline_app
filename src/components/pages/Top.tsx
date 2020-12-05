import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Search } from "../Atoms/TextInput";
import { ActionBtn } from "../Atoms/Btn/index";
import { Modal } from "../Organisms/Modal";
import { motion } from "framer-motion";
import { Company, Activity } from "../Molecules/Card/index";
import { News } from "../Molecules/Bar/index";
import { pageTransitionNormal } from "../../assets/script/pageTransition";
import { getHomeData } from "../../assets/script/index";
import axios from "axios";

interface Props {
  setFreeWord: any;
  myData: any;
}

const Top: React.FC<Props> = (props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [homeData, setHomeData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();
  useEffect(() => {
    getHomeData().then((getData: any) => {
      console.log(getData.data);
      if (getData.data) {
        setHomeData(getData.data);
        console.log(getData.data);
        setLoading(true);
      }
    });
  }, []);

  const searchFunc = (word: string) => {
    props.setFreeWord(word);
    history.push(`/search-company`);
  };
  const checkTextLength = (el: string, MAX_LENGTH: number) => {
    if (el.length > MAX_LENGTH) {
      return el.substr(0, MAX_LENGTH) + "...";
    }
    return el;
  };

  const renderDOM = () => {
    return (
      <>
        <motion.section
          className="app-main toppage"
          initial="out"
          animate="in"
          exit="out"
          variants={pageTransitionNormal}
        >
          <h2 className="heading1">新着の企業情報</h2>
          <div className="action-sheet">
            <Search
              width={"316px"}
              isIcon={true}
              placeholder={"企業名で検索"}
              searchFunc={searchFunc}
              types={"top_company_search"}
            />
            <ActionBtn
              type="button"
              txt="企業を新規掲載"
              isPlus={true}
              linkUrl="company-insert/register"
            />
          </div>

          <div className="company-list">
            {homeData.companies.map((data: any) => (
              <Company
                companyId={data.id}
                class={"item"}
                name={data.company_name}
                business={data.business_description}
                pref={data.prefectures}
                registerTime={data.updated_at}
                img={data.logo_image_url}
              />
            ))}
          </div>

          <div className="activity-column">
            <div className="left-col">
              <News />
              <article className="contentBox contentBox--big">
                <h1 className="heading4">新着の活動情報</h1>
                <div className="contentBox__wrap">
                  {homeData.other_activities.map((data: any) => (
                    <Activity
                      id={data.user.id}
                      name={data.user.first_name + " " + data.user.last_name}
                      textLengthCheckFunc={checkTextLength}
                      content={data.my_activities[0].content}
                      updated_at={data.updated_at}
                      isSmall={true}
                    />
                  ))}
                </div>
              </article>
            </div>

            <article className="contentBox contentBox--small">
              <h1 className="heading5" onClick={() => setShowModal(true)}>
                あなたのアクティビティ
              </h1>
              {homeData.my_activities.map((data: any) => (
                <Activity
                  id={props.myData.id}
                  name={data.user.first_name + " " + data.user.last_name}
                  textLengthCheckFunc={checkTextLength}
                  content={data.my_activities[0].content}
                  updated_at={data.updated_at}
                  isSmall={false}
                />
              ))}
              <Link className="page-link" to="/mypage">
                マイページへ
              </Link>
            </article>
          </div>
        </motion.section>
        <Modal
          type="company-level"
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </>
    );
  };

  return <>{loading && renderDOM()}</>;
};

export default Top;
