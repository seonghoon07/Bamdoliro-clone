import React,{useState} from 'react';
import './App.css';
import './component/Textbamdol/index.js'
import {SectionsContainer, Section} from 'react-fullpage';
import Textbamdol from './component/Textbamdol/index.js';

import Introduce from './component/Introduce-bamdol/Introduce';
import Header from './component/Header';
import ThirdPage from './component/ThirdPage';

function App() {
  
  let options = {
    anchors:['sectionOne', 'sectionTwo','sectionThree'],
    delay: 700
  };

  return (
    <>
      <Header />
    <SectionsContainer {...options}>
          <div className='web'>
            <Textbamdol />
          </div>
          <div className='secondPage'>
            <Introduce /> 
          </div>
          <div className='thirdPage'>
            <ThirdPage />
          </div>
      </SectionsContainer>
    </>
  );

}



export default App;