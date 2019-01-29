import React from 'react';
import AbtLantern from './components/abtLantern';
import AbtNSV from './components/abtNSV';
import ROUTES from '../routes';
import Logo from './assets/landing_pic_1.jpg';

// Brings in seperate components for 'about lantern' and 'about NSV blurbs' - David
// Added in search button on home page - David

const Landing = () => {
  return (
    <div className='landing-page-div'>
      
        <img className="Landing-Image" src={Logo} alt='nsv Logo'></img>
      
      <div className="Landing-Text-Block">
      <AbtLantern/>
      <AbtNSV/>
      <div><a href={ROUTES.SEARCH}><button className="Landing-Button" type="add">Begin Your Search</button></a></div>
      </div>
    </div>
  )
};

export default Landing;