import React, { useEffect } from "react";

export default function Filter({ popular, genre, setGenre, setFiltered }) {
  useEffect(() => {
    if (genre === 0) {
      setFiltered(popular);
      return;
    }

    const filtered = popular.filter((movie) => movie.genre_ids.includes(genre));
    setFiltered(filtered);
  }, [genre]);

  return (
    <div className="filter-container">
      <button
        className={genre === 0 ? "active" : ""}
        onClick={() => {
          setGenre(0);
        }}
      >
        All
      </button>
      <button
        className={genre === 28 ? "active" : ""}
        onClick={() => {
          setGenre(28);
        }}
      >
        Action
      </button>
      <button
        className={genre === 35 ? "active" : ""}
        onClick={() => {
          setGenre(35);
        }}
      >
        Comedy
      </button>
    </div>
  );
}
