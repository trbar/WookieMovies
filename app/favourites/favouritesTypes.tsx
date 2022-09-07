import { WookieMovie } from '../movies/moviesTypes';

export type FavouritesActions =
  | {type: 'ADD_MOVIE_TO_FAVOURITES'; payload: WookieMovie}
  | {type: 'REMOVE_MOVIE_FROM_FAVOURITES'; payload: string}
  | {type: 'ADD_MOVIE_TO_FAVOURITES_REQUEST'}
  | {
      type: 'ADD_MOVIE_TO_FAVOURITES_SUCCESS';
      payload: {
        searchResults: Array<WookieMovie>;
        ids: Array<string>;
        favouriteResults: Array<WookieMovie>;
      };
    }
  | {type: 'ADD_MOVIE_TO_FAVOURITES_FAILURE'; payload: {error: Error}}
  | {type: 'REMOVE_MOVIE_FROM_FAVOURITES_REQUEST'}
  | {
      type: 'REMOVE_MOVIE_FROM_FAVOURITES_SUCCESS';
      payload: {results: Array<WookieMovie>; ids: Array<string>};
    }
  | {
      type: 'REMOVE_MOVIE_FROM_FAVOURITES_FAILURE';
      payload: {error: Error};
    }
  | {type: 'GET_ALL_MOVIE_FAVOURITES'}
  | {type: 'GET_ALL_MOVIE_FAVOURITES_REQUEST'}
  | {
      type: 'GET_ALL_MOVIE_FAVOURITES_SUCCESS';
      payload: {results: Array<WookieMovie>; ids: Array<string>};
    }
  | {
      type: 'GET_ALL_MOVIE_FAVOURITES_FAILURE';
      payload: {error: Error};
    };

export type FavouritesState = {
  results: Array<WookieMovie> | [];
  isLoading: boolean;
  error: null | Error;
  ids: Array<string> | [];
};
