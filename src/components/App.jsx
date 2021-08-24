import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Main from './Main.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import '../style/index.scss';

const App = () => {
  return (
    <>
      <LanguageSwitcher />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
