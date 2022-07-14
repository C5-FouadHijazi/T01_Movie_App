import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { tokenContext } from "../../App";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Button, Card, Container, Row, Col, Modal } from "react-bootstrap";


import "./MovieDetiles.scss";

const MovieDetiles = () => {
  const { message, setMessage, myFavourites, setMyfavourites } =
    useContext(tokenContext);

  const [movies2, SetMovies2] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    setIsActive(true);
  };

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

  let found = false;
  let deleteIndex;
  const deleteFromFav = myFavourites.splice(deleteIndex, 1);
  return (
    <div>
      <div class="movie_card" id="bright">
        <div class="info_section">
          <div class="movie_header">
            <img class="locandina" src={`${img_path}${movies2.poster_path}`} />
            <h1>{movies2.original_title}</h1>
            <h4>{movies2.tagline}</h4>
            <span class="minutes">{movies2.runtime} min</span>
            <span class="minutes">{movies2.vote_average} rate</span>
            <p class="type">{movies2.original_language}</p>
          </div>
          <div class="movie_desc">
            <p class="text">{movies2.overview}</p>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="fav_btn"
              style={{
                color: isActive ? "black" : "",
                color: isActive ? "red" : "",
              }}
              onClick={() => {
                console.log("fav:", myFavourites)
                myFavourites.forEach((elem, i) => {
                  if (elem.id === movies2.id) {
                    found = true;
                    deleteIndex = i;
                    setMyfavourites(deleteFromFav)
                    localStorage.setItem("fav", deleteFromFav);
                  }
                  if (found) {
                    //deleteFromFav =  myFavourites.splice(deleteIndex, 1);
                    setMyfavourites(deleteFromFav)
                    
                  } else {
                    setMyfavourites([...myFavourites, movies2]);
                    localStorage.setItem("fav", JSON.stringify([...myFavourites, movies2]));
                  }
                });
                setMyfavourites([...myFavourites, movies2]);
                localStorage.setItem("fav", JSON.stringify([...myFavourites, movies2]));
                handleShow();
                handleClick();
              }}

            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-suit-heart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
              </svg>
            </button>
          </div>
        </div>
        <div class="blur_back bright_back">
          <img
            style={{
              height: "35rem",
            }}
            class="card-img"
            src={`${img_path}${movies2.backdrop_path}`}
            alt="Card image"
          />
          <>
            <Modal style={{ color: "black" }}
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Favourite</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Would you like to add this movie to the you'r favourite list
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  yes
                </Button>
                <Button variant="primary" onHide={handleClose} >close</Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>

      </div>
    </div>
  );
};

export default MovieDetiles;
