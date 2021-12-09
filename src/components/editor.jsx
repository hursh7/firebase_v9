import React from 'react';
import CardAddForm from './card_add_form';
import CardEditForm from './card_edit_form';

const Editor = ({ cards, addCard }) => (
  <section>
    <h1>Card Editor</h1>
    {cards.map((card) => (
      <CardEditForm key={card.id} card={card} />
    ))}
    <CardAddForm onAdd={addCard} />
  </section>
);

export default Editor;
