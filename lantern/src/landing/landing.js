import React from 'react';
import AbtLantern from './components/abtLantern';
import AbtNSV from './components/abtNSV';
import ROUTES from '../routes';

// Brings in seperate components for 'about lantern' and 'about NSV blurbs' - David
// Added in search button on home page - David

const Landing = () => {
  return (
    <div className='landing-page-div'>
      <AbtLantern/>
      {/* <AbtNSV/> */}
      <div><a href={ROUTES.SEARCH}><button type="add">Begin Your Search</button></a></div>
    </div>
  )
};

export default Landing;