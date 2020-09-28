import React, {useEffect} from 'react';
import {useLocation, HashRouter as Router} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Logo} from '../../assets/images/index';
import {PrimaryBtn} from '../../components/btn/index'; 
import {MyAvatar} from '../../components/user/index';

interface Props {
  setShowModal: any;
}

const Header:React.FC<Props> = props => {
    const location = useLocation();
    
    useEffect(()=> {
      isCurrentPage();
    });
    
    const isCurrentPage = () => {
      const gNavs = document.querySelectorAll('.g-navi__item');
      gNavs.forEach(li => {
        li.classList.remove('current');
      });
      switch(location.pathname) {
        case '/':
          gNavs[0].classList.add('current');
          console.log(gNavs)
          break;
        case '/search-company':
          gNavs[1].classList.add('current');
          break;
        case '/search-student':
          gNavs[2].classList.add('current');
          break;
        case '/mypage':
          gNavs[3].classList.add('current');
          break;
      }
    }
    return(
        <header className="header">
          <div className="header__wrap">
              <h1 className="logo">
                <Link to="/"><img src={Logo} alt="" /></Link>
              </h1>
              <ul className="g-navi">
                  <li className="g-navi__item current"><Link to="/">ホーム</Link></li>
                  <li className="g-navi__item"><Link to="/search-company">企業を探す</Link></li>
                  <li className="g-navi__item"><Link to="/search-student">学生の就活を見る</Link></li>
                  <li className="g-navi__item"><Link to="/mypage">マイページ</Link></li>
              </ul>
            <PrimaryBtn setShowModal={props.setShowModal}/>
          </div>
          <MyAvatar ml="" isArrow={true}/>
        </header>
    );
};

export default Header;