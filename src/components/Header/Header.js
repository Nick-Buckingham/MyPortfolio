import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Nicolas Buckingham</h1>
      <Navigation />
    </header>
  );
};

export default Header;