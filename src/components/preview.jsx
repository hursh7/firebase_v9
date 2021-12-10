import React from 'react';
import Card from './card';

const Preview = ({ cards }) => (
  <section>
    <h1>Card Preview</h1>
    <ul>
      {Object.keys(cards).map((key) => (
        <Card key={key} card={cards[key]} />
      ))}
    </ul>
  </section>
);

export default Preview;
