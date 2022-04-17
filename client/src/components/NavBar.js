import React, { useContext, useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import { authContext } from './../providers/AuthProvider';
export default function NavBar() {
   const location = useNavigate();
   const { auth  } = useContext(authContext);

   function navigate(loc) {
       location(loc);
   }
  return (
      <>
        <div>

            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Navbar.Brand href="#">NutriPlanner</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate("/favourites")}>Favourites</Nav.Link>
                        <Nav.Link onClick={() => navigate("/history")}>History</Nav.Link>
                        {!auth && <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>}
                        {auth && <Nav.Link onClick={() => navigate("/info")}>User Info</Nav.Link>}

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
        </>
)
};