import { WookieMovie } from '../movies/moviesTypes';
import {SearchActions} from './searchTypes';

const searchResults: WookieMovie[] = [];

export const searchInitialState = {
    query: '',
    results: searchResults,
    isLoading: false,
    error: null,
  };

export default function searchReducer(state = searchInitialState, action: SearchActions) {
    switch (action.type) {
      case 'WOOKIE_MOVIES_SEARCH_INPUT_CHANGED':
        return {
          ...state,
          query: action.payload,
          isLoading: true,
        };
      case 'WOOKIE_MOVIES_SEARCH_REQUEST':
        return {
          ...state,
          results: [],
          isLoading: true,
          error: null,
        };
      case 'WOOKIE_MOVIES_SEARCH_SUCCESS':
        return {
          ...state,
          results: action.payload,
          isLoading: false,
          error: null,
        };
      case 'WOOKIE_MOVIES_SEARCH_FAILURE':
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