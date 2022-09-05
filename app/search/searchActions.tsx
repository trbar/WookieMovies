import store from '../configureStore';

import {SearchState} from '../search/searchTypes';
import {MoviesState} from '../movies/moviesTypes';

type State = {
  movies: MoviesState;
  search: SearchState;
};

export const wookieMoviesSearchInputChangedAction = (query: string) =>
  store.dispatch({type: 'WOOKIE_MOVIES_SEARCH_INPUT_CHANGED', payload: query});

export const selectSearch = (state: State) => state.search;
