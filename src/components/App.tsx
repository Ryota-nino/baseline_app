import React, {useState} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Header, HeaderSide} from './common/index';
import {Modal} from './modal';
import * as Page from './pages/index';
import { AnimatePresence } from 'framer-motion';

import '../assets/styles/App.scss';

const App = () => {

  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="App">
        <div className="container">
          <Router>
            <Switch>
              <Route path="/company-info/edit" component={HeaderSide}></Route>
              <Route path="/" render={ () => <Header setShowModal={setShowModal} /> }></Route>
            </Switch>

            <AnimatePresence exitBeforeEnter />
              <Switch>

                <Route path="/company-info/edit/step" render={ () => <Page.CompanyInfoEdit thisPage="step" /> }></Route>
                <Route path="/company-info/edit/interview" render={ () => <Page.CompanyInfoEdit thisPage="interview" /> }></Route>
                <Route path="/company-info/edit/entry" render={ () => <Page.CompanyInfoEdit thisPage="entry" /> }></Route>

                <main className="main">
                  <div className="main__container">
                    <Route exact path="/" component={Page.Top}></Route>
                    <Route path="/search-company" component={Page.SearchCompany}></Route>
                    <Route path="/search-student" component={Page.SearchStudent}></Route>
                    <Route path="/mypage" component={Page.UserPage}></Route>

                    <Route path="/company-detail/:id/about" render={ () => <Page.CompanyDetail thisPage="about" /> }></Route>
                    <Route path="/company-detail/:id/step" render={ () => <Page.CompanyDetail thisPage="step" /> }></Route>
                    <Route path="/company-detail/:id/entry" render={ () => <Page.CompanyDetail thisPage="entry" /> }></Route>
                    <Route path="/company-detail/:id/interview" render={ () => <Page.CompanyDetail thisPage="interview" /> }></Route>

                    <Route path="/company-detail/contents/:id/step" render={ () => <Page.CompanyDetailContents thisPage="step"/> }></Route>
                    <Route path="/company-detail/contents/:id/entry" render={ () => <Page.CompanyDetailContents thisPage="entry"/> }></Route>
                    <Route path="/company-detail/contents/:id/interview" render={ () => <Page.CompanyDetailContents thisPage="interview"/> }></Route>
                    <Route path="/company-insert" component={Page.CompanyInsert}></Route>
                    <Route exact path="/company-info" render={ () => <Page.CompanyInfo />} ></Route>
                    <Route path="/profile-edit" component={Page.ProfileEdit}></Route>
                    {/* <Route><h2>ページは存在しません</h2></Route> */}
                  </div>
                </main>
              </Switch>
            <AnimatePresence />
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