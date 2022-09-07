import {combineReducers} from '@reduxjs/toolkit';

import moviesReducer from './movies/moviesReducer';
import searchReducer from './search/searchReducer';
import favouritesReducer from './favourites/favouritesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  search: searchReducer,
  favourites: favouritesReducer
});

export default rootReducer;
