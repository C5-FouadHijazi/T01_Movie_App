import React, { useState, useContext, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { tokenContext } from "../../App";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Button, Card ,Container,Row, Col} from "react-bootstrap";

const MovieDetiles = () => {
  const { message, setMessage, myFavourites, setMyfavourites } =
    useContext(tokenContext);

  const [movies2, SetMovies2] = useState([]);

  const img_path = "http://image.tmdb.org/t/p/w500";

  const { id } = useParams();

  const getDeitels = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
      )
      .then((result) => {
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

{/* <Container>
      <Row style={{
          backgroundImage: `url(http://image.tmdb.org/t/p/w500/${movies2.backdrop_path})`,
        }}
>
        <Col xs={2} xl={4} ><img
          class="card-img"
          src={`${img_path}${movies2.backdrop_path}`}
          alt="Card image"
        /></Col>
        <Col >Second, but unordered</Col>
        <Col >Third, but first</Col>
      </Row>
    </Container> */}


      <div class="card bg-dark text-white">
        <img style={{
          height:"35rem"
        }}
          class="card-img"
          src={`${img_path}${movies2.backdrop_path}`}
          alt="Card image"
        />
        <div class="card-img-overlay">
          <h2 class="card-title">{movies2.original_title}</h2>
          <p class="card-text">{movies2.overview}</p>
          <p class="card-text">Release Date : {movies2.release_date}</p>
          <p class="card-text">Vote Average : {movies2.vote_average}</p>
          <Button
            onClick={() => {
              setMyfavourites([...myFavourites, movies2]);
              localStorage.setItem(
                "fav",
                JSON.stringify([...myFavourites, movies2])
              );
            }}
          >
            Add to Favourite
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetiles;

