import "./App.css";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [genre, setGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=77dc76215c27f363d4b57f180056f7bb&language=en-US&page=1"
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
    console.log(movies);
  };

  return (
    <>
      <div className="App">
        <Filter
          popular={popular}
          genre={genre}
          setGenre={setGenre}
          setFiltered={setFiltered}
        />
        <motion.div layout className="popular-movies">
          <AnimatePresence>
            {filtered.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  imgUrl={movie.backdrop_path}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}

export default App;
