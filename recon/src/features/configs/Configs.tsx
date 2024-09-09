import { Box, Typography, Button } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import RadarOutlinedIcon from "@mui/icons-material/RadarOutlined";
import DataObjectOutlinedIcon from "@mui/icons-material/DataObjectOutlined";
import { NavLink } from "react-router-dom";
export default function Configs() {
  return (
    <Box>
      <Box mt={7} px={4}>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={0.5}
          component={NavLink}
          to={"/scans/configs?type=alerting"}
        >
          <NotificationsOutlinedIcon
            fontSize="small"
            sx={{ color: "#8C8C8D" }}
          />
          <Typography variant="body2" color="#8C8C8D">
            Alerting
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={0.5}
          mt={3}
          component={NavLink}
          to={"/scans/configs?type=reporting"}
        >
          <FlagOutlinedIcon fontSize="small" sx={{ color: "#8C8C8D" }} />
          <Typography variant="body2" color="#8C8C8D">
            Ticketing
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={0.5}
          mt={3}
          component={NavLink}
          to={"/scans/configs?type=scan"}
        >
          <RadarOutlinedIcon fontSize="small" sx={{ color: "#8C8C8D" }} />
          <Typography variant="body2" color="#8C8C8D">
            Scan Options
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={0.5}
          mt={3}
          component={NavLink}
          to={"/scans/configs?type=template"}
        >
          <DataObjectOutlinedIcon fontSize="small" sx={{ color: "#8C8C8D" }} />
          <Typography variant="body2" color="#8C8C8D">
            Templates <br />
            Profiles
          </Typography>
        </Box>
      </Box>
      <Box height={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 18 18"
          >
            <g
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              stroke="currentColor"
            >
              <line x1="9" y1="5.431" x2="9" y2="9.569"></line>
              <path
                d="M9,11.417c-.551,0-1,.449-1,1s.449,1,1,1,1-.449,1-1-.449-1-1-1Z"
                fill="currentColor"
                data-stroke="none"
                stroke="none"
              ></path>
              <path d="M10.968,2.25h-3.935c-.53,0-1.039,.211-1.414,.586l-2.782,2.782c-.375,.375-.586,.884-.586,1.414v3.935c0,.53,.211,1.039,.586,1.414l2.782,2.782c.375,.375,.884,.586,1.414,.586h3.935c.53,0,1.039-.211,1.414-.586l2.782-2.782c.375-.375,.586-.884,.586-1.414v-3.935c0-.53-.211-1.039-.586-1.414l-2.782-2.782c-.375-.375-.884-.586-1.414-.586Z"></path>
            </g>
          </svg>
          <Typography
            variant="body2"
            color="initial"
            sx={{ textAlign: "center", mt: 2 }}
          >
            Scan configuration is available in Pro plan. Please <br /> consider
            upgrading to enable this feature.
          </Typography>
          <Button
            variant="contained"
            color="inherit"
            size="small"
            sx={{ mt: 2 }}
          >
            Upgrade to Pro
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
