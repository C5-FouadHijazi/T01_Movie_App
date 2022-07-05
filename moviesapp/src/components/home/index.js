import React, { useState, useContext, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import Slideshow from "../slider";
import "react-slideshow-image/dist/styles.css";
const Home = () => {
  const [movies, SetMovies] = useState([]);
  const img_path = "http://image.tmdb.org/t/p/w500";

  useEffect(() => {
    axios
      .post(
        "https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a"
      )
      .then((result) => {
        SetMovies(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Slideshow />
      <div className="imgs-dev_poster_path">
        {movies &&
          movies.map((element, index) => {
            return (
              <div key={element.id}>
                <img
                  className="movies-poster_path"
                  src={`${img_path}${element.poster_path}`}
                />
                <button>
                  <Link to={`/movieDetiles/${element.id}`}>More</Link> 
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
