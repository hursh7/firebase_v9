import React from 'react';
import styled from 'styled-components';

const S = {
  Div: styled.div`
    width: 500px;
    height: 500px;
    background-color: #333;
  `,
  Img: styled.img`
    width: 5rem;
    height: 5rem;
  `,
};

const DEFAULT_IMAGES = '/images/default_profile.svg';
const Card = ({ card }) => {
  const { name, company, title, email, message, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGES;
  return (
    <li>
      <S.Img src={url} alt="profile" />
      <div>
        <h1>{name}</h1>
        <p>{company}</p>
        <p>{title}</p>
        <p>{email}</p>
        <p>{message}</p>
      </div>
    </li>
  );
};

export default Card;
