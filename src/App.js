/* eslint-disable */
import bamdol from './img/bamdol.svg';
import React,{useState} from 'react';
import './App.css';
import './component/Textbamdol/index.js'
import {SectionsContainer, Section} from 'react-fullpage';
import Textbamdol from './component/Textbamdol/index.js';
import Menubar from './component/Menubar/Menubar';
import Introduce from './component/Introduce-bamdol/Introduce';

function App() {
  
  let options = {
    anchors:['sectionOne', 'sectionTwo'], // the anchors for each sections
  };

  return (
    <SectionsContainer {...options}>
      <section>
      <div className='web'>
          <div className='white-bar'>
            <div className='information-bar'>
              <img src={bamdol} className='bamdol'></img>
              <Menubar />
            </div>
          </div>
        <Textbamdol />
      </div>
      </section>
      <section>
        <div className='secondPage'>
          <Introduce /> 
        </div>
      </section>
    
    </SectionsContainer>
    
  );

}



export default App;