import React from 'react';
import ReactDOM, { render } from 'react-dom';
import MyHeader from './header';
import MyBanner from './banner';  
import Cards from './cards';
import Message from './message';
import Myfooter from './footer';
import './style.css';
 
ReactDOM.render(
  <MyHeader />, document.querySelector('.myheader'),
)
ReactDOM.render(
  <MyBanner />,document.querySelector('.banner')
)
ReactDOM.render(
  <Cards />,document.querySelector('.cards')
)
ReactDOM.render(
  <Message />, document.querySelector('.message')
)
ReactDOM.render(
  <Myfooter />
  ,document.querySelector('.myfooter')
)
