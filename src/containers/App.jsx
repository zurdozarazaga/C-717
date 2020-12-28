import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrousel from '../components/Carrousel';
import CarrouselItem from '../components/CarrouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useinitialState';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const useinitialState = useInitialState(API);
  return useinitialState.length === 0 ? <h1>Loanding...</h1> : (
    <div className='App'>
      <Header />
      <Search />
      {useinitialState.mylist.length > 0 &&
        <Categories title='Mi lista'>
          <Carrousel>
            <CarrouselItem />
          </Carrousel>
        </Categories>
      }

      <Categories title='Tendencias'>
        <Carrousel>
          {useinitialState.trends.map(item =>
            <CarrouselItem key={item.id} {...item} />
          )}
         
        </Carrousel>
      </Categories>

      <Categories title='Originales'>
        <Carrousel>
          <CarrouselItem />
        </Carrousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
