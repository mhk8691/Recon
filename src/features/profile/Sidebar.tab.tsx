import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
export default function SidebarTab() {
  const sideStyle = {
    "&.active": {
      color: "white",
    },
  };
  return (
    <>
      
      <Box display="flex" flexDirection="column"  gap={2}>
        <Typography
          variant="body2"
          color="#9D9DA6"
          component={NavLink}
          to="/settings"
          sx={sideStyle}
        >
          Profile
        </Typography>
        <Typography
          variant="body2"
          color="#9D9DA6"
          component={NavLink}
          to="/settings/team"
          sx={sideStyle}
        >
          Team
        </Typography>
        <Typography
          variant="body2"
          color="#9D9DA6"
          component={NavLink}
          to="/settings/scan-ips"
          sx={sideStyle}
        >
          Scan IPs
        </Typography>
        <Typography
          variant="body2"
          color="#9D9DA6"
          component={NavLink}
          to="/settings/billing"
          sx={sideStyle}
        >
          Billing
        </Typography>
        <Typography
          variant="body2"
          color="#9D9DA6"
          component={NavLink}
          to="/settings/security"
          sx={sideStyle}
        >
          Security
        </Typography>
      </Box>
    </>
  );
}
