import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { setAll } from "../redux/reducers/fav/fav";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Detiles = () => {
  const [Detiles, setDetiles] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const webLink = "http://image.tmdb.org/t/p/w500";

  const getDetiles = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
      )
      .then((result) => {
        console.log(result);
        setDetiles(result.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getDetiles();
  }, []);

  return (
    <div className="Detiles">
      <div className="imgs-dev_poster_path">
        <div key={Detiles.id}>
          <div>{Detiles.original_title}</div>
          <div>{Detiles.overview}</div>
          <div>{Detiles.release_date}</div>
          <div>{Detiles.vote_average}</div>
          <img
            className="movies-poster_path"
            src={`${webLink}${Detiles.poster_path}`}
          />
        </div>
      </div>
    </div>
  );
};
export default Detiles;
