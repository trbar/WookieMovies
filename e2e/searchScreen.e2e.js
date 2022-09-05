describe('Wookie Movies Search Screen', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    beforeEach(async () => {
      await device.reloadReactNative();
    });
  
    it('should have Search Bottom Tab Bar Button', async () => {
        await expect(element(by.id('WookieMoviesIconSearch')).atIndex(1)).toBeVisible();
    });

    it('should show search bar with blank screen', async () => {
        await element(by.id('WookieMoviesIconSearch')).atIndex(1).tap();
        await waitFor(element(by.id('WookieMoviesSearchBar'))).toBeVisible().withTimeout(5000);
    });

    it('should show results when searching for a movie', async () => {
        await element(by.id('WookieMoviesIconSearch')).atIndex(1).tap();
        await waitFor(element(by.id('WookieMoviesSearchBar'))).toBeVisible().withTimeout(5000);
        await element(by.id('WookieMoviesSearchBar')).typeText('Pulp');
        await waitFor(element(by.id('WookieMoviesPosterButtonpulp-fiction-1994')).atIndex(1)).toBeVisible().withTimeout(5000);
    });

    it('movies details screen should show movie details', async () => {
        await element(by.id('WookieMoviesPosterButtonpulp-fiction-1994')).atIndex(1).tap();
        await waitFor(element(by.id('WookieMoviesDetailsBackgroundPoster'))).toBeVisible().withTimeout(5000);
        await expect(element(by.id('WookieMoviesDetailsYearLengthDirectors'))).toBeVisible();
        await expect(element(by.id('WookieMoviesDetailsCast'))).toBeVisible();
        await expect(element(by.id('WookieMoviesDetailsDescription'))).toBeVisible();
    });
  
  });