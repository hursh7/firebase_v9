import React, { useRef } from 'react';
import Button from './button';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();

  const { name, company, title, email } = card;

  const onSubmit = () => {
    deleteCard(card);
  };

  const onFileChange = (file) => {
    updateCard({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event) => {
    if (event.currenTarget === null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  return (
    <form ref={formRef}>
      <input
        ref={nameRef}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        ref={companyRef}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <input
        ref={titleRef}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        ref={emailRef}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <FileInput name={name} onFileChange={onFileChange} />
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
