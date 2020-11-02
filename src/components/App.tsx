import React, {useState} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Header, HeaderSide} from './common/index';
import {Modal, Popup} from './modal';
import * as Page from './pages/index';
import { AnimatePresence, } from 'framer-motion';
import '../assets/styles/App.scss';

const App = () => {

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="App">
        <div className="container">
          <Router>
            <Switch>
              <Route path="/register" component={Page.Register}></Route>
              <Route path="/company-info/:id/edit" component={HeaderSide}></Route>
              <Route path="/" render={ () =>  <Header setShowModal={setShowModal} /> }></Route>
            </Switch>

            <AnimatePresence exitBeforeEnter />
              <Switch>
                <Route path="/company-info/:id/edit/step" component={Page.CompanyInfoEditStep}></Route>
                <Route path="/company-info/:id/edit/interview" component={Page.CompanyInfoEditInterview}></Route>
                <Route path="/company-info/:id/edit/entry" component={Page.CompanyInfoEditEntry}></Route>

                <main className="main">
                  <div className="main__container">

                    <Route exact path="/" render={ () => <Page.Top/>}></Route>

                    <Route path="/search-company" component={Page.SearchCompany}></Route>
                    <Route path="/search-student" component={Page.SearchStudent}></Route>
                    <Route path="/user/:id" render={ (props) => <Page.UserPage type="user" {...props} />}></Route>
                    <Route path="/mypage" render={ () => <Page.UserPage type="mypage" />}></Route>

                    <Route exact path="/company-detail/:id/:category" render={ (props) => <Page.CompanyDetail {...props} /> }></Route>

                    <Route exact path="/company-detail/contents/:id/:category" render={ (props) => <Page.CompanyDetailContents {...props} /> }></Route>

                    <Route exact path="/company-insert/:id" component={Page.CompanyInsert}></Route>
                    <Route exact path="/company-info/:id/" render={ () => <Page.CompanyInfo />} ></Route>
                    <Route path="/profile-edit" component={Page.ProfileEdit}></Route>
                    {/* <Route><h2>ページは存在しません</h2></Route> */}

                    <Route path="/insert-users" render={ ()=> <Page.CompanyInsertUsers thisPage="insert-users" /> }></Route>
                    <Route path="/company-users" render={ ()=> <Page.CompanyInsertUsers thisPage="company-users" /> }></Route>

                    <Route exact path="/:user/account-setting" render={ ()=> <Page.AccountSetting /> }></Route>
                    <Route exact path="/:user/account-setting/student-number" render={ ()=> <Page.AccountSettingContent thisPage="student-number" /> }></Route>
                    <Route exact path="/:user/account-setting/password" render={ ()=> <Page.AccountSettingContent thisPage="password" /> }></Route>
                    <Route exact path="/:user/account-setting/mail" render={ ()=> <Page.AccountSettingContent thisPage="mail" /> }></Route>
                    <Route exact path="/:user/account-setting/account-delete" render={ ()=> <Page.AccountSettingContent thisPage="account-delete" /> }></Route>
                  </div>
                </main>
              </Switch>
            <AnimatePresence />

            {/* <Popup type="activityError" /> */}
            
          </Router>
          
          <Modal type="activity-post" showModal={showModal} setShowModal={setShowModal}/>
        </div>
        <footer className="footer">
          <p className="copyright"><small>©︎ 2020 Hiroki Ogura</small></p>
        </footer>
      
    </div>
  );
}

export default App;
