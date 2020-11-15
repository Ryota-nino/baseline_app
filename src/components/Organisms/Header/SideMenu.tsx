import React, { useEffect, useState, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Logo } from "../../../assets/images/index";
import { PrimaryBtn } from "../../Atoms/Btn/index";
import { MyAvatar } from "../../Molecules/Info/index";
import { getMyData, logout } from "../../../assets/script/index";

interface Props {
  setShowModal: any;
  setMyData: any;
  myData: any;
}

const Header: React.FC<Props> = (props) => {
  const location = useLocation();
  useEffect(() => {
    isCurrentPage();
  });

  const history = useHistory();
  const logoutFunc = () => {
    history.push("/login");
  };
  const notLoginFunc = () => {
    history.push("/login");
  };

  useEffect(() => {
    getMyData(notLoginFunc).then((mydata: any) => {
      // 10文字まで表示
      if (mydata.data) {
        // mydata.data.first_name.substr(0, 5) +
        // mydata.data.last_name.substr(0, 5);
        console.log(mydata.data);
        props.setMyData({
          id: mydata.data.id,
          first_name: mydata.data.first_name,
          last_name: mydata.data.last_name,
          student_number: mydata.data.student_number,
          year_of_graduation: mydata.data.year_of_graduation,
          icon_image_path: mydata.data.icon_image_path,
          sex: mydata.data.sex,
          email: mydata.data.email,
          desired_occupations: mydata.data.desired_occupations,
        });
      }
    });

    // loading react検索
    // loadingをfalseからtrue
    // returnをif文で分岐
  }, []);

  const isCurrentPage = () => {
    const gNavs = document.querySelectorAll(".g-navi__item");
    gNavs.forEach((li) => {
      li.classList.remove("current");
    });
    switch (location.pathname) {
      case "/":
        gNavs[0].classList.add("current");
        break;
      case "/search-company":
        gNavs[1].classList.add("current");
        break;
      case "/search-student":
        gNavs[2].classList.add("current");
        break;
      case "/mypage":
        gNavs[3].classList.add("current");
        break;
    }
  };

  const myAvatarMenu = useRef(null);
  let [viewMenu, setViewMenu] = useState(false);
  const toggleUserMenu = () => {
    setViewMenu(!viewMenu);
  };

  return (
    <header className="header">
      <div className="header__wrap">
        <h1 className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </h1>
        <ul className="g-navi">
          <li
            className="g-navi__item current"
            onClick={() => console.log(props.myData)}
          >
            <Link to="/">ホーム</Link>
          </li>
          <li className="g-navi__item">
            <Link to="/search-company">企業を探す</Link>
          </li>
          <li className="g-navi__item">
            <Link to="/search-student">学生の就活を見る</Link>
          </li>
          <li className="g-navi__item">
            <Link to="/mypage">マイページ</Link>
          </li>
        </ul>
        <PrimaryBtn
          type="button"
          txt="活動を追加"
          setShowModal={props.setShowModal}
        />
      </div>
      <MyAvatar
        name={props.myData.first_name + " " + props.myData.last_name}
        student_number={props.myData.student_number}
        ml=""
        isArrow={true}
        clickFunc={toggleUserMenu}
      />

      <div ref={myAvatarMenu} className={`myAvatar-menu ${viewMenu && "view"}`}>
        <ul className="myAvatar-menu__wrap">
          <li className="myAvatar-menu__item">
            <Link to="/:user/account-setting">設定</Link>
          </li>
          <li
            className="myAvatar-menu__item cAttention"
            onClick={logout.bind(null, logoutFunc)}
          >
            ログアウト
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
