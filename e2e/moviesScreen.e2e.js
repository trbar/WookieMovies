describe('Wookie Movies Home Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have Wookie Movies Title', async () => {
    await expect(element(by.id('WookieTitle'))).toBeVisible();
  });

  it('should have Home Bottom Tab Bar Button', async () => {
    await expect(element(by.id('WookieMoviesIconHome')).atIndex(1)).toBeVisible();
  });

  it('should have Action Genre', async () => {
    await expect(element(by.id('WookieMoviesGenreAction'))).toBeVisible();
  });

  it('should have a movie poster showing', async () => {
    await waitFor(element(by.id('WookieMoviesPosterButtonthe-dark-knight-2008')).atIndex(1)).toBeVisible().withTimeout(5000);
  });

  it('movies details screen should show movie details', async () => {
    await element(by.id('WookieMoviesPosterButtonthe-dark-knight-2008')).atIndex(1).tap();
    await waitFor(element(by.id('WookieMoviesDetailsBackgroundPoster'))).toBeVisible().withTimeout(5000);
    await expect(element(by.id('WookieMoviesDetailsYearLengthDirectors'))).toBeVisible();
    await expect(element(by.id('WookieMoviesDetailsCast'))).toBeVisible();
    await expect(element(by.id('WookieMoviesDetailsDescription'))).toBeVisible();
  });

});
