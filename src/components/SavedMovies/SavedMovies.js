import React from 'react';
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import PreLoader from '../PreLoader/PreLoader';

function SavedMovies({ movies, onCardDelete, isLoading, isErrorPopupOpened, onPopupClose }) {
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
          forSaved={true}
          Cards={movies}
          onCardDelete={onCardDelete}
          isErrorPopupOpened={isErrorPopupOpened}
          onPopupClose={onPopupClose}
          searchData={searchData}
        />
      </div>
    </section>
  );
}

export default SavedMovies;
