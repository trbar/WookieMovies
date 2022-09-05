import {put, takeLatest, all, call} from 'redux-saga/effects';

function* handleGetAllWookieMovies(): any {
  try {
    yield put({type: 'GET_ALL_WOOKIE_MOVIES_REQUEST'});
    const response: Promise<Response> = yield call(
      fetch,
      `https://wookie.codesubmit.io/movies`,
      {
        headers: {
          Authorization: 'Bearer Wookie2019',
        },
      },
    );
    const responseBody = yield call([
      response,
      // @ts-ignore ignoring json is not on Response type due to missing typings
      response.json,
    ])
    const sortedMoviesIdsByGenre = responseBody.movies.reduce(
      (genres: [{ id: any, data: any[]}], movie: {genres: string[]}) => {
        movie.genres?.forEach((genre: string) => {
          if (genres.find(e => e.id === genre)) {
            const index = genres.map(object => object.id).indexOf(genre);
            genres[index]['data'].push(movie);
          } else {
            genres.push({ id: genre, data: [movie]});
          }
        });
        return genres;
      }, []
    );
    yield put({
      type: 'GET_ALL_WOOKIE_MOVIES_SUCCESS',
      payload: sortedMoviesIdsByGenre,
    });
  } catch (error) {
    yield put({
      type: 'GET_ALL_WOOKIE_MOVIES_FAILURE',
      payload: error,
    });
  }
}

function* watchGetAllWookieMovies() {
  yield takeLatest('GET_ALL_WOOKIE_MOVIES', handleGetAllWookieMovies);
}

export default function* moviesSagas() {
  yield all([watchGetAllWookieMovies()]);
}
