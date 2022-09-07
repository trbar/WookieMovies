import {FavouritesActions} from './favouritesTypes';
import { WookieMovie } from '../movies/moviesTypes';

const favouritesResults: WookieMovie[] = [];

const favouritesIds: string[] = [];

export const favouritesInitialState = {
  isLoading: false,
  error: null,
  results: favouritesResults,
  ids: favouritesIds,
};

export default function favouritesReducer(
  state = favouritesInitialState,
  action: FavouritesActions,
) {
  switch (action.type) {
    case 'ADD_MOVIE_TO_FAVOURITES':
      return {
        ...state,
      };
    case 'REMOVE_MOVIE_FROM_FAVOURITES':
      return {
        ...state,
      };
    case 'REMOVE_MOVIE_FROM_FAVOURITES_REQUEST':
    case 'GET_ALL_MOVIE_FAVOURITES_REQUEST':
    case 'ADD_MOVIE_TO_FAVOURITES_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'REMOVE_MOVIE_FROM_FAVOURITES_SUCCESS':
    case 'GET_ALL_MOVIE_FAVOURITES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        results: action.payload.results,
        ids: action.payload.ids,
        error: null,
      };
    case 'ADD_MOVIE_TO_FAVOURITES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        results: action.payload.favouriteResults,
        ids: action.payload.ids,
        error: null,
      };
    case 'REMOVE_MOVIE_FROM_FAVOURITES_FAILURE':
    case 'GET_ALL_MOVIE_FAVOURITES_FAILURE':
    case 'ADD_MOVIE_TO_FAVOURITES_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
