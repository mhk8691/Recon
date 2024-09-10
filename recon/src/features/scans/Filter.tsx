import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { filterObject } from "./Filter.object";
import { useState } from "react";

const boxStyle = {
  border: "1px solid #27272A",
  py: 2.5,
  px: 2,
  borderRadius: ".5rem",
  cursor: "pointer",
  "&:hover": {
    borderColor: "#39393d",
  },
};
const iconStyle = {
  borderRadius: "5px",
  px: 0.3,
  pt: 0.3,
};

export default function Filter() {
  const [acitve, setActive] = useState<number | null>(null);
  return (
    <Box mt={5}>
      <Grid container spacing={1}>
        {filterObject.map((item, index) => (
          <Grid size={2.4} key={index}>
            <Box
              sx={boxStyle}
              onClick={() => setActive(item.id)}
              bgcolor={acitve === item.id ? "#27272A" : "#0D0D0F"}
            >
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <Box
                  component={"span"}
                  sx={iconStyle}
                  style={{ backgroundColor: item.bgcolor, color: item.color }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    color="#A1A1AA"
                    sx={{ fontSize: ".7rem" }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" color="white" sx={{ mt: 1 }}>
                  {item.count}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
