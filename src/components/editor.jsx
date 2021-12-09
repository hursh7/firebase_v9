import React from 'react';
import Card from './card';

const Editor = ({ cards }) => (
  <section>
    <h1>Card Editor</h1>
    {cards.map((card) => (
      <Card card={card} />
    ))}
  </section>
);

export default Editor;
