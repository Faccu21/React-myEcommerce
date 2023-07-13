import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";
import data from "../data/products.json"
import { Link } from "react-router-dom";

const categories = data.map(products => products.marca)

const unique = new Set(categories)
 

export const NavBar = () => (

    <Navbar bg="dark" variant="dark">
    <Container>
      <Link to={'/'}>
        <Navbar.Brand>Romio</Navbar.Brand>
      </Link>
      <Nav className="me-auto">
        {[...unique].map(item => (
          <NavLink 
          key={item} 
          className="nav-link" 
          to={`/marca/${item}`}>{item}
          </NavLink>
        ))}
        
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
)