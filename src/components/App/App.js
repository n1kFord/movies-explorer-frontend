import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
  const [loggedIn, setLoggedIn] = React.useState(true); // пока только вручную менять стейт

  return (
    <div className="App">
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
                  <Movies />
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
                  <SavedMovies />
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
                  <Profile name="Никита" email="pochta@yandex.ru" />
                </>
              }
            />
          }
        />
        <Route
          path="/signin"
          element={<PreLoggedRoute loggedIn={loggedIn} element={<Login />} />}
        />
        <Route
          path="/signup"
          element={<PreLoggedRoute loggedIn={loggedIn} element={<Register />} />}
        />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
