const students = [
  {
    title: "Star Wars",
    release: 1977,
    actors: ["Mark", "Harrison", "Carrie"],
  },
  {
    title: "Lion King",
    release: 1994,
    actors: ["James Earl Jones"],
  },
];
//forEach
movie.forEach((movie) => console.log(movie.title));
//filter, to get a new array of movies that match criteria
//array name DOT Array Command then arrow function that accepts singular element of array
const newMovies = movie.filter((movie) => movie.release > 1990);
console.log(newMovies);
//chain array
movie
  .filter((movie) => movie.release > 1990)
  .forEach((movie) => console.log(movie.title));
