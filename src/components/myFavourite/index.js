import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tokenContext } from "../../App";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Button, Card } from "react-bootstrap";


const Favourites = () => {
  const { message, setMessage, myFavourites, setMyfavourites } =
    useContext(tokenContext);

  const [favorites, setFavorites] = useState([]);

  const img_path = "http://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("fav"));
    setFavorites(items);
  }, []);

  const removeItem = (element) => {
    let temp = favorites.filter((removedItem) => {
      return removedItem.id !== element.id;
    });
    localStorage.setItem("fav", JSON.stringify(temp));
    setFavorites(temp);
  };

  return (
    <div>
      <div className="imgs-dev_poster_path">
        {favorites &&
          favorites.map((element, index) => {
            return (
              <>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`${img_path}${element.poster_path}`}
                  />
                  
                    <Button
                      onClick={() => {
                      
                        removeItem(element);
                        setMyfavourites(myFavourites);
                      
                      }}
                      variant="primary"
                    >
                      {" "}
                      Delete
                    </Button>
                 
                </Card>
                <div key={element.id}></div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Favourites;
