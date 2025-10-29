// src/data.js
const movies = [
  { id: 1, title: "Doctor Strange", time: 115, genres: ["Action", "Adventure"] },
  { id: 2, title: "Moana", time: 107, genres: ["Fantasy", "Action", "Adventure"] },
  { id: 3, title: "The Intern", time: 121, genres: ["Comedy"] },
];

const directors = [
  { id: 1, name: "Scott Derrickson", movies: ["Doctor Strange"] },
  { id: 2, name: "Ron Clements", movies: ["Moana"] },
  { id: 3, name: "Nancy Meyers", movies: ["The Intern"] },
];

const actors = [
  { id: 1, name: "Benedict Cumberbatch", movies: ["Doctor Strange"] },
  { id: 2, name: "Auli'i Cravalho", movies: ["Moana"] },
  { id: 3, name: "Robert De Niro", movies: ["The Intern"] },
];

export { movies, directors, actors };
