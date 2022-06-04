import React from 'react';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function Movies() {
  const fakeDataForNotSaved = [
    {
      name: 'В погоне за Бенкси',
      duration: '27 минут',
      imageSrc: 'https://theblueprint.ru/upload/16903m/vms/81a095b64e2baefb3c5b3db8452c3d44.jpg',
    },
    {
      name: 'В погоне за Бенкси',
      duration: '27 минут',
      imageSrc:
        'https://beatfilmfestival.ru/media/pages/movies/banksy-most-wanted/2738157077-1600890085/zahodnoy-kadr-2000x869.jpg',
    },
    {
      name: 'В погоне за Бенкси',
      duration: '27 минут',
      imageSrc:
        'https://avatars.mds.yandex.net/get-ott/1531675/2a00000173a565fcbce995019978598333fb/678x380',
    },
    {
      name: 'В погоне за Бенкси',
      duration: '27 минут',
      imageSrc:
        'https://avatars.mds.yandex.net/get-ott/1531675/2a00000173a565fcbce995019978598333fb/678x380',
    },
    {
      name: 'В погоне за Бенкси',
      duration: '27 минут',
      imageSrc: 'https://theblueprint.ru/upload/16903m/vms/81a095b64e2baefb3c5b3db8452c3d44.jpg',
    },
    {
      name: 'В погоне за Бенкси',
      duration: '27 минут',
      imageSrc: 'https://theblueprint.ru/upload/16903m/vms/81a095b64e2baefb3c5b3db8452c3d44.jpg',
    },
    {
      name: 'В погоне за Бенкси',
      duration: '27 минут',
      imageSrc: 'https://theblueprint.ru/upload/16903m/vms/81a095b64e2baefb3c5b3db8452c3d44.jpg',
    },
    {
      name: 'В погоне за Бенкси',
      duration: '27 минут',
      imageSrc:
        'https://beatfilmfestival.ru/media/pages/movies/banksy-most-wanted/2738157077-1600890085/zahodnoy-kadr-2000x869.jpg',
    },
    {
      name: 'В погоне за Бенкси',
      duration: '27 минут',
      imageSrc:
        'https://beatfilmfestival.ru/media/pages/movies/banksy-most-wanted/2738157077-1600890085/zahodnoy-kadr-2000x869.jpg',
    },
    {
      name: 'В погоне за Бенкси',
      duration: '27 минут',
      imageSrc: 'https://theblueprint.ru/upload/16903m/vms/81a095b64e2baefb3c5b3db8452c3d44.jpg',
    },
    {
      name: 'В погоне за Бенкси',
      duration: '27 минут',
      imageSrc:
        'https://beatfilmfestival.ru/media/pages/movies/banksy-most-wanted/2738157077-1600890085/zahodnoy-kadr-2000x869.jpg',
    },
    {
      name: 'В погоне за Бенкси',
      duration: '27 минут',
      imageSrc:
        'https://avatars.mds.yandex.net/get-ott/1531675/2a00000173a565fcbce995019978598333fb/678x380',
    },
  ];

  return (
    <section className="movies">
      <div className="section__wrapper section__wrapper_type_movies">
        <SearchForm />
        <MoviesCardList forSaved={false} Cards={fakeDataForNotSaved} />
      </div>
    </section>
  );
}

export default Movies;
