import React, { useStart, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { tokenContext } from "../../App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavDropdown, Nav, Badge } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const NavbarHead = () => {
  const { message, setMessage, myFavourites, setMyfavourites } =
    useContext(tokenContext);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            My.Movies
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Button
                variant="primary"
                onClick={() => {
                  navigate("/favourites");
                }}
              >
                My Favorite <Badge>{myFavourites.length}</Badge>
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
