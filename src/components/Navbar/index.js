import React, { useState, useContext, useEffect } from "react";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import { tokenContext } from "../../App";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Navbar, Button, Nav, Badge, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const NavbarHead = () => {

  const { message, setMessage, myFavourites, setMyfavourites } =
    useContext(tokenContext);

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [check, setCheck] = useState(true);
  const [page, setPage] = useState(2);


   const { id } = useParams(); 


  const searchFunction = (searchInput) => {
    setPage(page + 1);
    if (searchInput.length === 0) {
      setCheck(false);
    } else {
      axios
        .get(
         `https://api.themoviedb.org/3/search/company?api_key=1bfa430aada4409bfa6a3c5528128e8a&${page}`
        )
        .then((result) => {
          console.log(result);
          result.data.result.filter((element, index) => {
            return element.title.includes(searchInput);
          });
          setMovies(result.data.results);
          if (search.length === 0) {
            setCheck(false);
          } else {
            setCheck(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }

  

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("fav") || []);
    console.log("items", items)
    setFavorites(items);
  }, []);



  return (
    <div>
      <Navbar bg="dark" variant="dark"  >
        <Container style={{
          height: "3.5rem"
        }}>
          <Navbar.Brand href="/" ><img id="glow" src="https://i.ibb.co/7RRRNbb/Untitled-design-3-removebg-preview.png" alt="Untitled-design-3-removebg-preview" border="0" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Form style={{ color: "red" }} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search ..."
              className="me-2"
              aria-label="Search"
              style={{ width: "15rem" }}
              onChange={(e) => {
                setSearch(e.target.value);
                
                searchFunction(e.target.value)
              }}

            />
            <Button variant="outline-success" style={{ color: "red" }}>Search</Button>
          </Form>
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto"></Nav>
            <Nav.Link href="/" style={{ color: "red" }}>Movies</Nav.Link>
            <Nav.Link href="/TV" style={{ color: "red" }}>TVs</Nav.Link>
            <Nav.Link href="/Trending" style={{ color: "red" }}>Trending</Nav.Link>
            <Nav>
              <Button variant="primary" href="/favourites" style={{ background: "black" }}>
                My Favorite <Badge>{favorites.length}</Badge>
                <span className="visually-hidden">Added</span>
              </Button>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarHead
