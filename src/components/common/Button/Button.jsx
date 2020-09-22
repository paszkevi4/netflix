import React from 'react';
import s from './button.module.sass';

const Button = (props) => {
  return <div className={s.button_main}>{props.element || '+'}</div>;
};

export default Button;
