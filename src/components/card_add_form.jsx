import React, { memo, useRef, useState } from 'react';
import Button from './button';

const CardAddForm = memo(({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const onFileChange = (file) => {
    console.log(file);
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
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
      <FileInput name={file.fileName} onFileChange={onFileChange} />
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
});

export default CardAddForm;
