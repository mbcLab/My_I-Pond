import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navigation() {
  return (
    <div className="grid grid-cols-2 max-h-12 m-2 sticky text-center">
      <div className="max-w-fit pl-2">
        <a href="/">
          <img src="./logo.png" alt="MBC Laboratory" className="max-h-12" />
        </a>
      </div>
      <div className="right">
        <a href="https://www.instagram.com/mbclab/" target="_blank">
          <img
            src="./logo_circle.ico"
            alt="burger"
            className="max-h-12"
            style={{ float: "right" }}
          />
        </a>
      </div>
    </div>
  );
}
