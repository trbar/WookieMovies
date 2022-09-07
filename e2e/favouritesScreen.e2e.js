describe('Wookie Movies Favourites Screen', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    beforeEach(async () => {
      await device.reloadReactNative();
    });
  
    it('should have Favourites Bottom Tab Bar Button', async () => {
        await expect(element(by.id('WookieMoviesIconFavourites')).atIndex(1)).toBeVisible();
    });

    it('should show Favourites Screen with opening text', async () => {
        await element(by.id('WookieMoviesIconFavourites')).atIndex(0).tap();
        await waitFor(element(by.id('WookieMoviesFavouritesOpeningText'))).toBeVisible().withTimeout(5000);
    });

    it('add a movie to Favourites', async () => {
        await element(by.id('WookieMoviesIconSearch')).atIndex(1).tap();
        await waitFor(element(by.id('WookieMoviesSearchBar'))).toBeVisible().withTimeout(5000);
        await element(by.id('WookieMoviesSearchBar')).typeText('Pulp');
        await waitFor(element(by.id('WookieMoviesPosterButtonpulp-fiction-1994')).atIndex(0)).toBeVisible().withTimeout(5000);
        await element(by.id('WookieMoviesPosterButtonpulp-fiction-1994')).atIndex(0).tap();
        await waitFor(element(by.id('WookieMoviesDetailsBackgroundPoster'))).toBeVisible().withTimeout(5000);
        await expect(element(by.id('WookieMoviesAddMovieToFavouritesFromMovieDetailsScreen'))).toBeVisible();
        await element(by.id('WookieMoviesAddMovieToFavouritesFromMovieDetailsScreen')).tap();
        await waitFor(element(by.id('WookieMoviesRemoveMovieToFavouritesFromMovieDetailsScreen'))).toBeVisible().withTimeout(5000);
        await expect(element(by.id('WookieMoviesMovieDetailClose'))).toBeVisible();
        await element(by.id('WookieMoviesMovieDetailClose')).tap();
        await expect(element(by.id('WookieMoviesIconFavourites')).atIndex(1)).toBeVisible();
        await element(by.id('WookieMoviesIconFavourites')).atIndex(1).tap();
        await waitFor(element(by.id('WookieMovieFavouriteCardpulp-fiction-1994'))).toBeVisible().withTimeout(5000);
    });

    it('remove a movie from Favourites', async () => {
        await element(by.id('WookieMoviesIconFavourites')).atIndex(0).tap();
        await waitFor(element(by.id('WookieMovieFavouriteCardpulp-fiction-1994'))).toBeVisible().withTimeout(5000);
        await waitFor(element(by.id('WookieMoviesRemoveMovieToFavouritesFromFavouritescreen'))).toBeVisible().withTimeout(5000);
        await element(by.id('WookieMoviesRemoveMovieToFavouritesFromFavouritescreen')).tap();
        await waitFor(element(by.id('WookieMoviesFavouritesOpeningText'))).toBeVisible().withTimeout(5000);
    });
  });