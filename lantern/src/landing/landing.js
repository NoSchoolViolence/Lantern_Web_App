import React from 'react';
import AbtLantern from './components/abtLantern';
import AbtNSV from './components/abtNSV';
import ROUTES from '../routes';

// Brings in seperate components for 'about lantern' and 'about NSV blurbs' - David
// Added in search button on home page - David

const Landing = () => {
  return (
    <div className='landing-page-div'>
      <div><a href={ROUTES.SEARCH}>SEARCH</a></div>
      <AbtLantern/>
      <AbtNSV/>
    </div>
  )
};

export default Landing;