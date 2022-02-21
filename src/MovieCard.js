import React from "react";
import { motion } from "framer-motion";

const MovieCard = ({ title, imgUrl }) => {
  return (
    <>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="card"
      >
        <h1>{title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${imgUrl}`} alt="" />
      </motion.div>
    </>
  );
};

export default MovieCard;
