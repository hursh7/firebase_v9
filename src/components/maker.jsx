import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Header from './header';

const Maker = ({ authService }) => {
  const navigate = useNavigate();
  const onLogOut = () => {
    authService.logout();
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        if (!user) {
          navigate('/');
        }
      });
  });
  return (
    <section>
      <Header onLogOut={onLogOut} />
    </section>
  );
};

export default Maker;
