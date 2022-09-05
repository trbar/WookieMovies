import {combineReducers} from '@reduxjs/toolkit';

import moviesReducer from './movies/moviesReducer';
import searchReducer from './search/searchReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  search: searchReducer
});

export default rootReducer;
