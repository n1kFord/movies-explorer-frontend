import React from 'react';
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
  const fakeDataForSaved = [
    {
      name: 'В погоне за Бенкси',
      duration: '27 минут',
      imageSrc: 'https://s2.afisha.ru/mediastorage/68/ee/d70a786941c9488f96a90683ee68.jpg',
    },
    {
      name: 'В погоне за Бенкси',
      duration: '27 минут',
      imageSrc:
        'https://cdnn21.img.ria.ru/images/154997/75/1549977596_0:153:615:499_600x0_80_0_0_905a1491b1cc0f603330ce2a16f53569.jpg',
    },
    {
      name: 'В погоне за Бенкси',
      duration: '27 минут',
      imageSrc:
        'https://bit.ua/wp-content/uploads/2018/08/Paris-Banksy-4-gty-hb-180625_hpMain_16x9_1600-1200x630.jpg',
    },
    {
      name: 'В погоне за Бенкси',
      duration: '27 минут',
      imageSrc:
        'https://cdnn21.img.ria.ru/images/154997/75/1549977596_0:153:615:499_600x0_80_0_0_905a1491b1cc0f603330ce2a16f53569.jpg',
    },
    {
      name: 'В погоне за Бенкси',
      duration: '27 минут',
      imageSrc:
        'https://bit.ua/wp-content/uploads/2018/08/Paris-Banksy-4-gty-hb-180625_hpMain_16x9_1600-1200x630.jpg',
    },
  ];

  return (
    <section className="movies">
      <div className="section__wrapper section__wrapper_type_movies">
        <SearchForm />
        <MoviesCardList forSaved={true} Cards={fakeDataForSaved} />
      </div>
    </section>
  );
}

export default SavedMovies;
