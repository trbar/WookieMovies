import {MovieActions, WookieMovie} from './moviesTypes';

const movieResults: WookieMovie[] = [];

export const moviesInitialState = {
  isLoading: false,
  error: null,
  results: movieResults,
};

export default function moviesReducer(
  state = moviesInitialState,
  action: MovieActions,
) {
  switch (action.type) {
    case 'GET_ALL_WOOKIE_MOVIES_REQUEST':
      return {
        ...state,
        results: [],
        isLoading: true,
        error: null,
      };
    case 'GET_ALL_WOOKIE_MOVIES_SUCCESS':
      return {
        ...state,
        results: action.payload,
        isLoading: false,
        error: null,
      };
    case 'GET_ALL_WOOKIE_MOVIES_FAILURE':
      return {
        ...state,
        results: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
