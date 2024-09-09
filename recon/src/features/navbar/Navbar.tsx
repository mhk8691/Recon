import { Typography, Button, Box } from "@mui/material";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "./Navbar.css";
const tab: Array<{ icon: React.ReactNode; text: string; link: string }> = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.25"
          stroke="#52525B"
        >
          <path d="M15.25,8.38v-1.384c0-.312-.146-.607-.395-.796l-5.25-3.99c-.358-.272-.853-.272-1.21,0L3.145,6.2c-.249,.189-.395,.484-.395,.796v7.254c0,1.104,.895,2,2,2h4.754"></path>
          <path d="M14.5,10.75l2.75,1.25v2.94c0,1.54-2.75,2.31-2.75,2.31,0,0-2.75-.77-2.75-2.31v-2.94l2.75-1.25Z"></path>
        </g>
      </svg>
    ),

    link: "/",
    text: "Dashboard",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <g
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.25"
          stroke="#52525B"
        >
          <circle
            cx="4.25"
            cy="5.25"
            r=".75"
            fill="currentColor"
            data-stroke="none"
            stroke="#52525B"
          ></circle>
          <circle
            cx="6.75"
            cy="5.25"
            r=".75"
            fill="currentColor"
            data-stroke="none"
            stroke="#52525B"
          ></circle>
          <circle
            cx="4.25"
            cy="12.75"
            r=".75"
            fill="currentColor"
            data-stroke="none"
            stroke="#52525B"
          ></circle>
          <circle
            cx="6.75"
            cy="12.75"
            r=".75"
            fill="currentColor"
            data-stroke="none"
            stroke="#52525B"
          ></circle>
          <rect
            x="1.75"
            y="2.75"
            width="14.5"
            height="5"
            rx="1.5"
            ry="1.5"
          ></rect>
          <rect
            x="1.75"
            y="10.25"
            width="14.5"
            height="5"
            rx="1.5"
            ry="1.5"
          ></rect>
        </g>
      </svg>
    ),
    link: "assets",
    text: "Assets",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <g
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.25"
          stroke="#52525B"
        >
          <path d="M15.581,5.954c.429,.926,.669,1.958,.669,3.046,0,4.004-3.246,7.25-7.25,7.25S1.75,13.004,1.75,9,4.996,1.75,9,1.75c2.002,0,3.815,.811,5.126,2.123"></path>
          <path d="M12.744,8.791c.004,.069,.006,.139,.006,.209,0,2.071-1.679,3.75-3.75,3.75s-3.75-1.679-3.75-3.75,1.679-3.75,3.75-3.75c1.036,0,1.973,.42,2.652,1.098"></path>
          <line x1="9" y1="9" x2="15.75" y2="2.25"></line>
        </g>
      </svg>
    ),
    link: "scans",
    text: "Scans",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <g
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.25"
          stroke="#52525B"
        >
          <path d="M2.665,5.086L8.534,1.995c.292-.154,.64-.154,.932,0l5.87,3.091c.534,.281,.534,1.046,0,1.327l-5.87,3.091c-.292,.154-.64,.154-.932,0L2.665,6.414c-.534-.281-.534-1.046,0-1.327Z"></path>
          <path d="M15.736,9c0,.261-.134,.523-.401,.664l-5.87,3.091c-.292,.154-.64,.154-.932,0l-5.87-3.091c-.267-.141-.401-.402-.401-.664"></path>
          <path d="M15.736,12.25c0,.261-.134,.523-.401,.664l-5.87,3.091c-.292,.154-.64,.154-.932,0l-5.87-3.091c-.267-.141-.401-.402-.401-.664"></path>
        </g>
      </svg>
    ),
    link: "templates",
    text: "Templates",
  },
];
const navStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: ".7rem 2rem",
  borderBottom: "1px solid #52525B",
};

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <Box component={Link} to={'/'} style={{ display: "flex", alignItems: "center" }}>
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
        <Button
          variant="contained"
          color="inherit"
          style={{ marginLeft: "1rem" }}
          onClick={() => navigate("/sign-in")}
        >
          Login
        </Button>
      </Box>
    </nav>
  );
}
