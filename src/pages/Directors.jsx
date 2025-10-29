import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import data from "../db.json"; // ✅ import JSON directly

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    setTimeout(() => setDirectors(data.directors), 0);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, i) => (
                <li key={i}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
