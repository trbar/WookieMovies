import {put, takeLatest, all, call} from 'redux-saga/effects';
import {sortMoviesIdsByGenre} from '../common/helpers';

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
    const sortedMoviesIdsByGenre = sortMoviesIdsByGenre(responseBody.movies)
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
