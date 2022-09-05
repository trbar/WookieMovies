import {combineReducers} from '@reduxjs/toolkit';

import moviesReducer from './movies/moviesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
