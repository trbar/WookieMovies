import * as React from 'react';
import {View, Image, ScrollView} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {RootStackParamList} from '../../navigator';

export type ShowMovieDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'ShowMovieDetails'
>;

const generateStarsArray = (imdbRating: number | undefined) => {
  const starsArray = []
  const flooredImdbRatingOutOf5 = imdbRating ? Math.floor(imdbRating/2) : 0
    for(let i = 0; i < 5; i++) {
      if (i < flooredImdbRatingOutOf5) {
        starsArray.push({ id: i, name: 'star'})
      } else {
        starsArray.push({ id: i, name: 'star-outline'})
      }
    }
    return starsArray
}

const ShowMovieDetailsModal = ({route}: ShowMovieDetailsProps) => {
  const {item} = route.params;

  const [isLoading, setIsLoading] = React.useState(false);

  const formattedDate = new Date(item.released_on);
  const year = formattedDate.getUTCFullYear();

  const starsArray = generateStarsArray(item.imdb_rating)

  return (
    <View>
      
        {isLoading && <ActivityIndicator />}
        <Image
          style={{height: 200, width: '100%'}}
          source={{uri: item.backdrop}}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          resizeMode="cover"
          testID={'WookieMoviesDetailsBackgroundPoster'}
        />
        <View>
          <Image
            style={{
              position: 'absolute',
              top: -67.5,
              left: 15,
              width: 90,
              height: 135,
            }}
            source={{uri: item.poster}}
          />
        </View>
        <View style={{position: 'absolute', top: 130, left: 120, width: 150}}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
            }}>{`${item.title} (${item.imdb_rating})`}</Text>
        </View>
        <ScrollView style={{marginBottom: 20, marginHorizontal: 5}}>
          <View style={{marginTop: 10, marginLeft: 15}}>
            <View style={{ flexDirection: 'row', marginLeft: 100, marginBottom: 40}}>
              {starsArray.map(star => (
                <Icon key= {star.id} name={star.name} size={30} color="#FFBA01"></Icon>
              ))}
            </View>
            <Text
              testID={'WookieMoviesDetailsYearLengthDirectors'}
              style={{
                fontSize: 16,
              }}>{`${year} | ${item.length} | ${item.director}`}</Text>
            <Text
              testID={'WookieMoviesDetailsCast'}
              style={{fontSize: 16, marginTop: 10}}>{`cast: ${item.cast}`}</Text>
            <Text
              testID={'WookieMoviesDetailsDescription'}
              style={{
                fontSize: 16,
                marginTop: 10,
              }}>{`movie description: ${item.overview}`}</Text>
          </View>
      </ScrollView>
    </View>
  );
};

export default ShowMovieDetailsModal;
