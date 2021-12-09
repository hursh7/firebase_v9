import React from 'react';

const Header = ({ onLogOut }) => (
  <div>
    <button onClick={onLogOut}>logout</button>
  </div>
);

export default Header;
