import React from "react";
import "./Movies.css";

import N1 from "./assets/N1.webp";
import N2 from "./assets/N2.jpg";
import N3 from "./assets/N3.jpg";
import N4 from "./assets/N4.webp";
import N5 from "./assets/N5.jpg";
import N6 from "./assets/N6.webp";
import N7 from "./assets/N7.jpg";
import N8 from "./assets/N8.webp";

function Movies() {

  const movies = [
    { src: N1, title: "Movie 1" },
    { src: N2, title: "Movie 2" },
    { src: N3, title: "Movie 3" },
    { src: N4, title: "Movie 4" },
    { src: N5, title: "Movie 5" },
    { src: N6, title: "Movie 6" },
    { src: N7, title: "Movie 7" },
    { src: N8, title: "Movie 8" },
  ];

  return (
    <div className="movies-page">
      <div className="quotes-section">
        <h1>“Cinema is the most beautiful fraud in the world.” — Jean-Luc Godard</h1>
      </div>

      <div className="movies-grid">
        {movies.map((movie, i) => (
          <div className="movie-card" key={i}>
            <img src={movie.src} alt={movie.title} />
            <h4>{movie.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;



