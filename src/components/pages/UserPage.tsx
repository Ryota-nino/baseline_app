import React, {useState, useEffect} from 'react';
import {GearIcon} from '../../assets/images/index';
import {Link, useLocation} from 'react-router-dom';
import {UserDetailWindow} from '../user';
import {MyActivityCountWindow} from '../activity';
import {UserComment} from '../user';
import {Modal} from '../modal';
import { motion } from 'framer-motion';
import axios from "axios";
interface Props {
  type: 'user' | 'mypage';
  match?: any;
}

const UserPage:React.FC<Props> = props => {
  const location = useLocation();
  const companyId = location.pathname.split("/")[2];

  const [showModal, setShowModal] = useState<boolean>(false);
  let isUsrPage = props.type === 'user';
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2
      }
    },
    out: {
      x: -20,
      opacity: 0,
    },
  }

  const [activity, setActivity] = useState<any>();
  const [account, setAccount] = useState<any>();
  useEffect( ()=> {

    const url = "./activity.json";
    axios.get(url).then(res => {
      const output = res.data;
      setActivity(
        output,
      );
    })

    const url2 = "./database/account.json";
    axios.get(url2).then(res => {
      const output = res.data;
      setAccount(
        output,
      );
    })

  }, []);
  
  return (
    <>
      <motion.section className={`app-main ${isUsrPage ? 'userpage' : 'mypage'} single`} initial="out" animate="in" exit="out" variants={pageTransition}>
        <h2 className="heading1">{isUsrPage ? `${account ? account[props.match.params.id - 1].last_name + ' ' + account[props.match.params.id - 1].first_name : ''}さんのページ` : 'マイページ' }</h2>

        <UserDetailWindow account={isUsrPage ?  account : account} account_id={isUsrPage ? 0 : 0}/>

        {!isUsrPage && <Link to="/01/account-setting" className="icon-txt icon-txt--normal"><img src={GearIcon} alt="" />アカウント設定へ</Link>}
        <MyActivityCountWindow />
        <div className="activity-list">
          {(() => {
            if (activity) {
              return activity.map((data:any) => (
                <UserComment year={data.year} txt={data.txt} updateTime={data.updateTime} isArrow={true} type={props.type}　clickFunc={setShowModal}/>
              ))
            } else {
              console.log("bbb")
            }
          })()}
        </div>
      </motion.section>
      <Modal type="activity-edit" showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
}

export default UserPage;
