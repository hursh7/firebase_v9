import React from 'react';
import CardAddForm from './card_add_form';
import CardEditForm from './card_edit_form';

const Editor = ({
  FileInput,
  cards,
  addCard,
  createOrUpdateCard,
  deleteCard,
}) => (
  <section>
    <h1>Card Editor</h1>
    {Object.keys(cards).map((key) => (
      <CardEditForm
        key={key}
        FileInput={FileInput}
        card={cards[key]}
        updateCard={createOrUpdateCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAddForm FileInput={FileInput} onAdd={addCard} />
  </section>
);

export default Editor;
