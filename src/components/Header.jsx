import React from 'react';
import '../assets/styles/components/Header.scss';

// import logo from '../assets/static/logo-platzi-video-BW2.png';
// import usericon from '../assets/static/user-icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
  <header className='header'>
    <div className='header__container'>
      <div className='header__hero'>
        <div className='header__logo'>
          <img src='' alt='logo' />
        </div>
        <h4>C-717</h4>
      </div>
      
      <div className='header__user'>
        <div className='user__img'>
        <i class="fas fa-user"></i>
        </div>
        <div className='dropdown'>
          <span className='dropdown__user--name'>Administrador demo</span>
          <div className='dropdown__content'>
            <a href=''>Perfil</a>
            <a href=''>Configuracion</a>
            <a href=''>Cerrar Sesión</a>
          </div>
        </div>
      </div>
    </div>

  </header>
);

export default Header;
