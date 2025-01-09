import {
  Box,
  Typography,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { scanObject } from "./scan.object";
const options: Array<string> = ["Update", "Delete", "Export"];

const headerStyle: React.CSSProperties = {
  backgroundColor: "#121214",
  padding: ".1rem 0",
  border: "1px solid #3F3F46",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
};
const bodyStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: ".1rem 0",
  paddingTop: "1rem",
  cursor: "pointer",
};
const ITEM_HEIGHT = 48;
export default function AssetsList() {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box mt={2}>
      <Box sx={headerStyle} gap={14}>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          sx={{
            color: "#808087",
            "&.Mui-checked": {
              color: "white",
            },
          }}
        />
        <Typography variant="body2" color="#808087" sx={{ fontSize: ".8rem" }}>
          Scan Name
        </Typography>
        <Typography variant="body2" color="#808087" sx={{ fontSize: ".8rem" }}>
          SEVERITY BREAKDOWN
        </Typography>
        <Typography variant="body2" color="#808087" sx={{ fontSize: ".8rem" }}>
          TEMPLATES
        </Typography>
        <Typography variant="body2" color="#808087" sx={{ fontSize: ".8rem" }}>
          ASSETS
        </Typography>
        <Typography variant="body2" color="#808087" sx={{ fontSize: ".8rem" }}>
          DURATION
        </Typography>
        <Typography variant="body2" color="#808087" sx={{ fontSize: ".8rem" }}>
          LAST UPDATED
        </Typography>
      </Box>
      {scanObject.map((assets, index) => (
        <Box
          key={index}
          sx={{
            borderBottom: "1px solid #3F3F46",
            "&:hover": {
              bgcolor: "#141414",
            },
          }}
          style={bodyStyle}
        >
          <Checkbox
            checked={checked}
            sx={{
              color: "#808087",
              "&.Mui-checked": {
                color: "white",
              },
            }}
          />
          <Typography
            variant="body2"
            color="#808087"
            sx={{ fontSize: ".8rem", ml: 10 }}
          >
            <span
              style={{
                backgroundColor: "#0B2818",
                borderRadius: "100%",
                padding: ".1rem",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 18 10"
                data-state="delayed-open"
                aria-describedby="radix-:r5d8:"
              >
                <g
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.75"
                  stroke="#146332"
                >
                  <polyline points="2.75 9.5 6.5 13.25 15.25 4.5"></polyline>
                </g>
              </svg>
            </span>
            {assets.name}
          </Typography>
          <Typography
            variant="body2"
            color="#808087"
            sx={{ fontSize: ".8rem", ml: 5 }}
          >
            <span
              style={{
                backgroundColor: "#3D161E",
                color: "#D73954",
                padding: ".3rem 1.5rem",
                borderStartStartRadius: "5px",
                borderEndStartRadius: "5px",
              }}
            >
              {assets.severity[0]}
            </span>
            <span
              style={{
                backgroundColor: "#3F2212",
                color: "#DF6815",
                padding: ".3rem 1.5rem",
                marginLeft: ".1rem",
              }}
            >
              {assets.severity[1]}
            </span>
            <span
              style={{
                backgroundColor: "#15110B",
                color: "#44360A",
                padding: ".3rem 1.5rem",
                marginLeft: ".1rem",
              }}
            >
              {assets.severity[2]}
            </span>
            <span
              style={{
                backgroundColor: "#0E0E19",
                color: "#2C2F50",
                padding: ".3rem 1.5rem",
                marginLeft: ".1rem",
              }}
            >
              {assets.severity[3]}
            </span>
            <span
              style={{
                backgroundColor: "#0E2E1C",
                color: "#41C471",
                padding: ".3rem 1.5rem",
                marginLeft: ".1rem",
              }}
            >
              {assets.severity[4]}
            </span>
            <span
              style={{
                backgroundColor: "#0D0D10",
                color: "#37373B",
                padding: ".3rem 1.5rem",
                marginLeft: ".1rem",
                borderEndEndRadius: "5px",
                borderStartEndRadius: "5px",
              }}
            >
              {assets.severity[5]}
            </span>
          </Typography>
          <Typography
            variant="body2"
            color="#808087"
            sx={{ fontSize: ".8rem", ml: 2 }}
          >
            <span style={{ color: "white" }}>{assets.templates}</span> templates
          </Typography>
          <Typography
            variant="body2"
            color="#808087"
            sx={{ fontSize: ".8rem", ml: 10 }}
          >
            {assets.assets} assets
          </Typography>
          <Typography
            variant="body2"
            color="#808087"
            sx={{ fontSize: ".8rem", ml: 12 }}
          >
            {assets.duration}
          </Typography>
          <Typography
            variant="body2"
            color="#808087"
            sx={{ fontSize: ".8rem", ml: 18 }}
          >
            {assets.last_updated}
          </Typography>

          <div>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              sx={{ color: "#9898A1", ml: 8 }}
            >
              <MoreVertIcon sx={{ fontSize: "1.3rem" }} />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                paper: {
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                  sx={{ fontSize: ".8rem" }}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Box>
      ))}
    </Box>
  );
}
