import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ShowMovieDetailsModal from './common/components/ShowMovieDetailsModal';
import MoviesScreen from './movies/moviesScreen';
import SearchScreen from './search/searchScreen';
import FavouritesScreen from './favourites/favouritesScreen';

import { WookieMovie } from './movies/moviesTypes';

export type RootStackParamList = {
  TabNavigator: undefined;
  ShowMovieDetails: {item: WookieMovie, isMovieFavourite?: boolean};
};

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home-variant' : 'home-variant-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'database-search' : 'database-search-outline';
          } else if (route.name === 'Favourites') {
            iconName = focused ? 'star-shooting' : 'star-shooting-outline';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} testID={`WookieMoviesIcon${route.name}`}/>
          );
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
        tabBarTestID:'WookieMoviesBottomTabBar'
      })}>
      <Tab.Screen
        name="Home"
        options={{headerShown: false}}
        component={MoviesScreen}
      />
      <Tab.Screen
        name="Search"
        options={{headerShown: false}}
        component={SearchScreen}
      />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
    </Tab.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <RootStack.Navigator>
          <RootStack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{header: () => null}}
          />
          <RootStack.Group screenOptions={{presentation: 'modal'}}>
            <RootStack.Screen
              name="ShowMovieDetails"
              component={ShowMovieDetailsModal}
              options={{header: () => null}}
            />
          </RootStack.Group>
        </RootStack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
