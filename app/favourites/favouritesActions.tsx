import store from '../configureStore';

import {SearchState} from '../search/searchTypes';

import {FavouritesState} from '../favourites/favouritesTypes';

import {WookieMovie, MoviesState} from '../movies/moviesTypes';

type State = {
  movies: MoviesState;
  search: SearchState;
  favourites: FavouritesState;
};

export const addMovieToFavouritesAction = (item: WookieMovie) =>
  store.dispatch({type: 'ADD_MOVIE_TO_FAVOURITES', payload: item});

export const removeMovieFromFavouritesAction = (id: string) =>
  store.dispatch({type: 'REMOVE_MOVIE_FROM_FAVOURITES', payload: id});

export const getAllMovieFavourites = () =>
  store.dispatch({type: 'GET_ALL_MOVIE_FAVOURITES'});

export const selectFavourites = (state: State) => state.favourites;

export const selectFavouritesIds = (state: State) => state.favourites.ids;
