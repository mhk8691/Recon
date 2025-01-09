import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { Box, Radio, Typography } from "@mui/material";
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,

    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        sx={{ bgcolor: "#18181B" }}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        startIcon={<CircleOutlinedIcon />}
      >
        Open
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <Typography variant="body1" color="black">
                Edit
              </Typography>
              <Typography variant="body2" color="black" sx={{ mt: 1 }}>
                Newly discovered vulnerabilities. Will <br /> remain open until
                reviewed or retested.
              </Typography>
            </Box>
            <Box>
              <Radio
                value="b"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
              />
            </Box>
          </Box>
        </MenuItem>
        <hr />
        <MenuItem onClick={handleClose} disableRipple>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <Typography variant="body1" color="black">
                Edit
              </Typography>
              <Typography variant="body2" color="black" sx={{ mt: 1 }}>
                Newly discovered vulnerabilities. Will <br /> remain open until
                reviewed or retested.
              </Typography>
            </Box>
            <Box>
              <Radio
                value="b"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
              />
            </Box>
          </Box>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
