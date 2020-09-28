import React from 'react';
import s from './button.module.sass';

const Button = ({ element, small }) => {
  const style = {
    width: '50px',
    height: '50px',
  };
  return (
    <div style={small ? style : {}} className={s.button}>
      {element || '+'}
    </div>
  );
};

export default Button;
