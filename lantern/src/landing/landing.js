import React from 'react';
import Login from './components/login';
import AbtLantern from './components/abtLantern';
import AbtNSV from './components/abtNSV';

const Landing = () => {
  return (
    <div className='landing-page-div'>
      <Login/>
      <AbtLantern/>
      <AbtNSV/>
    </div>
  )
};

export default Landing;