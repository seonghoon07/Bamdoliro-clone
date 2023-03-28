/* eslint-disable */
import React,{useState} from 'react';
import './App.css';
import './component/Textbamdol/index.js'
import {SectionsContainer, Section} from 'react-fullpage';
import Textbamdol from './component/Textbamdol/index.js';

import Introduce from './component/Introduce-bamdol/Introduce';
import Header from './component/Header';

function App() {
  
  let options = {
    anchors:['sectionOne', 'sectionTwo'],
    delay: 700
  };

  return (
    <div>
      <Header />
    <SectionsContainer {...options}>
          <div className='web'>
            <Textbamdol />
          </div>
          <div>
            <div className='secondPage'>
              <Introduce /> 
            </div>
        </div>
      </SectionsContainer>
    </div>
    
    
  );

}



export default App;