import {delay, put, takeLatest, all, call} from 'redux-saga/effects';
import { sortMoviesIdsByGenre } from '../common/helpers';

function* handleSearchWookieMoviesInput({payload}: {type: string; payload: string}) {
  //debouce for better search performance
  yield delay(1000);
  try {
    yield put({type: 'WOOKIE_MOVIES_SEARCH_REQUEST'});
    const response: Promise<Response> = yield call(
      fetch,
      `https://wookie.codesubmit.io/movies?q=${payload}`,
      {
        headers: {
          Authorization: 'Bearer Wookie2019'
        }
      },
    );
    // @ts-ignore missing typings in redux-saga
    const responseBody = yield call([
      response,
      // @ts-ignore ignoring json is not on Response type due to missing typings
      response.json,
    ])
    const sortedMoviesIdsByGenre = sortMoviesIdsByGenre(responseBody.movies)
    yield put({
      type: 'WOOKIE_MOVIES_SEARCH_SUCCESS',
      payload: sortedMoviesIdsByGenre,
    });
  } catch (error) {
    yield put({type: 'WOOKIE_MOVIES_SEARCH_ERROR', payload: error});
  }
}

function* watchSearchWookieMoviesInput() {
  yield takeLatest('WOOKIE_MOVIES_SEARCH_INPUT_CHANGED', handleSearchWookieMoviesInput);
}

export default function* searchSagas() {
  yield all([
    watchSearchWookieMoviesInput(),
  ]);
}
