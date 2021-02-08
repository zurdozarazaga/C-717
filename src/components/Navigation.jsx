import React, {useState, useEffect} from 'react';
import '../assets/styles/components/Navigation.scss';

function usedropdown(e) {
  const [state, setState] = React.useState();
  if (state === e) {
    setState('visible');
  } else {
    setState('no-visible');

    return [state, setState];
  }
}

const Navigation = () => {
  const [state, setState] = usedropdown('no-visible');
  return (
    <nav className='navigation'>
      <ul className='navigation__container'>
        <li className='navigation__item--usuario'>
          Usuario
        </li>
        <li className='navigation__item--Inicio'>
          <a href='./'>Inicio</a>
        </li>
        <li className='navigation__item--Editar' id='editar'>
          <a href='#editar'>Editar</a>
          <div onClick={ ()=> { 
            setState(state)
          }} className='submenu'>
            <a href='./'>Montaje</a>
            <a href='./'>Desmontaje</a>
          </div>
        </li>
        <li className='navigation__item--Editar' id='editar'>
          <a href='#editar'>Elementos</a>
          <div className='submenu'>
            <a href='./'>Activos</a>
            <a href='./'>Vencimientos</a>
          </div>
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
}
export default Navigation;
