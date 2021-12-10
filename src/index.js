import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import styled from 'styled-components';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import { firebaseApp } from './service/firebase';
import ImageFileInput from './components/image_file_input';

const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);
// component의 확장성(재사용성)을 위해 컴포넌트 자체를 전달 하기 보다, 다른 props를 추후에 쓸 수 있도록 지정.

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} styled={styled} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById('root'),
);
