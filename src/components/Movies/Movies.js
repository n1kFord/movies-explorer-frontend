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
    if (movies.length !== 0) {
      setSearchData(data);
    }
  }

  return (
    <section className="movies">
      <div className="section__wrapper section__wrapper_type_movies">
        <SearchForm onSubmit={onSearchSubmit} />
        <PreLoader isLoading={isLoading} />
        <MoviesCardList
          forSaved={false}
          Cards={movies}
          onCardSave={onCardSave}
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
