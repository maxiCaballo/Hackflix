import DropDown from "./DropDown";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
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
  );
}

export default Navbar;
