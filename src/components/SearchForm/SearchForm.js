import React from 'react';
import './SearchForm.css';
import searchFormLogoPath from '../../images/search__form__logo.svg';
import Switch from '../Switch/Switch';

function SearchForm() {
  const [searchInfo, setSearchInfo] = React.useState({ movie: '' });
  const [isSwitchActive, setIsSwitchActive] = React.useState(true);

  function handleChange(e) {
    setSearchInfo({
      ...searchInfo,
      [e.target.name]: e.target.value,
    });
  }

  function handleToggle() {
    setIsSwitchActive(!isSwitchActive);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(searchInfo, isSwitchActive);
    setSearchInfo({ ...searchInfo, movie: '' });
  }

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
              required
            />
            <button type="submit" className="search__form__button" />
          </div>
          <div className="search__form__short-films">
            <Switch isActive={isSwitchActive} handleToggle={handleToggle} />
            <p className="search__form__text">Короткометражки</p>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default SearchForm;
