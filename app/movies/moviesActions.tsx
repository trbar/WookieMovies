import store from '../configureStore';
import { FavouritesState } from '../favourites/favouritesTypes';
import { SearchState } from '../search/searchTypes';
import {MoviesState} from './moviesTypes';

type State = {
  movies: MoviesState;
  search: SearchState;
  favourites: FavouritesState;
};

export const getAllWookieMovies = () =>
  store.dispatch({type: 'GET_ALL_WOOKIE_MOVIES'});

export const selectMovies = (state: State) => state.movies;