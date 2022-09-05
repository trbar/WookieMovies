import { WookieMovie } from "../movies/moviesTypes";

export type SearchState = {
    query: string;
    results: [{id: string, data: Array<WookieMovie>}] | [];
    isLoading: boolean;
    error: null | Error;
  };

export type SearchActions =
  | {type: 'WOOKIE_MOVIES_SEARCH_INPUT_CHANGED'; payload: string}
  | {type: 'WOOKIE_MOVIES_SEARCH_REQUEST'}
  | {type: 'WOOKIE_MOVIES_SEARCH_SUCCESS'; payload: Array<WookieMovie>}
  | {type: 'WOOKIE_MOVIES_SEARCH_FAILURE'; payload: Error};
