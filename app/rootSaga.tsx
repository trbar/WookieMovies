import {all} from 'redux-saga/effects';

import moviesSagas from './movies/moviesSagas';
import searchSagas from './search/searchSagas'

export default function* rootSaga() {
  yield all([moviesSagas(), searchSagas()]);
}
