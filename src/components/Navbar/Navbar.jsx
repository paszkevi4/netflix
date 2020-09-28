import React, { useState, useEffect } from 'react';
import s from './nav.module.sass';
import profileLogo from '../../img/profile.jpg';
import { Notifications, ArrowDropDown, CardGiftcard, Search } from '@material-ui/icons';

function Navbar() {
  const [black, setBlack] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setBlack(true);
      } else {
        setBlack(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`${s.header} ${black && s.header_black}`}>
      <nav>
        <img
          className={s.header__nav_logo}
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="NETFLIX"
        />
        <span className={s.nav__box}>
          <button href="#">Home</button>
          <button href="#">TV Shows</button>
          <button href="#">Movies</button>
          <button href="#">Latest</button>
          <button href="#">My List</button>
        </span>
      </nav>
      <div className={s.header__settings}>
        <div className={s.header__settings_buttons}>
          <Search className={s.button_search} />
          <span>KIDS</span>
          <CardGiftcard className={s.button_gift} />
          <Notifications className={s.button_nitification} fontSize="large" />
        </div>

        <img className={s.header__settings_logo} src={profileLogo} alt="avatar" />
        <ArrowDropDown className={s.header__settings_button} />
      </div>
    </div>
  );
}

export default Navbar;
