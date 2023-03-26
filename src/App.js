/* eslint-disable */
import img1 from './img/부소마.jpeg';
import bamdol from './img/bamdol.svg';
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Textbamdol from './components/TextBamdol';

function App() {


  
  return (
    <div>
        <div className='white-bar'>
          <div className='information-bar'>
            <img src={bamdol} className='bamdol'></img>
            <Menubar />
          </div>
        </div>
        <Textbamdol />
    </div>
    
  );

  function Menubar(){
    return (
      <>
        <nav className='menu-bar'>
          <button className='button-tag'>
            <a>팀 소개</a>
          </button>
          <button className='button-tag'>
            <a>팀 연혁</a>
          </button>
          <button className='button-tag'>
            <a>팀원 소개</a>
          </button>
          <button className='button-tag'>
            <a>팀 문화</a>
          </button>
          <button className='button-tag'>
            <a>프로젝트</a>
          </button>
        </nav>
      </>
    );
  }
}



export default App;