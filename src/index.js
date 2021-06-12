import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App'
import PopupState from './context/popup/popupState';


const application = (
  <PopupState>
    <App/>
  </PopupState>
)

ReactDOM.render(
  application,
  document.getElementById('root')
);
