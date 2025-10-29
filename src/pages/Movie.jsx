import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { movies } from "../data";

function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie)
    return (
      <>
        <NavBar />
        <h1>Movie Not Found</h1>
      </>
    );

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <div>
          {movie.genres.map((g, index) => (
            <span key={index}>{g} </span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
