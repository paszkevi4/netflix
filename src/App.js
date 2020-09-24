import React from 'react';
import './App.sass';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
