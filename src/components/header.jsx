import React, { memo } from 'react';

const Header = memo(({ onLogOut }) => (
  <div>
    <button onClick={onLogOut}>logout</button>
  </div>
));

export default Header;
