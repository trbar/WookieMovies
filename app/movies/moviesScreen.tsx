import * as React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useNetInfo} from '@react-native-community/netinfo';
import {Title} from 'react-native-paper';

import NoInternetStatusBar from '../common/components/NoInternetStatusBar';
import ErrorMessage from '../common/components/ErrorMessage';
import WookieMovieList from '../common/components/WookieMoviesList';

import {selectMovies, getAllWookieMovies} from './moviesActions';

const MoviesScreen = () => {
  React.useEffect(() => {
    getAllWookieMovies();
  }, []);

  const movies = useSelector(selectMovies);
  const netInfo = useNetInfo();

  return (
    <View style={{flex: 1}}>
      {!netInfo.isConnected && <NoInternetStatusBar />}
      <View style={{alignItems: 'center'}}>
        <Title testID="WookieTitle">{`WOOKIE`}</Title>
        <Title>{`MOVIES`}</Title>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {movies.error && (<ErrorMessage error={movies.error} />)}
        {movies.isLoading ? (
          <ActivityIndicator />
        ) : (
          <WookieMovieList movies={movies.results} />
        )}
      </View>
    </View>
  );
};

export default MoviesScreen;
