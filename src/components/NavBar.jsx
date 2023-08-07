import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";
import data from "../data/products.json"
import { Link } from "react-router-dom";

const categories = data.map(products => products.segmento)

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
          to={`/segmento/${item}`}>{item}
          </NavLink>
        ))}
        
      </Nav>
      <Link to="/carrito">
        <CartWidget />
      </Link>
    </Container>
  </Navbar>
) 