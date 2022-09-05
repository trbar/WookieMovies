import * as React from 'react';
import {View, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import { WookieMovie } from '../../movies/moviesTypes';

import WookieMovieCard from './WookieMovieCard';

type WookieMoviesList = {
  movies: [{id: string, data: WookieMovie[]}] | []
}

const WookieMoviesList = ({movies}: WookieMoviesList) => {
  const renderWookieGenre = ({item}: any) => {
    return (
      <>
        <View style={{marginLeft: 5}}>
          <Text testID={`WookieMoviesGenre${item.id}`}style={{ marginVertical: 3, fontSize: 18}}>{item.id}</Text>
        </View>
        <FlatList
          horizontal
          data={item.data}
          renderItem={({item}) => <WookieMovieCard item={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </>
    );
  }

  return (
    <View>
      <FlatList
        contentContainerStyle={{marginHorizontal: 10}}
        data={movies}
        renderItem={renderWookieGenre}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default WookieMoviesList;
