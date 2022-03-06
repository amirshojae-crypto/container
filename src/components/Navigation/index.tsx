import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navigation: React.FC = () => {
  return (
    <header className="header">
      <div className="item">
        <Link to={'/'}>
          <img src="https://crypto.com/exchange/img/logo.76653258.svg" alt="Crypto logo" width="169" />
        </Link>
      </div>
      <div className="item">
        <div className="seperator" />
        <p>English</p>
      </div>
    </header>
  )
}

export default Navigation;
