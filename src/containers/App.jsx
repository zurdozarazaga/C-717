import React from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Content from '../components/Content';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';


const App = () => {
  return (
    <div className='app'>
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
