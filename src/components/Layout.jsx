import React from 'react';
import Header from './Header';
import '../assets/styles/components/Header.scss';
import Navigation from './Navigation';
import '../assets/styles/components/Navigation.scss';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className='app'>
    <Header />
    <Navigation />
    { children }
    <Footer />
  </div>
);

export default Layout;
