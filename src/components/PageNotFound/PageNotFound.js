import React from 'react';
import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="page-not-found">
      <h2 className="page-not-found__title">404</h2>
      <p className="page-not-found__message">Страница не найдена</p>

      <button type="button" onClick={() => navigate(-1)} className="page-not-found__button">
        Назад
      </button>
    </div>
  );
}

export default PageNotFound;
