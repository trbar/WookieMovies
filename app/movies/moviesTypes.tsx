export type MoviesState = {
    results: [{id: string, data: Array<WookieMovie>}] | [];
    isLoading: boolean;
    error: null | Error;
  };

export type MovieActions =
  | {type: 'GET_ALL_WOOKIE_MOVIES'}
  | {type: 'GET_ALL_WOOKIE_MOVIES_REQUEST'}
  | {type: 'GET_ALL_WOOKIE_MOVIES_SUCCESS'; payload: Array<WookieMovie>}
  | {type: 'GET_ALL_WOOKIE_MOVIES_FAILURE'; payload: Error};

export type WookieMovie = {
  backdrop?: string;
  cast?: string[];
  classification?: string;
  director?: string[] | string;
  genres?: string[] | string;
  id: string;
  imdb_rating?: number;
  length?: string;
  overview?: string;
  poster?: string;
  released_on: string;
  slug?: string;
  title: string;
  isFavourite?: boolean;
}