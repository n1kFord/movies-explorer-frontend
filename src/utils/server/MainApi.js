class MainApi {
  constructor(options) {
    this._adress = options.baseUrl;
  }
  _checkResponse(res) {
    let json = res.json();
    if (res.ok) {
      return json;
    }
    return json.then((err) => {
      throw err;
    });
  }

  getInfoAboutUser(token) {
    return fetch(`${this._adress}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then(this._checkResponse)
      .then((data) => {
        return data;
      });
  }

  setInfoAboutUser(info, token) {
    return fetch(`${this._adress}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `${info.name}`,
        email: `${info.email}`,
      }),
    }).then(this._checkResponse);
  }

  getSavedMovies(token) {
    return fetch(`${this._adress}/movies`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then(this._checkResponse)
      .then((data) => {
        return data;
      });
  }

  addNewMovie(info, token) {
    return fetch(`${this._adress}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: `${info.country}`,
        director: `${info.director}`,
        duration: info.duration,
        year: `${info.year}`,
        description: `${info.description}`,
        image: `${info.image}`,
        trailerLink: `${info.trailerLink}`,
        thumbnail: `${info.thumbnail}`,
        movieId: `${info.movieId}`,
        nameRU: `${info.nameRU}`,
        nameEN: `${info.nameEN}`,
      }),
    }).then(this._checkResponse);
  }

  deleteMovie(movieId, token) {
    return fetch(`${this._adress}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }
}

/*-----------------*/

export const mainApi = new MainApi({
  baseUrl: 'https://api.praktikumdiploma.nomoredomains.xyz',
  headers: {
    'Content-Type': 'application/json',
  },
}); /* api */
