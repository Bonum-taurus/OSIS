import { NavLink, useNavigate, useLocation } from 'react-router-dom';

import './Header.scss';
import logo from '../../images/logo/OSIS-logo.svg';

const isActiveClass = ({ isActive }: { isActive: boolean }) => {
  return isActive ? "header__menu-link header__menu-link--active" : "header__menu-link";
} 

export const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  window.console.log(pathname)

  return (
    <header className="header">
      <div className="header__container">
      	<div className="header__logo-box">
          <img 
            src={logo} 
            alt="osis logo" 
            className="header__logo-img" 
          />
        </div>
  
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <NavLink 
                to="/" 
                className={isActiveClass}
              >
                Головна 
              </NavLink>
            </li>
  
            <li className="header__menu-item">
              <NavLink 
                to="/directions" 
                className={isActiveClass}
              >
                Напрямки 
              </NavLink>
            </li>
  
            <li className="header__menu-item">
              <NavLink 
                to="/projects" 
                className={isActiveClass}
              >
                Проекти 
              </NavLink>  
            </li>
  
            <li className="header__menu-item">
              <NavLink 
                to="contacts" 
                className={isActiveClass}
              >
                Контакти 
              </NavLink>
            </li>
  
            <li className="header__menu-item">
              <button 
                className="header__button button"
                onClick={() => navigate('contacts')}
                disabled={pathname === '/contacts' ? true : false}
              >
                <span className="button__name">Зв’язатися</span>
                <span className="button__arrow"/>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}