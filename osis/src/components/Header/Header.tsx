import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import useMediaQuery from '@mui/material/useMediaQuery';

import './Header.scss';
import logo_main from '../../images/logo/OSIS-logo-white-png.png';
import logo_general from '../../images/logo/OSIS-logo-png.png';

import { ButtonConsultation } from '../ButtonConsultation';

const isActiveClass = ({ isActive }: { isActive: boolean }) => {
  return isActive ? "header__menu-link header__menu-link--active" : "header__menu-link";
}

const isActiveStyle = ({ isActive }: { isActive: boolean }) => {
  return { color: isActive ? '#fff' : '' }
}

export const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false);
  const [isBodyHidden, setIsBodyHidden] = useState(false);

  const handleClickBurger = () => {
    setIsOpenBurger(!isOpenBurger);
    setIsBodyHidden(!isBodyHidden);

    const menuOpen = window.document.querySelector(".header__container--open-burger");

    if (menuOpen) {
      menuOpen.scrollTop = 0;
    }
  }

  useEffect(() => {
    if (isBodyHidden === true) {
      window.document.body.style.overflow = 'hidden';

      return;
    } 

    window.document.body.style.overflow = '';

  }, [isBodyHidden])

  const handleClickLink = () => {
    if (isOpenBurger) {
      setIsOpenBurger(false);
    }

    setIsBodyHidden(false);
  }

  const mobile = useMediaQuery('(max-width: 625px)');

  useEffect(() => {
    if (window.innerWidth > +mobile) {
      setIsOpenBurger(false);
    }
  }, [mobile])

  return (
    <header className={classNames('header', {
      'header--open-burger': isOpenBurger,
    })}>
      <div className={classNames('header__container', {
        'header__container--open-burger': isOpenBurger,
      })}>
        <div className="header__logo-box">
          <img
            src={pathname === '/' || isOpenBurger ? logo_main : logo_general}
            alt="osis logo"
            className="header__logo-img"
          />
        </div>

        <nav className={classNames('header__menu', {
          'header__menu--open': isOpenBurger,
        })}>
          <button
            className={classNames('header__menu-burger', {
              'header__menu-burger--open': isOpenBurger,
              'header__menu-burger--main': pathname === '/',
            })}
            onClick={() => handleClickBurger()}
          />

          <ul
            className={classNames('header__menu-list', {
              'header__menu-list--open': isOpenBurger,
            })}
          >
            <li className={classNames('header__menu-item', {
              'header__menu-item--open-menu-1': isOpenBurger,
            })}>
              <NavLink
                to="/"
                className={isActiveClass}
                style={isActiveStyle}
                onClick={handleClickLink}
              >
                Головна
              </NavLink>
            </li>

            <li className={classNames('header__menu-item', {
              'header__menu-item--open-menu-2': isOpenBurger,
            })}>
              <NavLink
                to="/directions"
                className={isActiveClass}
                onClick={handleClickLink}
              >
                Напрямки
              </NavLink>
            </li>

            <li className={classNames('header__menu-item', {
              'header__menu-item--open-menu-3': isOpenBurger,
            })}>
              <NavLink
                to="/projects"
                className={isActiveClass}
                onClick={handleClickLink}
              >
                Проекти
              </NavLink>
            </li>

            <li className={classNames('header__menu-item', {
              'header__menu-item--open-menu-4': isOpenBurger,
            })}>
              <NavLink
                to="contacts"
                className={isActiveClass}
                onClick={handleClickLink}
              >
                Контакти
              </NavLink>
            </li>

            <li className="header__menu-item header__menu-item--button">
              {isOpenBurger && pathname !== '/contacts' ? (
                <ButtonConsultation 
                  setIsOpenBurger={setIsOpenBurger}
                  setIsBodyHidden={setIsBodyHidden} 
                />
              ) : (
                <button
                  className="header__button button button--open-menu"
                  onClick={() => navigate('contacts')}
                  disabled={pathname === '/contacts' ? true : false}
                >
                  <span className="button__name">Зв’язатися</span>
                  <span className="button__arrow" />
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}