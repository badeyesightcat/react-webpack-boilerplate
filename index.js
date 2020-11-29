/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/main.scss';

const title = 'react with webpack and babel hellokkkk';

ReactDOM.render(
  <div>
    if you dont want the money give me back
    {title}
    i am trying to use another
    <br />
    <button type="button" className={style.button}>click me</button>
  </div>,
  document.getElementById('root'),
);

module.hot.accept();
