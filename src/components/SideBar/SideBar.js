import React from 'react';
import './SideBar.css';
import sidebarCloseIcon from '../../images/sidebar__container__close-icon.svg';
import { Link, NavLink } from 'react-router-dom';

function SideBar({ isOpen, handleClose }) {
  const sidebarClassName = `sidebar ${isOpen ? 'sidebar_opened' : ''}`;
  const sidebarContainerClassName = `sidebar__container ${
    isOpen ? 'sidebar__container_opened' : ''
  }`;

  React.useEffect(() => {
    function close(e) {
      if (e.keyCode === 27) handleClose();
    }
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [isOpen]); // закрытие оверлея по esc

  return (
    <div className={sidebarClassName}>
      <div className="sidebar__overlay" onClick={handleClose} />
      <div className={sidebarContainerClassName}>
        <img
          src={sidebarCloseIcon}
          alt="закрыть"
          className="sidebar__container__close-icon"
          onClick={handleClose}
        />
        <div className="sidebar__main-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `sidebar__link ${isActive ? 'sidebar__link_type_active' : ''}`
            }
            onClick={handleClose}
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `sidebar__link ${isActive ? 'sidebar__link_type_active' : ''}`
            }
            onClick={handleClose}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `sidebar__link ${isActive ? 'sidebar__link_type_active' : ''}`
            }
            onClick={handleClose}
          >
            Сохраненные фильмы
          </NavLink>
        </div>
        <Link
          to="/profile"
          className="sidebar__link sidebar__link_type_account"
          onClick={handleClose}
        >
          Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
