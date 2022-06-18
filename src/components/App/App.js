import './App.css';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { currentUserContext } from '../../contexts/CurrentUserContext';
import * as auth from '../../utils/server/auth';
import { mainApi } from '../../utils/server/MainApi';
import { moviesApi } from '../../utils/server/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PreLoggedRoute from '../PreLoggedRoute/PreLoggedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
    id: '',
  });

  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  /* api errors_____*/
  const [registerErrorMessage, setRegisterErrorMessage] = React.useState('');
  const [loginErrorMessage, setLoginErrorMessage] = React.useState('');
  const [profileErrorMessage, setProfileErrorMessage] = React.useState('');
  /*__________________*/

  const [isLoading, setIsLoading] = React.useState(false); // основной стейт лоадера
  const [isMoviesLoading, setIsMoviesLoading] = React.useState(false);
  const [isSavedMoviesLoading, setIsSavedMoviesLoading] = React.useState(false);

  const [isErrorPopupOpened, setIsErrorPopupOpened] = React.useState(false); // оверлей с ошибкой при неудачном сейве или удалении фильма

  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      let token = localStorage.getItem('jwt');
      auth
        .checkToken(token)
        .then((info) => {
          if (info.data.email) {
            setCurrentUser({
              ...currentUser,
              name: info.data.name,
              email: info.data.email,
              id: info.data._id,
            });
            setLoggedIn(true);
          } else {
            localStorage.clear('jwt');
          }
        })
        .catch((err) => {
          localStorage.clear('jwt');
          console.log(err);
        });
    }
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      setIsMoviesLoading(true);
      let token = localStorage.getItem('jwt');
      Promise.all([mainApi.getInfoAboutUser(token), moviesApi.getInitialMovies()])
        .then(([userData, moviesList]) => {
          setCurrentUser({
            ...currentUser,
            name: userData.data.name,
            email: userData.data.email,
            id: userData.data._id,
          });
          setMovies(moviesList);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsMoviesLoading(false);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    setIsSavedMoviesLoading(true);
    let token = localStorage.getItem('jwt');
    mainApi.getSavedMovies(token)
      .then((savedMoviesList) => {
        let userSavedMovies = savedMoviesList.data.filter(
          (movie) => movie.owner === currentUser.id
        );
        setSavedMovies(userSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsSavedMoviesLoading(false);
      });
  }, [currentUser.id]); // подгрузка сохраненных фильмов кокретного юзера

  function clearRequestErrors() {
    setRegisterErrorMessage('');
    setLoginErrorMessage('');
    setProfileErrorMessage('');
  }

  function handleAuthRegister(info) {
    setIsLoading(true);
    auth
      .register(info.name, info.email, info.password)
      .then((res) => {
        if (res.email) {
          navigate('/signin');
        } else {
          setRegisterErrorMessage(res.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setRegisterErrorMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleAuthLogin(info) {
    setIsLoading(true);
    auth
      .authorize(info.email, info.password)
      .then((res) => {
        if (!res.message && localStorage.getItem('jwt')) {
          let token = localStorage.getItem('jwt');
          auth
            .checkToken(token)
            .then((info) => {
              setCurrentUser({ ...currentUser, email: info.data.email });
              setLoggedIn(true);
            })
            .catch((err) => {
              console.log(err);
              setLoginErrorMessage(err.message);
            })
            .finally(() => {
              setIsLoading(false);
            });
        } else {
          setLoginErrorMessage(res.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginErrorMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateUserInfo(newUserInfo) {
    setIsLoading(true);
    let token = localStorage.getItem('jwt');
    mainApi
      .setInfoAboutUser(newUserInfo, token)
      .then((res) => {
        setCurrentUser({
          ...currentUser,
          name: res.data.name,
          email: res.data.email,
        });
        setProfileErrorMessage('');
      })
      .catch((err) => {
        console.log(err);
        setProfileErrorMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function onUserLeave() {
    setLoggedIn(false);
    localStorage.clear('jwt');
  }

  function handleCardSave(card) {
    setIsMoviesLoading(true);
    let token = localStorage.getItem('jwt');
    mainApi
      .addNewMovie(card, token)
      .then((newCard) => {
        setSavedMovies([newCard.data, ...savedMovies]);
      })
      .catch((err) => {
        setIsErrorPopupOpened(true);
        console.log(err);
      })
      .finally(() => {
        setIsMoviesLoading(false);
      });
  }

  function handleCardDelete(id) {
    setIsSavedMoviesLoading(true);
    let token = localStorage.getItem('jwt');
    mainApi
      .deleteMovie(id, token)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => c._id !== id));
      })
      .catch((err) => {
        setIsErrorPopupOpened(true);
        console.log(err);
      })
      .finally(() => {
        setIsSavedMoviesLoading(false);
      });
  }

  function closeErrorPopup() {
    setIsErrorPopupOpened(false);
  }

  return (
    <div className="App">
      <currentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PreLoggedRoute
                loggedIn={loggedIn}
                element={
                  <>
                    <Header isLoggedIn={loggedIn} />
                    <Main />
                    <Footer />
                  </>
                }
              />
            }
          />
          <Route
            exact
            path="/movies"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                element={
                  <>
                    <Header isLoggedIn={loggedIn} />
                    <Movies
                      movies={movies}
                      savedMovies={savedMovies}
                      onCardSave={handleCardSave}
                      isLoading={isMoviesLoading}
                      isErrorPopupOpened={isErrorPopupOpened}
                      onPopupClose={closeErrorPopup}
                    />
                    <Footer />
                  </>
                }
              />
            }
          />
          <Route
            exact
            path="/saved-movies"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                element={
                  <>
                    <Header isLoggedIn={loggedIn} />
                    <SavedMovies
                      movies={savedMovies}
                      onCardDelete={handleCardDelete}
                      isLoading={isSavedMoviesLoading}
                      isErrorPopupOpened={isErrorPopupOpened}
                      onPopupClose={closeErrorPopup}
                    />
                    <Footer />
                  </>
                }
              />
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                element={
                  <>
                    <Header isLoggedIn={loggedIn} />
                    <Profile
                      name={currentUser.name}
                      email={currentUser.email}
                      isLoading={isLoading}
                      onInfoUpdate={handleUpdateUserInfo}
                      onUserLeave={onUserLeave}
                      errorMessage={profileErrorMessage}
                      onClear={clearRequestErrors}
                    />
                  </>
                }
              />
            }
          />
          <Route
            path="/signin"
            element={
              <PreLoggedRoute
                loggedIn={loggedIn}
                element={
                  <Login
                    onAuthLogin={handleAuthLogin}
                    errorMessage={loginErrorMessage}
                    onClear={clearRequestErrors}
                    isLoading={isLoading}
                  />
                }
              />
            }
          />
          <Route
            path="/signup"
            element={
              <PreLoggedRoute
                loggedIn={loggedIn}
                element={
                  <Register
                    onAuthRegister={handleAuthRegister}
                    errorMessage={registerErrorMessage}
                    onClear={clearRequestErrors}
                    isLoading={isLoading}
                  />
                }
              />
            }
          />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </currentUserContext.Provider>
    </div>
  );
}

export default App;
