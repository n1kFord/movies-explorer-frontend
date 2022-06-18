import React from 'react';
import './PreLoader.css';
import preLoaderIcon from '../../images/loading.png';

function PreLoader({ isLoading }) {
  const preloaderClassName = `preloader ${isLoading ? 'preloader_active' : ''}`;

  return <img src={preLoaderIcon} className={preloaderClassName} alt="загрузка" />;
}

export default PreLoader;
