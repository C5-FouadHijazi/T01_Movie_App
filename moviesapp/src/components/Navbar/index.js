import React, { useState, useContext, useEffect } from "react";
import { tokenContext } from "../../App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Button, Nav, Badge ,Form} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const NavbarHead = () => {

 const { message, setMessage, myFavourites, setMyfavourites } =
    useContext(tokenContext);

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(null);
  const [favorites, setFavorites] = useState([]);


  const getMovies = userList => {
    setMovies(userList);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("fav") || []);
    setFavorites(items);
  }, [myFavourites]);

  return (
    <div>
      <Navbar   bg="dark" variant="dark"  >
        <Container style={{
                height: "3.5rem"
            }}>
          <Navbar.Brand  href="/" ><img id="glow" src="https://i.ibb.co/7RRRNbb/Untitled-design-3-removebg-preview.png" alt="Untitled-design-3-removebg-preview" border="0"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Form  style={{color:"red"}} className="d-flex">
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{width:"15rem"}}
              onChange={e => setSearch(e.target.value)}
            />
            <Button variant="outline-success" style={{color:"red"}}>Search</Button>
          </Form>
          <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="me-auto"></Nav>
            <Nav.Link href="/" style={{color:"red"}}>Movies</Nav.Link>
            <Nav.Link href="/TV"  style={{color:"red"}}>TVs</Nav.Link>
            <Nav.Link href="/Trending"  style={{color:"red"}}>Trending</Nav.Link>
            <Nav>
              <Button variant="primary" href="/favourites" style={{background:"black"}}>
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

export default NavbarHead;
