import React from 'react';
import ImageFileInput from './image_file_input';
import Button from './button';

const CardEditForm = ({ card }) => {
  const { name, company, title, email } = card;
  const onSubmit = () => {};
  return (
    <form>
      <input type="text" name="name" defaultValue={name} />
      <input type="text" name="company" defaultValue={company} />
      <input type="text" name="title" defaultValue={title} />
      <input type="text" name="email" defaultValue={email} />
      <ImageFileInput />
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
