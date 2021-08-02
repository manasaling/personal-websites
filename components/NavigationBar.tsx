import React from "react";
import {
  Nav,
  NavDropdown,
  Navbar,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import Link from "next/link";
import styles from "./NavigationBar.module.css";
function NavigationBar() {
  return (
    <Navbar className={styles.colorNav} variant="dark">
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
  );
}

export default NavigationBar;
