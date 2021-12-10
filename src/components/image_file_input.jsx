import React, { useRef } from 'react';
import styled from 'styled-components';

const S = {
  Input: styled.input`
    display: none;
  `,
};

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    console.log(event.target.files[0]);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div>
      <S.Input
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button onClick={onButtonClick}>{name || 'No file'}</button>
    </div>
  );
};

export default ImageFileInput;
