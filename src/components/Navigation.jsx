import React from 'react';
import '../assets/styles/components/Navigation.scss';

const Navigation = () => (
  <nav className='navigation'>
    <ul className='navigation__container'>
      <li className='navigation__item--usuario'>
        Usuario
      </li>
      <li className='navigation__item--Inicio'>
        Inicio
      </li>
      <li className='navigation__item--Editar'>
        Editar
        <ul>
          <li className='navigation__item--Montaje'>
            Montaje
          </li>
          <li className='navigation__item--Desmontaje'>
            Desmontaje
          </li>
        </ul>
      </li>
      <li className='navigation__item--Elementos'>
        Elementos
      </li>
      <li className='navigation__item--Activos'>
        Activos
      </li>
      <li className='navigation__item--Vencimientos'>
        Vencimientos
      </li>
      <li className='navigation__item--Contactos'>
        Contactos
      </li>
      <li className='navigation__item--Configuración'>
        Configuración
      </li>
    </ul>
  </nav>
);

export default Navigation;
