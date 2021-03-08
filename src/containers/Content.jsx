import React from 'react';
import '../assets/styles/components/Content.scss';
import Montajes from '../components/Montajes';
import Desmontajes from '../components/Desmontajes';
import Activos from '../components/Activos';
import Vencimientos from '../components/Vencimientos';

const Content = () => (
  <section className='content'>
    <Montajes />
    <Desmontajes />
    <Activos />
    <Vencimientos />
  </section>

);

export default Content;
