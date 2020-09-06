import React, { useState, useEffect } from 'react';
import s from './nav.module.sass';
import netflixLogo from '../../img/netflix.png';
import profileLogo from '../../img/profile.jpg';

function Navbar() {
  const [black, setBlack] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1) {
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
    <nav className={black && s.navBlack}>
      <img
        className={s.nav__main_logo}
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="NETFLIX"
      />
      <img className={s.nav__profile_logo} src={profileLogo} alt="" />
    </nav>
  );
}

export default Navbar;
