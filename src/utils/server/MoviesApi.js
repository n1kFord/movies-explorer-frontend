class MoviesApi {
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

  getInitialMovies() {
    return fetch(`${this._adress}/beatfilm-movies`)
      .then(this._checkResponse)
      .then((data) => {
        return data;
      });
  }
}

/*-----------------*/

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  },
}); /* api */
