import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

export const tokenContext = createContext();

function App() {
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
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </tokenContext.Provider>
    </div>
  );
}

export default App;
