import React from 'react';
import styled from 'styled-components';

const S = {
  Div: styled.div`
    width: 500px;
    height: 500px;
    background-color: #333;
  `,
};

const DEFAULT_IMAGES = '/images/default_profile.svg';
const Card = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;
  const url = fileURL || DEFAULT_IMAGES;
  return (
    <li>
      <S.Div>test</S.Div>
      <img src={url} alt="profile" />
    </li>
  );
};

export default Card;
