import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from './header';
import Editor from './editor';
import Preview from './preview';

const Maker = ({ FileInput, authService }) => {
  const navigate = useNavigate();
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'JUN',
      company: 'Kakao',
      title: 'FrontEnd',
      message: 'Hi',
    },
    2: {
      id: '2',
      name: 'JUN',
      company: 'Kakao',
      title: 'FrontEnd',
      message: 'Hi',
    },
    3: {
      id: '3',
      name: 'JUN',
      company: 'Kakao',
      title: 'FrontEnd',
      message: 'Hi',
    },
  });

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

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section>
      <Header onLogOut={onLogOut} />
      <div>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          createOrUpdateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
    </section>
  );
};

export default Maker;
