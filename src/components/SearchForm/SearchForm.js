import React from 'react';
import './SearchForm.css';
import searchFormLogoPath from '../../images/search__form__logo.svg';
import Switch from '../Switch/Switch';

function SearchForm({ onSubmit, forSaved }) {
  const [searchInfo, setSearchInfo] = React.useState({ movie: '', isActive: true });

  function handleChange(e) {
    setSearchInfo({
      ...searchInfo,
      [e.target.name]: e.target.value,
    });
  }

  function handleToggle() {
    setSearchInfo({ ...searchInfo, isActive: !searchInfo.isActive });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(searchInfo);
  }

  React.useEffect(() => {
    if (!forSaved && localStorage.getItem('ltsh-n')) {
      let tmp = JSON.parse(localStorage.getItem('ltsh-n'));
      setSearchInfo({ ...searchInfo, movie: tmp.movie, isActive: tmp.isActive });
      return onSubmit(tmp);
    } else if (forSaved && localStorage.getItem('ltsh-s')) {
      let tmp = JSON.parse(localStorage.getItem('ltsh-s'));
      setSearchInfo({ ...searchInfo, movie: tmp.movie, isActive: tmp.isActive });
      return onSubmit(tmp);
    }
  }, []);

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <fieldset className="search__form-set">
          <div className="search__form__container">
            <img src={searchFormLogoPath} alt="логотип поиска" className="search__form__image" />
            <input
              type="text"
              name="movie"
              value={searchInfo.movie}
              className="search__form__input"
              placeholder="Фильм"
              onChange={handleChange}
            />
            <button type="submit" className="search__form__button" />
          </div>
          <div className="search__form__short-films">
            <Switch isActive={searchInfo.isActive} handleToggle={handleToggle} />
            <p className="search__form__text">Короткометражки</p>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default SearchForm;
