import {
  Box,
  MenuItem,
  Button,
  Menu,
  TextField,
  Typography,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import CodeIcon from "@mui/icons-material/Code";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
import AddIcon from "@mui/icons-material/Add";
import RadarOutlinedIcon from "@mui/icons-material/RadarOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";

type InfoType = {
  title: string;
  count: number;
};
type SelectType = {
  count: number | string;
  text: string;
  icon: React.ReactNode;
  info: InfoType[];
};

function Date({ hasFilter }: { hasFilter: boolean }) {
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
        startIcon={hasFilter ? <CalendarMonthIcon /> : null}
        endIcon={hasFilter ? <KeyboardArrowDownIcon /> : null}
        sx={{
          bgcolor: "#2C2C2C",
          color: "#9D9D9D",
          fontSize: ".7rem",
          borderRadius: 2,
        }}
      >
        {hasFilter ? "Date" : <AddIcon fontSize="small" />}
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
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </Box>
  );
}

function Select({ object }: { object: SelectType }) {
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
        startIcon={object.icon}
        endIcon={
          <div
            style={{
              backgroundColor: "#ADADAD",
              borderRadius: "5px",
              fontSize: ".6rem",
              color: "black",
              padding: "0 .5rem",
            }}
          >
            {object.count}
          </div>
        }
        sx={{
          bgcolor: "#2C2C2C",
          color: "#9D9D9D",
          fontSize: ".65rem",
          borderRadius: 2,
        }}
      >
        {object.text}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <TextField
          label="search"
          id="outlined-size-small"
          size="small"
          sx={{ mx: 1, mb: 1, py: "0" }}
        />
        {object.info.map((info, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              variant="body1"
              color="white"
              sx={{
                bgcolor: "black",
                p: ".1rem .5rem",
                borderRadius: "1rem",
                fontSize: ".8rem",
              }}
            >
              {info.title}
            </Typography>
            <Typography
              variant="body1"
              color="white"
              sx={{
                bgcolor: "#ADADAD",
                p: ".1rem .3rem",
                borderRadius: "5px",
                fontSize: ".8rem",
                color: "black",
              }}
            >
              {info.count}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
        sx={{ bgcolor: "#2C2C2C", color: "#A8A8A9", height: "27px" }}
      >
        <FileDownloadOutlinedIcon fontSize="small" />
        <Typography
          variant="body2"
          color="white"
          sx={{
            bgcolor: "#ADADAD",
            borderRadius: "5px",
            color: "black",
            fontSize: ".6rem",
            ml: 1,
            py: ".1rem",
            px: ".3rem",
          }}
        >
          16.99k
        </Typography>
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
        <MenuItem onClick={handleClose}>JSON</MenuItem>
        <MenuItem onClick={handleClose}>CSV</MenuItem>
        <MenuItem onClick={handleClose}>RAV</MenuItem>
      </Menu>
    </div>
  );
}

export default function SortFilter() {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box display={"flex"} gap={.5} mt={4} >
        <Date hasFilter={true} />
        <Select
          object={{
            count: "2.89k",
            text: "Host",
            icon: <HomeOutlinedIcon />,
            info: [{ title: "hello", count: 10 }],
          }}
        />
        <Select
          object={{
            count: 10,
            text: "cname",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="8" y="8" width="8" height="8" rx="2"></rect>
                <path d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"></path>
                <path d="M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"></path>
              </svg>
            ),
            info: [
              { title: "hello", count: 914 },
              { title: "hellohellohellohellohello", count: 10 },
            ],
          }}
        />
        <Select
          object={{
            count: "1.86k",
            text: "ip",
            icon: <PinDropOutlinedIcon />,
            info: [
              { title: "hello", count: 914 },
              { title: "hellohellohellohellohello", count: 10 },
            ],
          }}
        />
        <Select
          object={{
            count: 382,
            text: "technologies",
            icon: <CodeIcon />,
            info: [
              { title: "hello", count: 914 },
              { title: "hellohellohellohellohello", count: 10 },
            ],
          }}
        />
        <Select
          object={{
            count: 547,
            text: "title",
            icon: <SubtitlesOutlinedIcon />,
            info: [
              { title: "hello", count: 914 },
              { title: "hellohellohellohellohello", count: 10 },
            ],
          }}
        />
        <Date hasFilter={false} />
      </Box>
      <Box mt={4} gap={0.5} display={"flex"} alignItems={"center"}>
        <div
          style={{
            backgroundColor: "#2C2C2C",
            padding: 2,
            color: "#ADADAD",
            borderRadius: "5px",
            display: "inline-block",
            width: "30px",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 12"
          >
            <g
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              stroke="currentColor"
            >
              <path d="M13.25,3.75H5.477c-.302,0-.587,.136-.777,.371L.75,9l3.95,4.879c.19,.235,.475,.371,.777,.371h7.773c1.105,0,2-.895,2-2V5.75c0-1.105-.895-2-2-2Z"></path>
              <line x1="6.75" y1="6.75" x2="11.25" y2="11.25"></line>
              <line x1="11.25" y1="6.75" x2="6.75" y2="11.25"></line>
            </g>
          </svg>
        </div>
        <Button
          variant="contained"
          size="small"
          startIcon={<RadarOutlinedIcon />}
          sx={{
            bgcolor: "#2C2C2C",
            fontSize: ".6rem",
            color: "#A8A8A9",
          }}
        >
          Start scan
          <Typography
            variant="body2"
            color="white"
            sx={{
              bgcolor: "#ADADAD",
              borderRadius: "5px",
              color: "black",
              fontSize: ".6rem",
              ml: 1,
              py: ".1rem",
              px: ".3rem",
            }}
          >
            16.99k
          </Typography>
        </Button>
        <BasicMenu />

        <Button
          variant="contained"
          size="small"
          sx={{
            bgcolor: "#2C2C2C",
            fontSize: ".6rem",
            color: "#A8A8A9",
          }}
        >
          <CachedOutlinedIcon fontSize="small" />
        </Button>
      </Box>
    </Box>
  );
}
