import store from '../configureStore';
import { SearchState } from '../search/searchTypes';
import {MoviesState} from './moviesTypes';

type State = {
  movies: MoviesState;
  search: SearchState;
};

export const getAllWookieMovies = () =>
  store.dispatch({type: 'GET_ALL_WOOKIE_MOVIES'});

export const selectMovies = (state: State) => state.movies;