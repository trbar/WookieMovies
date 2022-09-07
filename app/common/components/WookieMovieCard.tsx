import * as React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {WookieMovie} from '../../movies/moviesTypes';

type WookieMovieCardProps = {
  item: WookieMovie;
};

const WookieMovieCard = ({item}: WookieMovieCardProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{flex: 1}}
      testID={`WookieMoviesPosterButton${item.slug}`}
      onPress={() =>
        // @ts-ignore ignore missing types in react-navigation/navigate package
        navigation.navigate('ShowMovieDetails', {
          item,
        })
      }>
      <Image
        style={{width: 120, height: 180, marginHorizontal: 10}}
        source={{uri: item.poster}}
        testID={`WookieMoviesPoster${item.slug}`}
      />
    </TouchableOpacity>
  );
};

export default WookieMovieCard;
