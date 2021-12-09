import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Maker from './components/maker';
import './app.css';

function App({ authService }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route path="/maker" element={<Maker authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
