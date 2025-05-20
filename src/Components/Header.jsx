import { Menu, MenuItem, Avatar, IconButton, Badge } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHomeNavigate = () => {
    navigate("/");
  };

  const notificationsLabel = (count) => {
    if (count === 0) {
      return "no notifications";
    }
    if (count > 99) {
      return "more than 99 notifications";
    }
    return `${count} notifications`;
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "var(---bgcolor1)",
        padding: "0rem 1rem",
      }}
    >
      <h1
        onClick={handleHomeNavigate}
        style={{
          color: "var(---primaryColor)",
          marginLeft: "1rem",
          cursor: "pointer",
        }}
      >
        Cert Manager
      </h1>
      <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
        <IconButton aria-label={notificationsLabel(1)}>
          <Badge badgeContent={1} color="secondary">
            <MailIcon sx={{ color: "#948979" }} />
          </Badge>
        </IconButton>
        <Avatar
          alt="Upload new avatar"
          src={""}
          sx={{ width: "20px", height: "20px" }}
          onClick={handleClick}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </header>
  );
};
