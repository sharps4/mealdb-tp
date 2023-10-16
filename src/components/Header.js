import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png'

function Header() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const handleDisconnect = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  };
  return (
    <header>
      <div className='banner'>
        <Link to='/'>
              <img src={Logo} alt='logo'/>
        </Link>
        {isLoggedIn ? (
          <Link to="/" onClick={handleDisconnect}>Se déconnecter</Link>
        ) : (
          <Link to="/Login">Se connecter</Link>
        )}
      </div>
    </header>
  );
}

export default Header;