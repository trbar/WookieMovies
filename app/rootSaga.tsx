import {all} from 'redux-saga/effects';

import moviesSagas from './movies/moviesSagas';

export default function* rootSaga() {
  yield all([moviesSagas()]);
}
