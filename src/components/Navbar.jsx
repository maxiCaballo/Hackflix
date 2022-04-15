import { Link } from "react-router-dom"; //
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" className="navbar" expand="lg">
      <Container className="ps-4">
        <Link to="/">
          <span className="fs-3 header-logo">
            <i className="fa-solid fa-clapperboard text-light fs-4 me-2"></i>
            Hackflix
          </span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="d-flex align-items-center navbar-item mx-4">
              Home
            </Link>
            <Link
              to="/search-title"
              className="d-flex align-items-center navbar-item mx-4"
            >
              Search by title
            </Link>
            <Link
              to="/about"
              className="d-flex align-items-center navbar-item mx-4"
            >
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
/*
    <div className=" d-flex justify-content-between header_firstChild">
      <div className="mx-4 w-25 d-flex align-items-center justify-content-between header_logo_button_container">
        <Link to="/">
          <span className="fs-3 header-logo">
            <i className="fa-solid fa-clapperboard text-light fs-4"></i>
            Hackflix
          </span>
        </Link>

        <Button aria-haspopup="true" variant="text" color="error">
          <span className="navbar-item">Contact</span>
        </Button>
      </div>
      <div className="mx-4">
        <DropDown />
      </div>
    </div>
*/
