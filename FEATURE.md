## Favourites Feature

For this assignment I thought it would be cool to do a Favourites feature to add and remove movies from the list

### Device Storage of movies

I believe for a better user experience, Favourites can be stored in device rather than in memory, so that if a user opens the app without internet, he can look at his features without having to connect to the internet to a server. In this implementation I used [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage) as this is a pretty well maintained community package in lieu of React Native core deprecating AsyncStorage

### Implementation

I added a third 'Favourites' tab in order to keep consistent with the design of the app. In order to quickly build UI, I used the <Card> element from **react-native-paper** and added the title, imdb_rating, description, and remove from favourites button. In the movie details screen/modal, I added logic to add or remove a movie from favourites.

I did not add functionality to add a favourite movie from the Home screen, as like Netflix the space for a user to click on a movie is already small, and thus the button to add/remove a movie from a favourite is not ideal. As I am writting this perhaps it would have been nice to show my favourite movies, but I guess that is now beyond the scope of this test

### Data Storage Implementation

I purposely added two data types to store as part of this implementation, one being the actual movie details, and the second one an array of ids that are favourites. My reasoning for this was that it is better practice to store each movie individually in storage by a key identifier, whereby I can even download the movie posters and keep them in device storage and not breach the [6MB storage limit](https://react-native-async-storage.github.io/async-storage/docs/limits) that can lead to weird errors

### Redux Saga and Fetching Data

I purposely used Redux Saga to show my skills in asynchronous storage and saga pattern writting (and hence why I chose this pattern for developing the whole app), specifically showing how to correctly pause and get data asynchronously and update it to the user accordingly (as it is not instantaneous but almost, a loading indicator will be shown)