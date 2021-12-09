import { signInWithEmailAndPassword } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Login = ({ authService }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name == 'email') {
      setEmail(value);
    } else if (name == 'password') {
      setPassword(value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = authService.createUserWithEmailAndPassword(email, password);
      } else {
        data = signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

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
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? 'Create Account' : 'Login'} />
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? 'Login' : 'Create Account'}
      </span>
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
