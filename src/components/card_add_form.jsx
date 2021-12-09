import React, { useRef } from 'react';
import ImageFileInput from './image_file_input';
import Button from './button';

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();

  const onSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
    };
    formRef.current.reset();
    onAdd(card);
  };

  return (
    <form ref={formRef}>
      <input ref={nameRef} type="text" name="name" placeholder="name" />
      <input
        ref={companyRef}
        type="text"
        name="company"
        placeholder="company"
      />
      <input ref={titleRef} type="text" name="title" placeholder="title" />
      <input ref={emailRef} type="text" name="email" placeholder="email" />
      <ImageFileInput />
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
