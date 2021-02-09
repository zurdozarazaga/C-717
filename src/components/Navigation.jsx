import React, { useState } from 'react';
import '../assets/styles/components/Navigation.scss';


const Navigation = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setDropdown(!dropdown);
  };

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
          <a onClick={handleClick} href='#editar'>Editar</a>
          <div className={dropdown ? 'visible': 'no-visible'}>
            <a href='./'>Montaje</a>
            <a href='./'>Desmontaje</a>
          </div>
        </li>
        <li className='navigation__item--Editar' id='editar'>
          <a onClick={handleClick} href='#editar'>Elementos</a>
          <div className={dropdown ? 'visible': 'no-visible'}>
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
