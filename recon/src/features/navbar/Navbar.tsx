import { Typography, Button, Box, IconButton } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "./Navbar.css";
import { tab } from "./navbar.object";
import { useState } from "react";
import Modal from "./Modal";
const navStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: ".7rem 2rem",
  borderBottom: "1px solid #52525B",
  backgroundColor: "#0E0B0B",
};

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setMenu(false);
  };
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal open={open} handleClose={handleClose} />
      <nav style={navStyle}> 
        <Box
          component={Link}
          to={"/"}
          style={{ display: "flex", alignItems: "center" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9688 2.0043C5.42727 1.69307 2.31157 18.3581 12.7067 22.5173M31.9957 21.865C32.3073 5.34145 15.6241 2.22913 11.4604 12.6129M12.1402 31.9957C28.6817 32.3069 31.7974 15.6419 21.4023 11.4827M2.00431 12.0486C1.69274 28.5721 18.3759 31.6845 22.5396 21.3006"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            ></path>
          </svg>
          <Typography
            variant="body2"
            component="h1"
            color="rgba(161, 161, 171)"
            sx={{ ml: 1 }}
          >
            BETA
          </Typography>
        </Box>
        <Box
          border={1}
          borderColor="#52525B"
          borderRadius="10px"
          padding="0.2rem"
          marginLeft={5}
        >
          {tab.map((item, index) => {
            return (
              <Button
                variant="text"
                sx={{ mx: ".3rem" }}
                color="inherit"
                key={index}
                component={NavLink}
                to={item.link}
                className="navbar"
              >
                {item.icon}
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    ml: 0.5,
                    fontSize: ".7rem",
                    color: "rgba(161, 161, 171)",
                  }}
                  key={index}
                >
                  {item.text}
                </Typography>
              </Button>
            );
          })}
        </Box>
        <Box>
          <a href="/contact" style={{ color: "rgba(161, 161, 171)" }}>
            Changelog
          </a>
          <a
            href="/contact"
            style={{ marginLeft: "1rem", color: "rgba(161, 161, 171)" }}
          >
            Docs
          </a>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            sx={{ ml: 2 }}
            onClick={() => setMenu(!menu)}
          >
            <AccountCircle sx={{ color: "#9898A1" }} fontSize="large" />
          </IconButton>
          {menu && (
            <Box
              border={1}
              borderColor={"#27272A"}
              borderRadius={1}
              width={"234px"}
              position={"absolute"}
              zIndex={"1000"}
              bgcolor={"#0E0B0B"}
            >
              <Box py={1} px={2}>
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <AccountCircle fontSize={"large"} sx={{ color: "#9898A1" }} />
                  <Typography variant="body2" color="#9898A1">
                    @username
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="inherit"
                  size="small"
                  fullWidth
                  sx={{ bgcolor: "#6366F1", color: "white", mt: 2 }}
                >
                  Upgrade to Pro
                </Button>
              </Box>
              <hr style={{ borderColor: "#27272A" }} />
              <Box py={1} px={2}>
                <Typography
                  variant="body2"
                  color="#9898A1"
                  component={Link}
                  to=""
                  sx={{ mt: 0.5, display: "block" }}
                  onClick={handleOpen}
                >
                  API key
                </Typography>
                <Typography
                  variant="body2"
                  color="#9898A1"
                  component={Link}
                  to="settings"
                  sx={{ mt: 1, display: "block" }}
                  onClick={() => setMenu(false)}
                >
                  Settings
                </Typography>
                <Typography
                  variant="body2"
                  color="#9898A1"
                  component={"a"}
                  href="https://projectdiscovery.io/terms"
                  target="_blank"
                  sx={{ mt: 1, display: "block" }}
                  onClick={() => setMenu(false)}
                >
                  Terms
                </Typography>
                <Typography
                  variant="body2"
                  color="#9898A1"
                  component={Link}
                  to=""
                  sx={{ mt: 1, display: "block" }}
                  onClick={() => setMenu(false)}
                >
                  Logout
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </nav>
    </>
  );
}
