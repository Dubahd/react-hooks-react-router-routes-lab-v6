import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import data from "../db.json"; // ✅ import JSON directly

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    // Simulate async fetch for consistency
    setTimeout(() => setActors(data.actors), 0);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, i) => (
                <li key={i}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
