import {put, takeLatest, all, call, select} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {selectFavourites} from './favouritesActions';
import {selectSearch} from '../search/searchActions';

import {FavouritesState} from './favouritesTypes';

import {SearchState} from '../search/searchTypes';

import {WookieMovie} from '../movies/moviesTypes';

function* handleRemoveMovieFromFavourites({
  payload,
}: {
  type: string;
  payload: string;
}) {
  try {
    yield put({type: 'REMOVE_MOVIE_FROM_FAVOURITES_REQUEST'});
    const favouriteState: FavouritesState = yield select(selectFavourites);
    const favouriteIds = favouriteState.ids;
    const favouriteResults = favouriteState.results;
    const newFavouriteIds = favouriteIds.filter(id => id != payload);
    const newFavouriteResults = favouriteResults.filter(
      result => result.id != payload,
    );
    yield all([
      call(
        AsyncStorage.setItem,
        '@WookieMovies.favouriteIds',
        JSON.stringify(newFavouriteIds),
      ),
      call(AsyncStorage.removeItem, `@WookieMovies.${payload}`),
    ]);
    yield put({
      type: 'REMOVE_MOVIE_FROM_FAVOURITES_SUCCESS',
      payload: {results: newFavouriteResults, ids: newFavouriteIds},
    });
  } catch (error) {
    yield put({
      type: 'REMOVE_MOVIE_FROM_FAVOURITES_FAILURE',
      payload: {error: error},
    });
  }
}

function* handleAddMovieToFavourites({
  payload,
}: {
  type: string;
  payload: WookieMovie;
}) {
  try {
    yield put({type: 'ADD_MOVIE_TO_FAVOURITES_REQUEST'});
    const favouriteState: FavouritesState = yield select(selectFavourites);
    const favouriteIds: string[] = favouriteState.ids;
    favouriteIds.push(payload.id);
    const favouriteResults: WookieMovie[] = favouriteState.results;
    favouriteResults.push(payload);
    yield all([
      call(
        AsyncStorage.setItem,
        '@WookieMovies.favouriteIds',
        JSON.stringify(favouriteIds),
      ),
      call(
        AsyncStorage.setItem,
        `@WookieMovies.${payload.id}`,
        JSON.stringify(payload),
      ),
    ]);
    const searchState: SearchState = yield select(selectSearch);
    const searchResultsWithoutMovieAddedToFavourites =
      searchState.results.filter(
        (result: any) => result.id != payload.id,
      );
    yield put({
      type: 'ADD_MOVIE_TO_FAVOURITES_SUCCESS',
      payload: {
        favouriteResults: favouriteResults,
        ids: favouriteIds,
        searchResults: searchResultsWithoutMovieAddedToFavourites,
      },
    });
  } catch (error) {
    yield put({
      type: 'ADD_MOVIE_TO_FAVOURITES_FAILURE',
      payload: {error: error},
    });
  }
}

function* handleGetAllMoviesFavourites() {
  try {
    yield put({type: 'GET_ALL_MOVIE_FAVOURITES_REQUEST'});
    const jsonFavouriteIds: string | null = yield call(
      AsyncStorage.getItem,
      '@WookieMovies.favouriteIds',
    );
    const favouriteIds =
      jsonFavouriteIds != null ? JSON.parse(jsonFavouriteIds) : [];
    const favouriteResults: WookieMovie[] = [];
    yield all(
      favouriteIds.map(async (id: string) => {
        const jsonResult = await AsyncStorage.getItem(`@WookieMovies.${id}`);
        const result =
          jsonResult != null
            ? JSON.parse(jsonResult)
            : Error('Could not read result');
        favouriteResults.push(result);
      }),
    );
    yield put({
      type: 'GET_ALL_MOVIE_FAVOURITES_SUCCESS',
      payload: {results: favouriteResults, ids: favouriteIds},
    });
  } catch (error) {
    yield put({
      type: 'GET_ALL_MOVIE_FAVOURITES_FAILURE',
      payload: {error: error},
    });
  }
}

function* watchAddMovieToFavourites() {
  yield takeLatest(
    'ADD_MOVIE_TO_FAVOURITES',
    handleAddMovieToFavourites,
  );
}

function* watchRemoveMovieFromFavourites() {
  yield takeLatest(
    'REMOVE_MOVIE_FROM_FAVOURITES',
    handleRemoveMovieFromFavourites,
  );
}

function* watchGetAllMovieFavourites() {
  yield takeLatest(
    'GET_ALL_MOVIE_FAVOURITES',
    handleGetAllMoviesFavourites,
  );
}

export default function* favouritesSagas() {
  yield all([
    watchAddMovieToFavourites(),
    watchRemoveMovieFromFavourites(),
    watchGetAllMovieFavourites(),
  ]);
}
