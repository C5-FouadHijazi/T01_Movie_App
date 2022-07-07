import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { setAll } from "../redux/reducers/fav/fav";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const webLink = "http://image.tmdb.org/t/p/w500";

  const getMovies = () => {
    axios
      .post(
        `https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a`
      )
      .then((result) => {
        console.log(result);
        setMovies(result.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="home">
      <h2>Popular Movies</h2>
      <div className="img_jj">
        {movies &&
          movies.map((element, index) => {
            return (
              <div key={element.id}>
                <img
                  onClick={() => {
                    navigate(`/Detiles/${element.id}`);
                  }}
                  className="movies-poster_path"
                  src={`${webLink}${element.poster_path}`}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Homepage;
