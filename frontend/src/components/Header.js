import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Item 1 
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
            Item 2 - right menu 
        </Link>
      </div>
    </div>
  );
};

export default Header;