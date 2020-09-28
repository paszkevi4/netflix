import React from 'react';
import s from './playButtons.module.sass';
import { PlayArrow, InfoOutlined } from '@material-ui/icons';

const Buttons = () => {
  return (
    <div className={s.linkButtons}>
      <button>
        {<PlayArrow fontSize="large" />}
        <span>Play</span>
      </button>
      <button>
        {<InfoOutlined fontSize="large" />}
        <span>More Info</span>
      </button>
    </div>
  );
};

export default Buttons;
