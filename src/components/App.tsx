import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { SideMenu, Header } from "./Organisms/Header/index";
import { Modal } from "./Organisms/Modal";
import * as Page from "./Pages";
import { AnimatePresence } from "framer-motion";
import "../assets/styles/App.scss";
import { getMyActivity, mypage } from "../assets/script/";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    getMyData();
  }, []);

  const [homeFreeWord, setHomeFreeWord] = useState<string>();
  const [myData, setMyData] = useState<any>();
  const getMyData = () => {
    mypage().then((getData: any) => {
      setMyData({
        ...myData,
        data: getData.data,
        company_information: getData.data.company_information,
      });
      setLoading(true);
    });
  };

  const renderDOM = () => {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route
              path="/register"
              render={() => <Header needBtn={false} />}
            ></Route>
            <Route
              path="/password"
              render={() => <Header needBtn={false} />}
            ></Route>
            <Route
              path="/login"
              render={() => <Header needBtn={false} />}
            ></Route>
            <Route
              path="/company-info/:id/edit"
              render={(props) => <Header needBtn={true} {...props} />}
            ></Route>
            <Route
              path="/"
              render={() => (
                <SideMenu
                  setShowModal={setShowModal}
                  setMyData={setMyData}
                  myData={myData}
                />
              )}
            ></Route>
          </Switch>

          <AnimatePresence exitBeforeEnter />
          <Switch>
            <Route
              path="/company-info/:id/edit/step"
              component={Page.Step}
            ></Route>
            <Route
              path="/company-info/:id/edit/interview"
              component={Page.Interview}
            ></Route>
            <Route
              path="/company-info/:id/edit/entry"
              component={Page.Entry}
            ></Route>

            <main className="main">
              <div className="main__container">
                {/* 会員登録&ログイン */}
                <Route exact path="/register" component={Page.Register}></Route>
                <Route
                  path="/register/send"
                  exact
                  component={Page.RegisterSend}
                ></Route>
                <Route
                  exact
                  path="/register/insert"
                  component={Page.RegisterInsert}
                ></Route>

                <Route exact path="/login" component={Page.Login}></Route>
                <Route
                  exact
                  path="/password/forget"
                  component={Page.TypeMail}
                ></Route>
                <Route
                  exact
                  path="/password/forget-send"
                  component={Page.Send}
                ></Route>
                <Route
                  exact
                  path="/password/setting"
                  component={Page.Setting}
                ></Route>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Page.Top setFreeWord={setHomeFreeWord} myData={myData} />
                  )}
                ></Route>

                <Route
                  path="/search-company"
                  render={() => (
                    <Page.SearchCompany homeFreeWord={homeFreeWord} />
                  )}
                ></Route>
                <Route
                  path="/search-student"
                  component={Page.SearchStudent}
                ></Route>
                <Route
                  path="/user/:id"
                  render={(props) => <Page.UserPage {...props} />}
                ></Route>
                <Route
                  path="/mypage"
                  render={() => (
                    <Page.MyPage
                      getMyData={getMyData}
                      myData={myData}
                      loading={loading}
                    />
                  )}
                ></Route>

                <Route
                  exact
                  path="/company-detail/:id/:category"
                  render={(props) => <Page.CompanyDetail {...props} />}
                ></Route>

                <Route
                  exact
                  path="/company-detail/contents/:cateogry_id/:category/:student_id"
                  render={(props) => <Page.DetailContents {...props} />}
                ></Route>

                <Route
                  exact
                  path="/company-insert/:id"
                  component={Page.CompanyInsert}
                ></Route>
                <Route
                  exact
                  path="/company-info/:id/"
                  render={(props) => <Page.CompanyInfo {...props} />}
                ></Route>
                <Route
                  path="/profile-edit"
                  render={() => <Page.ProfileEdit myData={myData} />}
                ></Route>
                {/* <Route><h2>ページは存在しません</h2></Route> */}

                <Route
                  path="/insert-users"
                  render={(props) => (
                    <Page.InsertUsers thisPage="insert-users" {...props} />
                  )}
                ></Route>
                <Route
                  path="/company-users/:companyId"
                  render={(props) => (
                    <Page.InsertUsers thisPage="company-users" {...props} />
                  )}
                ></Route>

                <Route
                  exact
                  path="/:user/account-setting"
                  render={() => <Page.AccountSetting myData={myData} />}
                ></Route>
                <Route
                  exact
                  path="/:user/account-setting/student-number"
                  render={() => (
                    <Page.SettingForm
                      myData={myData}
                      thisPage="student-number"
                    />
                  )}
                ></Route>
                <Route
                  exact
                  path="/:user/account-setting/password"
                  render={() => (
                    <Page.SettingForm myData={myData} thisPage="password" />
                  )}
                ></Route>
                <Route
                  exact
                  path="/:user/account-setting/mail"
                  render={() => (
                    <Page.SettingForm myData={myData} thisPage="mail" />
                  )}
                ></Route>
                <Route
                  exact
                  path="/:user/account-setting/account-delete"
                  render={() => (
                    <Page.SettingForm
                      myData={myData}
                      thisPage="account-delete"
                    />
                  )}
                ></Route>
              </div>
            </main>
          </Switch>
          <AnimatePresence />

          {/* <Popup type="activityError" /> */}
        </Router>

        <Modal
          type="activity-post"
          showModal={showModal}
          setShowModal={setShowModal}
          getMyData={getMyData}
        />
        <footer className="footer">
          <p className="copyright">
            <small>©︎ 2020 Baseline Team</small>
          </p>
        </footer>
      </div>
    );
  };

  return <div className="App">{loading && renderDOM()}</div>;
};

export default App;
