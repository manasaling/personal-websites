import React from "react"
import {Nav, NavDropdown, Navbar, Form, Button, FormControl} from "react-bootstrap"
import Link from 'next/link'

function NavigationBar() {
  return (
    <div className="navbar-body" >
    <>
  <Navbar bg="dark" variant="dark">
    
    <Nav className="mr-auto">
      

    <Link href="/" passHref>
      <Nav.Link>Home</Nav.Link> 
    </Link>
    <Link href="Projects" passHref>
      <Nav.Link>Projects</Nav.Link> 
    </Link>
    <Link href="Contact" passHref>
      <Nav.Link>Contact</Nav.Link> 
    </Link>
    </Nav>
   
  </Navbar>
  
 
</>
    </div>
  );
}

export default NavigationBar;