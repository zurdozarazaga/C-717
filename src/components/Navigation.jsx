import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Navigation.scss';

const Navigation = () => {
  const [dropdownEdit, setDropdownEdit] = useState(false);
  const [dropdownElement, setDropdownElement] = useState(false);

  const handleClickEdit = () => {
    setDropdownEdit(!dropdownEdit);
  };

  const handleClickElement = () => {
    setDropdownElement(!dropdownElement);
  };

  return (
    <nav className='navigation'>
      <ul className='navigation__container'>
        <li className='navigation__item--usuario'>
          <Link to='/Usuario'>
            Usuario
          </Link>
        </li>
        <li className='navigation__item--Inicio'>
          <Link to='/Home'>
            Inicio
          </Link>
        </li>
        <li className='navigation__item--Editar' id='editar'>
          <a onClick={handleClickEdit} href='#editar'>Editar</a>
          <div className={dropdownEdit ? 'visible' : 'no-visible'}>
            <Link to='/Montajes'>
              Montajes
            </Link>
            <Link to='/Desmontajes'>
              Desmontajes
            </Link>
          </div>
        </li>
        <li className='navigation__item--Editar' id='editar'>
          <a onClick={handleClickElement} href='#editar'>Elementos</a>
          <div className={dropdownElement ? 'visible' : 'no-visible'}>
            <Link to='/Activos'>
              Activos
            </Link>
            <Link to='/Vencimientos'>
              Vencimientos
            </Link>
          </div>
        </li>
        <li className='navigation__item--Contactos'>
          <Link to='/Contactos'>
            Contactos
          </Link>
        </li>
        <li className='navigation__item--Configuración'>
          <Link to='/Configuracion'>
          Configuración
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
