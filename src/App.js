/* eslint-disable */
import img1 from './img/부소마.jpeg';
import bamdol from './img/bamdol.svg';
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Textbamdol from './components/TextBamdol';

function App() {
  
  return (
    <div className='web'>
        <div className='white-bar'>
          <div className='information-bar'>
            <img src={bamdol} className='bamdol'></img>
            <Menubar />
          </div>
        </div>
        <Textbamdol />
      
        <div className='introduce-bamdol'>
          <div className='draw-bamdol'>
            <h3 className='team-bamdol'>밤돌이로 팀</h3>
            <h1 className='real-bamdol'>세상 끝 <br/>'밤돌이로'를 그리다</h1>
            <div className='longtext-bamdol'>
              <h2>
              우리 삶의 실타래는<br/>오직 우리만 풀 수 있어요.<br/>우리는 피하지 않고 담담하게 마주해요.<br/><br/>
              우리는 동료들과<br/>일상의 행복을 나누며<br/>추억을 쌓아요.<br/><br/>
              우리를 알리기 위한 가장 탁월한 방법은<br/>사람들이 우리의 창작물 안에서<br/>우리를 찾게 하는거예요.
              </h2>
          </div>
          </div>
        </div>
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