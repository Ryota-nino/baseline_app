import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { SideMenu, Header } from "./Organisms/Header/index";
import { Modal } from "./Organisms/Modal";
import * as Page from "./pages/index";
import { AnimatePresence } from "framer-motion";
import "../assets/styles/App.scss";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  // const [loading, setLoading] = useState<boolean>(false);
  const [myData, setMyData] = useState<any>({});

  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route
              path="/register"
              render={() => <Header needBtn={false} />}
            ></Route>
            <Route
              path="/login"
              render={() => <Header needBtn={false} />}
            ></Route>
            <Route
              path="/company-info/:id/edit"
              render={() => <Header needBtn={true} />}
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
              component={Page.CompanyInfoEditStep}
            ></Route>
            <Route
              path="/company-info/:id/edit/interview"
              component={Page.CompanyInfoEditInterview}
            ></Route>
            <Route
              path="/company-info/:id/edit/entry"
              component={Page.CompanyInfoEditEntry}
            ></Route>

            <main className="main">
              <div className="main__container">
                {/* 会員登録&ログイン */}
                <Route path="/register" component={Page.Register}></Route>
                <Route
                  path="/register-send"
                  component={Page.RegisterSend}
                ></Route>
                <Route
                  path="/register-insert"
                  component={Page.RegisterInsert}
                ></Route>

                <Route path="/login" component={Page.Login}></Route>
                <Route
                  path="/password-forget"
                  component={Page.PasswordForget}
                ></Route>
                <Route
                  path="/password-forget-send"
                  component={Page.PasswordForgetSend}
                ></Route>
                <Route
                  path="/password-setting"
                  component={Page.PasswordSetting}
                ></Route>
                <Route exact path="/" render={() => <Page.Top />}></Route>

                <Route
                  path="/search-company"
                  component={Page.SearchCompany}
                ></Route>
                <Route
                  path="/search-student"
                  component={Page.SearchStudent}
                ></Route>
                <Route
                  path="/user/:id"
                  render={(props) => <Page.UserPage type="user" {...props} />}
                ></Route>
                <Route
                  path="/mypage"
                  render={() => (
                    <Page.MyPage
                      type="mypage"
                      setMyData={setMyData}
                      myData={myData}
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
                  path="/company-detail/contents/:id/:category"
                  render={(props) => <Page.CompanyDetailContents {...props} />}
                ></Route>

                <Route
                  exact
                  path="/company-insert/:id"
                  component={Page.CompanyInsert}
                ></Route>
                <Route
                  exact
                  path="/company-info/:id/"
                  render={() => <Page.CompanyInfo />}
                ></Route>
                <Route
                  path="/profile-edit"
                  component={Page.ProfileEdit}
                ></Route>
                {/* <Route><h2>ページは存在しません</h2></Route> */}

                <Route
                  path="/insert-users"
                  render={() => (
                    <Page.CompanyInsertUsers thisPage="insert-users" />
                  )}
                ></Route>
                <Route
                  path="/company-users"
                  render={() => (
                    <Page.CompanyInsertUsers thisPage="company-users" />
                  )}
                ></Route>

                <Route
                  exact
                  path="/:user/account-setting"
                  render={() => <Page.AccountSetting />}
                ></Route>
                <Route
                  exact
                  path="/:user/account-setting/student-number"
                  render={() => (
                    <Page.AccountSettingContent thisPage="student-number" />
                  )}
                ></Route>
                <Route
                  exact
                  path="/:user/account-setting/password"
                  render={() => (
                    <Page.AccountSettingContent thisPage="password" />
                  )}
                ></Route>
                <Route
                  exact
                  path="/:user/account-setting/mail"
                  render={() => <Page.AccountSettingContent thisPage="mail" />}
                ></Route>
                <Route
                  exact
                  path="/:user/account-setting/account-delete"
                  render={() => (
                    <Page.AccountSettingContent thisPage="account-delete" />
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
        />
        <footer className="footer">
          <p className="copyright">
            <small>©︎ 2020 Baseline Team</small>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
