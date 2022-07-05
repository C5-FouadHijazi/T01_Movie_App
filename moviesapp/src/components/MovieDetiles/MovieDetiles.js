import React, { useState, useContext, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";

const MovieDetiles = () => {
  const [movies2, SetMovies2] = useState([]);

  const img_path = "http://image.tmdb.org/t/p/w500";

  const { id } = useParams();

  const getDeitels = () => {
    axios
      .post(
        `https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a/${id}`
      )
      .then((result) => {
        console.log(result);
        SetMovies2(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getDeitels();
  }, []);

  return (
    <div>
      <div className="imgs-dev_poster_path">
        {movies2 &&
          movies2.map((element, index) => {
            return (
              <div key={element.id}>
                <div>{element.original_title}</div>
                <div>{element.overview}</div>
                <div>{element.release_date}</div>
                <div>{element.vote_average}</div>
                <img
                  className="movies-poster_path"
                  src={`${img_path}${element.poster_path}`}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MovieDetiles;
