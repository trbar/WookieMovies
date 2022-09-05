export const sortMoviesIdsByGenre = (movies: any[]) =>
  movies.reduce(
    (genres: [{id: any; data: any[]}], movie: {genres: string[]}) => {
      movie.genres?.forEach((genre: string) => {
        if (genres.find(e => e.id === genre)) {
          const index = genres.map(object => object.id).indexOf(genre);
          genres[index]['data'].push(movie);
        } else {
          genres.push({id: genre, data: [movie]});
        }
      });
      return genres;
    },
    [],
  );
