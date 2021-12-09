import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from './header';
import Editor from './editor';
import Preview from './preview';

const Maker = ({ authService }) => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'JUN',
      company: 'Kakao',
      title: 'FrontEnd',
      message: 'Hi',
      theme: 'light',
      fileName: 'file',
      fileURL: null,
    },
    {
      id: '2',
      name: 'JUN',
      company: 'Kakao',
      title: 'FrontEnd',
      message: 'Hi',
      theme: 'dark',
      fileName: 'file',
      fileURL: null,
    },
    {
      id: '3',
      name: 'JUN',
      company: 'Kakao',
      title: 'FrontEnd',
      message: 'Hi',
      theme: 'colorful',
      fileName: 'file',
      fileURL: null,
    },
  ]);

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
      <div className="container">
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
    </section>
  );
};

export default Maker;
