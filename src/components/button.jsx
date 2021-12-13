import React, { memo } from 'react';

const Button = memo(({ name, onClick }) => (
  <button onClick={onClick}>{name}</button>
));
export default Button;
