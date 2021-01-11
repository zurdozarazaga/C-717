import React from 'react';
import '../assets/styles/components/Navigation.scss';

const Navigation = () => (
  <nav className='navigation'>
    <div className='navigation__container'>
      <div className='navigation__item--usuario'>
        <span>Inicio</span>
      </div>
      <div className='navigation__item--Inicio'>
        <span>Inicio</span>
      </div>
      <div className='navigation__item--Editar'>
        <span>Editar</span>
      </div>
      <div className='navigation__item--Montaje'>
        <span>Montaje</span>
      </div>
      <div className='navigation__item--Desmontaje'>
        <span>Desmontaje</span>
      </div>
      <div className='navigation__item--Elementos'>
        <span>Elementos</span>
      </div>
      <div className='navigation__item--Activos'>
        <span>Activos</span>
      </div>
      <div className='navigation__item--Vencimientos'>
        <span>Vencimientos</span>
      </div>
      <div className='navigation__item--Contactos'>
        <span>Contactos</span>
      </div>
      <div className='navigation__item--Configuración'>
        <span>Configuración</span>
      </div>
    </div>
  </nav>
);

export default Navigation;
