import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>
        <ul>
          {movies.map((movie) => (
            <div>
              <li key={movie.id}>{movie.title}</li>
            </div>
          ))}
        </ul>
      </h1>
    </div>
  );
}

export default Movies;
