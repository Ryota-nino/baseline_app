import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Secondary } from "../Atoms/TextInput";
import { RoundedBtn } from "../Atoms/Btn";
import { motion } from "framer-motion";

interface Props {
  thisPage: string;
}

const AccountSettingContent: React.FC<Props> = (props) => {
  const history = useHistory();
  const isError = [
    { isEmpty1: false },
    { isEmpty2: false },
    { isEmpty3: false },
  ];
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
            defaultValue="21800098"
          />
          <div className="accountSetting-content__bottom">
            <p>
              <Link to="/:user/account-setting">キャンセル</Link>
            </p>
            <RoundedBtn txt="保存" />
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
            defaultValue="21800098"
            readonly={true}
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
            <RoundedBtn txt="保存" />
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
            defaultValue="ogurahiroki@gmail.com"
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
        variants={pageTransition}
      >
        <button className="btn pageBack-link" onClick={() => history.goBack()}>
          <span className="heading4">設定一覧へ</span>
        </button>
        {renderContent()}
      </motion.section>
    </>
  );
};

export default AccountSettingContent;
