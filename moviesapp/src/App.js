import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, createContext, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

import Home from "./components/home";
import NavbarHead from "./components/navbar";

export const tokenContext = createContext();

function App() {
  const [message, setMessage] = useState("");
  const [myFavourites, setMyfavourites] = useState([]);

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
        </Routes>
      </tokenContext.Provider>
    </div>
  );
}

export default App;
