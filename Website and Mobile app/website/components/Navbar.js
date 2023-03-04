import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">My I-Pond</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
            <NavDropdown title="Details" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ph">pH</NavDropdown.Item>
              <NavDropdown.Item href="/temperature">
                Temperature
              </NavDropdown.Item>
              <NavDropdown.Item href="/status">Status</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/recommendation">
                Recommendation
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
