import React, { useState, useContext, useEffect } from "react";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import Slideshow from "../slider";
import "react-slideshow-image/dist/styles.css";
const Home = () => {
  const [movies, SetMovies] = useState([]);
  const [load, setLoad] = useState([]);
  const [page, setPage] = useState(2);

  const img_path = "http://image.tmdb.org/t/p/w500";

  const { id } = useParams();
  const navigate = useNavigate();

  const moveies_render = () => {
    axios
      .post(
        `https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a`
      )
      .then((result) => {
        SetMovies(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const load_more = () => {
    setPage(page + 1);
    axios
      .post(
        `https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a&page=${page}`
      )

      .then((result) => {
        setLoad(result.data.results);
        SetMovies([...movies, ...result.data.results]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    moveies_render();
  }, []);

  return (
    <div>
      <Slideshow />
      <h2>Popular Movies</h2>
      <div className="imgs-dev_poster_path">
        {movies &&
          movies.map((element, index) => {
            return (
              <div key={element.id}>
                <img 
                  onClick={() => {
                    navigate(`/movieDetiles/${element.id}`);
                  }}
                  className="movies-poster_path"
                  src={`${img_path}${element.poster_path}`}
                  
                />
              </div>
            );
          })}
      </div>
      <div className="d-flex justify-content-center">
        <Button
          variant="dark"
          size="lg"
          onClick={() => {
            load_more();
          }}
        >
          Load More
        </Button>{" "}
      </div>
      
    </div>
  );
};

export default Home;
