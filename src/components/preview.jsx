import React from 'react';
import Card from './card';

const Preview = ({ cards }) => (
  <section>
    <h1>Card Preview</h1>
    <ul>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </ul>
  </section>
);

export default Preview;
