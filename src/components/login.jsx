import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Header from './header';

const Login = ({ authService, onLogOut }) => {
  const navigate = useNavigate();
  const goToMaker = (userId) => {
    navigate({
      pathname: '/maker',
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        user && goToMaker(user.uid);
      });
  });

  return (
    <section className="login">
      <Header onLogOut={onLogOut} />
      <ul>
        <li>
          <button onClick={onLogin}>Google</button>
        </li>
        <li>
          <button onClick={onLogin}>Github</button>
        </li>
      </ul>
    </section>
  );
};

export default Login;
