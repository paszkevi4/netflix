import React, { useState, useEffect } from 'react';
import s from './nav.module.sass';
import netflixLogo from '../../img/netflix.png';
import profileLogo from '../../img/profile.jpg';
import { AddAlert, ArrowDropDown, CardGiftcard, Search } from '@material-ui/icons';

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
    <header className={black && s.headerBlack}>
      <nav>
        <img
          className={s.header_nav__logo}
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="NETFLIX"
        />
        <span className={s.nav_box}>
          <a href="/home">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">Latest</a>
          <a href="#">My List</a>
        </span>
      </nav>
      <div className={s.settings}>
        <div className={s.header_settings__buttons}>
          <Search />
          <span>KIDS</span>
          <CardGiftcard />
          <AddAlert />
        </div>

        <img className={s.header_settings__logo} src={profileLogo} alt="avatar" />
        <ArrowDropDown className={s.header_settings__button} />
      </div>
    </header>
  );
}

export default Navbar;
