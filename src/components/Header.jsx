import React from 'react';
import '../assets/styles/components/Header.scss';

// import logo from '../assets/static/logo-platzi-video-BW2.png';
// import usericon from '../assets/static/user-icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
  <header className="header pb-4 pt-4">
    <div className="container">  
      <div className="row">
        <div className="col-6">
        Control de Inventario
        </div>
        <div className="col-6">
          <div className="container ">
          Usuario
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown user user-menu"> sign In </a>
              </li>
            </ul>
          </div>
            
          </div>
        </div>
      </div>
    </div> 
  </header>
);

export default Header;
