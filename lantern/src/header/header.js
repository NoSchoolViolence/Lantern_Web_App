import React from 'react';
import ROUTES from '../routes';
import Logo from './assets/nsv.png';

// Header to contain nsv logo along with Lantern title - David

const Header = () => {
  return (
    <header>
      <img src={Logo} alt='nsv Logo'></img>
      <h1 className='headerText'><a href={ROUTES.LANDING} className='headerLink'>The Lantern</a></h1>
      <img src={Logo} alt='nsv Logo'></img>
    </header>
  )
}

export default Header;