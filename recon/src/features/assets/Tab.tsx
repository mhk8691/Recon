import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { TabType } from "./Tab.types";

export default function Tab({ tabObject }: { tabObject: Array<TabType> }) {
  return (
    <Box display={"flex"} alignItems={"center"} gap={5} px={3} my={1.5}>
      {tabObject.map((tab, index) => (
        <Box key={index}>
          <NavLink to={tab.link} style={{ color: "rgba(161, 161, 171)" }}>
            <Box display={"flex"} alignItems={"center"}>
              {tab.icon}
              <Typography
                variant="body2"
                component="span"
                sx={{ color: "rgba(161, 161, 171)", ml: 1 ,fontSize:".8rem"}}
              >
                {tab.text}
              </Typography>
              <Typography
                variant="body2"
                color="black"
                sx={{
                  ml: 0.5,
                  bgcolor: "#ADADAD",
                  borderRadius: "5px",
                  px: ".2rem",
                  fontSize: ".7rem",
                  py: ".1rem",
                }}
              >
                {tab.count}
              </Typography>
            </Box>
          </NavLink>
        </Box>
      ))}
    </Box>
  );
}
