import React, { useState, useContext, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Card } from "react-bootstrap";

const MovieDetiles = () => {
  const [movies2, SetMovies2] = useState([]);

  const img_path = "http://image.tmdb.org/t/p/w500";

  const { id } = useParams();

  const getDeitels = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
      )
      .then((result) => {
        console.log(result.data);
        SetMovies2(result.data);
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
      <Card>
        <Card.Img variant="top" src={`${img_path}${movies2.poster_path}`} style={{ width: "80%", height: "35rem"  }} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      
      <div className="imgs-dev_poster_path">
        <div key={movies2.id}>
          <div>{movies2.original_title}</div>
          <div>{movies2.overview}</div>
          <div>{movies2.release_date}</div>
          <div>{movies2.vote_average}</div>
          <img
            className="movies-poster_path"
            src={`${img_path}${movies2.poster_path}`}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetiles;
