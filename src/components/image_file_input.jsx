import React, { memo, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const loadingSpin = keyframes` 
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }`;

const S = {
  Input: styled.input`
    display: none;
  `,
  Loading: styled.div`
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    border: 3px solid lightgrey;
    border-top: 3px solid lightpink;
    ${(loadingSpin) =>
      loadingSpin.active && `animation: ${loadingSpin} 2s linear infinite;`}
  `,
};
const ImageFileInput = memo(({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(null);
  const inputRef = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
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
      {false && <button onClick={onButtonClick}>{name || 'No file'}</button>}
      {true && <S.Loading></S.Loading>}
    </div>
  );
});

export default ImageFileInput;
