import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, createContext, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

import Home from "./components/home";
import NavbarHead from "./components/navbar";
import MovieDetiles from "./components/MovieDetiles/MovieDetiles";
import Favourites from "./components/myFavourite";
import TV from "./components/Tv";
import Trinding from "./components/trending";

export const tokenContext = createContext();

function App() {

  const [message, setMessage] = useState("");
  const [myFavourites, setMyfavourites] = useState( JSON.parse(localStorage.getItem("fav")) || []);

console.log(myFavourites,"app")

  return (
    <div className="App">
      <tokenContext.Provider
        value={{
          message,
          setMessage,
          myFavourites,
          setMyfavourites,
        }}
      >
        <NavbarHead />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/movieDetiles/:id" element={<MovieDetiles />} />

          <Route path="/favourites" element={<Favourites />} />

          
          <Route path="/TV" element={<TV />} />

          <Route path="/Trending" element={<Trinding />} />


       

        </Routes>
      </tokenContext.Provider>
    </div>
  );
}

export default App;
