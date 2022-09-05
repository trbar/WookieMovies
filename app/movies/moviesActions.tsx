import store from '../configureStore';

import {MoviesState} from './moviesTypes';

type State = {
  movies: MoviesState;
};

export const getAllWookieMovies = () =>
  store.dispatch({type: 'GET_ALL_WOOKIE_MOVIES'});

export const selectMovies = (state: State) => state.movies;