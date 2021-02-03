import React from 'react';
import '../assets/styles/components/Navigation.scss';

const Navigation = () => (
  <nav className='navigation'>
    <ul className='navigation__container'>
      <li className='navigation__item--usuario'>
        Usuario
      </li>
      <li className='navigation__item--Inicio'>
        <a href='./'>Inicio</a>
      </li>
      <div className='navigationEdit__container'>
        <li className='navigation__item--Editar'>
          <a href='#editar'>Editar</a>
          <ul id='editar'>
            <li className='navigation__item--Montaje'>
              <a href='./'>Montaje</a>
            </li>
            <li className='navigation__item--Desmontaje'>
              <a href='./'>Desmontaje</a>
            </li>
          </ul>
        </li>
      </div>
      <li className='navigation__item--Elementos'>
        <a href='./'>Elementos</a>
        <ul>
          <li className='navigation__item--Activos'>
            <a href='./'>Activos</a>
          </li>
          <li className='navigation__item--Vencimientos'>
            <a href='./'>Vencimientos</a>
          </li>
        </ul>
      </li>
      <li className='navigation__item--Contactos'>
        <a href='./'>Contactos</a>
      </li>
      <li className='navigation__item--Configuración'>
        <a href='./'>Configuración</a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
