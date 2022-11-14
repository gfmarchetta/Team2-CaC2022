import "./navbar.css";
import { Buscador } from "../Buscador/Buscador";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img alt="Logo" src={props.src} width={props.size} className="d-inline-block align-top"/></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" activeClassname>Home</Nav.Link>
          <Nav.Link href="../LogIn">Login</Nav.Link>
        </Nav>
        <Buscador />
      </Container>
    </Navbar>
  );
}

NavBar.defaultProps = {
  size: 90,
};
