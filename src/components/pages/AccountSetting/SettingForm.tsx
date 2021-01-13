import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Secondary } from "../../Atoms/TextInput";
import { RoundedBtn } from "../../Atoms/Btn";
import { motion } from "framer-motion";
import { pageTransitionNormal } from "../../../assets/script/pageTransition";
import {
  editProfile,
  mypage,
  passwordChange,
  deleteAccount,
} from "../../../assets/script";
interface Props {
  thisPage: string;
  myData: any;
}

const SettingForm: React.FC<Props> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [myData, setMyData] = useState<any>();
  const history = useHistory();
  // const [sendObj, setSendObj] = useState<any>();

  useEffect(() => {
    mypage().then((getData: any) => {
      setMyData({
        data: getData.data,
        company_information: getData.data.company_information,
      });
      console.log(getData);
      console.log(sendObj);
      setIsLoading(true);
    });
  }, []);

  interface sendObj {
    student_number: string;
    annual: number | null;
    first_name: string;
    last_name: string;
    sex: any;
    desired_occupations: number | null;
    year_of_graduation: string;
    icon?: string | undefined | ArrayBuffer | null;
  }
  let sendObj: sendObj = {
    student_number: "",
    annual: null,
    first_name: "",
    last_name: "",
    sex: null,
    desired_occupations: null,
    year_of_graduation: "",
  };

  const changeStudentNum = () => {
    // console.log(sendObj);
    const studentNum = (document.querySelector(
      'input[name="student_number"]'
    ) as HTMLInputElement).value;
    sendObj = {
      ...sendObj,
      student_number: studentNum,
      annual: myData.data.annual,
      first_name: myData.data.first_name,
      last_name: myData.data.last_name,
      sex: myData.data.sex,
      desired_occupations: Number(myData.data.desired_occupations),
      year_of_graduation: String(myData.data.year_of_graduation),
      // icon: myData.data.icon_image_url,
    };
    console.log(sendObj);
    editProfile(myData.data.id, sendObj).then((boolean) => {
      if (boolean) {
        history.push(`/mypage`);
      }
    });
  };

  const changePassword = () => {
    const now_password = (document.querySelector(
      'input[name="now_password"]'
    ) as HTMLInputElement).value;
    const new_password = (document.querySelector(
      'input[name="new_password"]'
    ) as HTMLInputElement).value;
    const new_password_confirm = (document.querySelector(
      'input[name="new_password_confirm"]'
    ) as HTMLInputElement).value;
    if (new_password !== new_password_confirm) {
      alert("新しいパスワードと再入力が一致しません");
      return;
    }
    const sendObj = {
      current_password: now_password,
      new_password: new_password,
      new_password_confirmation: new_password_confirm,
    };
    passwordChange(sendObj).then((boolean) => {
      if (boolean) {
        history.push(`/mypage`);
      }
    });
  };

  // const changeMail = () => {
  //   const mail = (document.querySelector(
  //     'input[name="mail"]'
  //   ) as HTMLInputElement).value;
  //   sendObj = {
  //     student_number: myData.data.student_number,
  //     annual: myData.data.annual,
  //     first_name: myData.data.first_name,
  //     last_name: myData.data.last_name,
  //     sex: myData.data.sex,
  //     desired_occupations: Number(myData.data.desired_occupations),
  //     year_of_graduation: String(myData.data.year_of_graduation),
  //     // icon: myData.data.icon_image_url,
  //   };
  // };

  const isError = [
    { isEmpty1: false },
    { isEmpty2: false },
    { isEmpty3: false },
  ];
  const renderContent = () => {
    if (props.thisPage === "student-number") {
      return (
        <section className="contentBox contentBox--big student-number">
          <h3 className="heading4">学籍番号を変更</h3>
          <Secondary
            name="student_number"
            type="number"
            labelTxt="学籍番号"
            isRequired={true}
            isRequiredTxt={false}
            placeholderTxt=""
            isError={isError}
            isIcon={false}
            defaultValue={myData.data.student_number}
          />
          <div className="accountSetting-content__bottom">
            <p>
              <Link to="/:user/account-setting">キャンセル</Link>
            </p>
            <RoundedBtn txt="保存" Func={changeStudentNum} />
          </div>
        </section>
      );
    } else if (props.thisPage === "password") {
      return (
        <section className="contentBox contentBox--big password">
          <h3 className="heading4">パスワードを変更</h3>
          <Secondary
            name="now_password"
            type="password"
            labelTxt="現在のパスワード"
            isRequired={true}
            isRequiredTxt={false}
            placeholderTxt=""
            isError={isError}
            isIcon={false}
            defaultValue=""
          />
          <Secondary
            name="new_password"
            type="password"
            labelTxt="新しいパスワード"
            isRequired={true}
            isRequiredTxt={false}
            placeholderTxt=""
            isError={isError}
            isIcon={false}
            defaultValue=""
          />
          <Secondary
            name="new_password_confirm"
            type="password"
            labelTxt="パスワードを確認"
            isRequired={true}
            isRequiredTxt={false}
            placeholderTxt=""
            isError={isError}
            isIcon={false}
            defaultValue=""
          />
          <div className="accountSetting-content__bottom">
            <p>
              <Link to="/:user/account-setting">キャンセル</Link>
            </p>
            <RoundedBtn txt="保存" Func={changePassword} />
          </div>
        </section>
      );
    } else if (props.thisPage === "mail") {
      return (
        <section className="contentBox contentBox--big mail">
          <h3 className="heading4">メールアドレスを変更</h3>
          <Secondary
            name="mail"
            type="email"
            labelTxt="メールアドレス"
            isRequired={true}
            isRequiredTxt={false}
            placeholderTxt=""
            isError={isError}
            isIcon={false}
            defaultValue={props.myData.data.email}
          />
          <div className="accountSetting-content__bottom">
            <p>
              <Link to="/:user/account-setting">キャンセル</Link>
            </p>
            <RoundedBtn txt="保存" />
          </div>
        </section>
      );
    }
  };
  return (
    <>
      <motion.section
        className="app-main accountSetting-content"
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransitionNormal}
      >
        <button className="btn pageBack-link" onClick={() => history.goBack()}>
          <span className="heading4">設定一覧へ</span>
        </button>
        {isLoading && renderContent()}
      </motion.section>
    </>
  );
};

export default SettingForm;
