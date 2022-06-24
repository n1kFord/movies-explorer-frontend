import React from 'react';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import PreLoader from '../PreLoader/PreLoader';

function Movies({
  movies,
  savedMovies,
  onCardSave,
  onCardDelete,
  isLoading,
  isErrorPopupOpened,
  onPopupClose,
}) {
  const [searchData, setSearchData] = React.useState({ movie: '', isActive: true });

  function onSearchSubmit(data) {
    localStorage.setItem('ltsh-n', JSON.stringify(data));
    if (movies.length !== 0) {
      setSearchData(data);
    } else {
      setTimeout(() => {
        setSearchData(data);
      }, 1000);
    }
  }

  return (
    <section className="movies">
      <div className="section__wrapper section__wrapper_type_movies">
        <SearchForm onSubmit={onSearchSubmit} forSaved={false} />
        <PreLoader isLoading={isLoading} />
        <MoviesCardList
          forSaved={false}
          Cards={movies}
          onCardSave={onCardSave}
          onCardDelete={onCardDelete}
          savedCards={savedMovies}
          isErrorPopupOpened={isErrorPopupOpened}
          onPopupClose={onPopupClose}
          searchData={searchData}
        />
      </div>
    </section>
  );
}

export default Movies;
