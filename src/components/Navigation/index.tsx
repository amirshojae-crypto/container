import React from 'react'
import { Link } from 'react-router-dom';
import './index.css';

const Navigation: React.FC = () => {
  return (
    <header className="header">
      <div className="item">
        <img src="https://crypto.com/exchange/img/logo.76653258.svg" alt="Crypto logo" width="169" />
        <Link to="/order-book" className='link'>Order Book</Link>
      </div>
      <div className="item">
        <div className="seperator" />
        <p>English</p>
      </div>
    </header>
  )
}

export default Navigation;
