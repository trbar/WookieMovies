import * as React from 'react';
import {View} from 'react-native';
import {
  Searchbar,
  ActivityIndicator,
} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useNetInfo} from '@react-native-community/netinfo';

import NoInternetStatusBar from '../common/components/NoInternetStatusBar';
import ErrorMessage from '../common/components/ErrorMessage';
import WookieMoviesList from '../common/components/WookieMoviesList';

import { selectSearch, wookieMoviesSearchInputChangedAction } from './searchActions';

const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
  
    const onChangeSearch = (query: string) => {
      setSearchQuery(query);
      // prevent case when user clears the search box that a query with nothing will run
      if (query != '') {
        wookieMoviesSearchInputChangedAction(query);
      }
    };
  
    const search = useSelector(selectSearch);
    const netInfo = useNetInfo();
  
    return (
      <View style={{flex: 1}}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          testID={'WookieMoviesSearchBar'}
        />
        {!netInfo.isConnected && <NoInternetStatusBar />}
        <View style={{flex: 1, justifyContent: 'center'}}>
          {search.error && (<ErrorMessage error={search.error} />)}
          {search.isLoading ? (
            <ActivityIndicator />
          ) : (
            <WookieMoviesList movies={search.results} />
          )}
        </View>
      </View>
    );
  };

  export default SearchScreen