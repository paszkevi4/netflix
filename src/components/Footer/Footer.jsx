import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>FB IG YT</div>
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
      <div> (c) 1997-2020 Netflix, Inc. {'{i-0f4Oecca10ab57db4}'}</div>
    </footer>
  );
};

export default Footer;
