import React from 'react';
import './App.sass';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
