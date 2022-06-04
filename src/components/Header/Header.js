import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import headerLogoPath from '../../images/logo.svg';
import headerAuthLogoPath from '../../images/header__auth__logo.svg';
import SideBar from '../SideBar/SideBar';

function Header({ isLoggedIn }) {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);

  function handleOpenSideBar() {
    setIsSideBarOpen(true);
  }

  function handleCloseSideBar() {
    setIsSideBarOpen(false);
  }

  return (
    <header className="header">
      <img src={headerLogoPath} alt="логотип шапки" className="header__logo" />
      <div className="header__auth">
        {isLoggedIn ? (
          <>
            <div className="header__desktop">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `header__auth__movies ${isActive ? 'header__auth__movies_type_active' : ''}`
                }
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                className={({ isActive }) =>
                  `header__auth__movies ${isActive ? 'header__auth__movies_type_active' : ''}`
                }
              >
                Сохраненные фильмы
              </NavLink>
              <Link to="/profile" className="header__auth__profile">
                Аккаунт
              </Link>
            </div>
            <div className="header__mobile">
              <img
                src={headerAuthLogoPath}
                alt="меню"
                className="header__auth__logo"
                onClick={handleOpenSideBar}
              />
              <SideBar isOpen={isSideBarOpen} handleClose={handleCloseSideBar} />
            </div>
          </>
        ) : (
          <>
            <Link to="/signup" className="header__auth__reg">
              Регистрация
            </Link>
            <Link to="/signin" className="header__auth__log">
              Войти
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
