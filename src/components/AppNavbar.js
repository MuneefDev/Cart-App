import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";

function AppNavbar() {
  const cart = useSelector((state) => state.cart);
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Link to={"/"} className="navbar-brand">
          CartApp
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"} className="nav-link">
              Product
            </Link>
            <Link to={"/cart"} className="nav-link">
              Cart - <span id="card-counter">{cart.length}</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
