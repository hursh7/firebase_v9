import React from 'react';
import CardAddForm from './card_add_form';
import CardEditForm from './card_edit_form';

const Editor = ({ cards, addCard, createOrUpdateCard, deleteCard }) => (
  <section>
    <h1>Card Editor</h1>
    {Object.keys(cards).map((key) => (
      <CardEditForm
        key={key}
        card={cards[key]}
        updateCard={createOrUpdateCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAddForm onAdd={addCard} />
  </section>
);

export default Editor;
