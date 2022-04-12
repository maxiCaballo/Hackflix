import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
//import { Sling as Hamburger } from "hamburger-react";

export default function DropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="outlined"
        color="error"
        className="mt-1"
      >
        <span id="dropdown" className="mx-2">
          Go to
        </span>
        ▼
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link to="/search-title" className="text-decoration-none text-dark">
            Search by Title
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/" className="text-decoration-none text-dark">
            Search by Rating
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/" className="text-decoration-none text-dark">
            About us
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
