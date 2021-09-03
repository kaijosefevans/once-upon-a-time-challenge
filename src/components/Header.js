import React from 'react';
import Logo from '../logo.svg';
import MenuButton from '../assets/images/icons8-menu.svg';

function Header() {
    return (
    <div className='header'>
      <nav>
        <a href='/#'><img src={Logo} alt='Sparta Plaesent' id='header-logo'/></a>
        <ul className='header-buttons'>
          <li id='header-phone-number'>212.555.5555</li>
          <li><button id='login-button' onClick={() => {/* some functionality to login */}}>Login</button></li>
          <a href='/#'><li><img src={MenuButton} alt='Menu' id='menu-button'/></li></a>
        </ul>
      </nav>
    </div>
  );
}

export default Header;