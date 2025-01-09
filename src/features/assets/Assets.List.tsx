import {
  Box,
  Typography,
  Checkbox,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { assetsListObject } from "./Assets.data";
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
  marginTop: "1rem",
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
    <Box mt={3}>
      <Box sx={headerStyle} gap={10}>
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
          Assets name
        </Typography>
        <Typography variant="body2" color="#808087" sx={{ fontSize: ".8rem" }}>
          SOURCE
        </Typography>
        <Typography variant="body2" color="#808087" sx={{ fontSize: ".8rem" }}>
          TOTAL ASSETS
        </Typography>
        <Typography variant="body2" color="#808087" sx={{ fontSize: ".8rem" }}>
          DURATION
        </Typography>
        <Typography variant="body2" color="#808087" sx={{ fontSize: ".8rem" }}>
          LAST UPDATED
        </Typography>
      </Box>
      {assetsListObject.map((assets, index) => (
        <Box
          key={index}
          sx={{
            border: "1px solid #3F3F46",
            borderRadius: "5px",
          }}
          gap={13.5}
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
            sx={{ fontSize: ".8rem" }}
          >
            {assets.name}
          </Typography>
          <Typography
            variant="body2"
            color="#808087"
            sx={{ fontSize: ".8rem" }}
          >
            {assets.source}
          </Typography>
          <Typography
            variant="body2"
            color="#808087"
            sx={{ fontSize: ".8rem" }}
          >
            {assets.total_assets}
          </Typography>
          <Typography
            variant="body2"
            color="#808087"
            sx={{ fontSize: ".8rem" }}
          >
            {assets.duration}
          </Typography>
          <Typography
            variant="body2"
            color="#808087"
            sx={{ fontSize: ".8rem" }}
          >
            {assets.last_updated}
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              fontSize: ".6rem",
              color: "#9A9AA3",
              border: "1px solid #2C2C2C",
            }}
            startIcon={<WifiTetheringIcon sx={{ color: "#676EB8" }} />}
            size="small"
          >
            Start vulnerability scan
          </Button>
          <div>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              sx={{ color: "#9898A1" }}
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
