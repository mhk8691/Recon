import { Box, MenuItem, Button, Menu } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Sort() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Box>
      <Button
        variant="contained"
        size="small"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          bgcolor: "#09090B",
          color: "white",
          fontSize: ".7rem",
          borderRadius: 2,
          border: "1px solid #27272A",
          py: ".5rem",
          "&:hover": {
            bgcolor: "#18181B",
          },
        }}
      >
        Edit Columns
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose} sx={{ fontSize: ".9rem" }}>
          Option 1
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: ".9rem" }}>
          Option 2
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: ".9rem" }}>
          Option 3
        </MenuItem>
      </Menu>
    </Box>
  );
}
