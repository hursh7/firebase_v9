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
    },
    {
      id: '2',
      name: 'JUN',
      company: 'Kakao',
      title: 'FrontEnd',
      message: 'Hi',
    },
    {
      id: '3',
      name: 'JUN',
      company: 'Kakao',
      title: 'FrontEnd',
      message: 'Hi',
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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section>
      <Header onLogOut={onLogOut} />
      <div>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
    </section>
  );
};

export default Maker;
