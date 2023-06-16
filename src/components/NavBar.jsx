import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NAvBar = () => (

    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Romio</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#productos">Todos Los Productos</Nav.Link>
        <Nav.Link href="#contacto">Contacto</Nav.Link>
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
)