import * as React from 'react';
import {View, FlatList} from 'react-native';
import {
  ActivityIndicator,
  Text,
  Button,
  Card,
  Title,
  Subheading,
  Paragraph,
} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useNetInfo} from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/native';

import NoInternetStatusBar from '../common/components/NoInternetStatusBar';
import ErrorMessage from '../common/components/ErrorMessage';

import {getAllMovieFavourites, selectFavourites} from './favouritesActions';
import {WookieMovie} from '../movies/moviesTypes';
import {removeMovieFromFavouritesAction} from './favouritesActions';

const FavouritesScreen = () => {
  React.useEffect(() => {
    getAllMovieFavourites();
  }, []);

  const favourites = useSelector(selectFavourites);

  const netInfo = useNetInfo();

  const navigation = useNavigation();

  const FavouriteMovieCard = ({item}: {item: WookieMovie}) => {
    return (
      <Card
        mode="outlined"
        testID={`WookieMovieFavouriteCard${item.slug}`}
        style={{margin: 5}}
        onPress={() =>
          // @ts-ignore ignore missing types in react-navigation/navigate package
          navigation.navigate('ShowMovieDetails', {item})
        }>
        <Card.Content>
          <Title>{item.title}</Title>
          <Subheading>IMBD Rating: {item.imdb_rating}</Subheading>
          <Paragraph>{item.overview}</Paragraph>
        </Card.Content>
        <Card.Actions
          style={{flexDirection: 'column', alignItems: 'flex-start'}}>
          <Button
            mode="outlined"
            testID="WookieMoviesRemoveMovieToFavouritesFromFavouritescreen"
            onPress={() => removeMovieFromFavouritesAction(item.id)}>
            Remove From Favourites
          </Button>
        </Card.Actions>
      </Card>
    );
  };

  return (
    <View style={{flex: 1}}>
      {!netInfo.isConnected && <NoInternetStatusBar />}
      {favourites.isLoading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator style={{ margin: 10 }}/>
        </View>
      )}
      {favourites.error && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ErrorMessage error={favourites.error} />
        </View>
      )}
      {favourites.results.length > 0 ? (
        <FlatList
          data={favourites.results}
          renderItem={item => <FavouriteMovieCard item={item.item} />}
          keyExtractor={item => item.id}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text testID='WookieMoviesFavouritesOpeningText'>Add a movie to your favourites</Text>
        </View>
      )}
    </View>
  );
};

export default FavouritesScreen;
