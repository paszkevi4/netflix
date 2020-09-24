import React from 'react';
import s from './footer.module.sass';

import { Facebook, Instagram, YouTube } from '@material-ui/icons';

const Footer = () => {
  return (
    <footer>
      <div className={s.footer_socials}>
        <Facebook fontSize="large" /> <Instagram fontSize="large" /> <YouTube className={s.YT} />
      </div>
      <div className={s.footer_main}>
        <div className={s.column}>
          <p className="li">Audio and Subtitles</p>
          <p className="li">Media Center</p>
          <p className="li">Privacy</p>
          <p className="li">Contact Us</p>
        </div>
        <div className={s.column}>
          <p className="li">Audio Description</p>
          <p className="li">Investor Relations</p>
          <p className="li">Legal Notices</p>
        </div>
        <div className={s.column}>
          <p className="li">Help Center</p>
          <p className="li">Jobs</p>
          <p className="li">Cookie Preferences</p>
        </div>
        <div className={s.column}>
          <p className="li">Gift Cards</p>
          <p className="li">Terms of Use</p>
          <p className="li">Corporate Information</p>
        </div>
      </div>
      <div className={s.footer_code}>Service Code</div>
      <div className={s.footer_terms}> © 1997-2020 Netflix, Inc. {' {i-097c51fb946e524ba}'}</div>
    </footer>
  );
};

export default Footer;
