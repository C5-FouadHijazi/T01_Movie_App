import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [movies, SetMovies] = useState([]);
  const img_path = "http://image.tmdb.org/t/p/w500"

  useEffect(() => {
    axios
      .post(
        "https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a"
      )
      .then((result) => {
        console.log(result);
        SetMovies(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {movies &&
        movies.map((element, index) => {
          return (
            <div className="movies-dev" key={element.id}>
              <img className="movies-img" src={`${img_path}${element.poster_path}`} />
              <h2> {element.original_title}</h2>
            </div>
          );
        })}
        <h1 ></h1>
    </div>
  );
};

export default Home;
