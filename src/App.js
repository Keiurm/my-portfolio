import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';

// コンポーネントのインポート（これから作成します）
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';


// テーマ設定
const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#ff0080',
    dark: '#333',
    light: '#f8f9fa',
    text: '#333',
    background: '#ffffff'
  },
  fonts: {
    main: "'Roboto', sans-serif",
    heading: "'Montserrat', sans-serif"
  }
};

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Router>
          <Header />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Main>
          <Footer />
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
