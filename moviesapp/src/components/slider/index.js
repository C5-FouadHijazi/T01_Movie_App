import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import { Zoom } from "react-slideshow-image";

// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 300,
  infinite: true,
  indicators: true,
  scale: 0.1,
  arrows: true,
};

const img_path = "http://image.tmdb.org/t/p/w500";

const Slideshow = () => {
  const [images, Setimages] = useState([]);

  useEffect(() => {
    axios
      .post(
        "https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a"
      )
      .then((result) => {
        console.log(result);
        Setimages(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images &&
          images.map((element, index) => (
            
            <img
              style={{ width: "100%", height: "35rem" }}
              key={element.id}
              src={`${img_path}${element.backdrop_path}`}
            />
          ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
