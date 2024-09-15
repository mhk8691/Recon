import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { headerObject } from "./header.object";

const boxStyle = {
  border: "1px solid #27272A",
  py: 2.5,
  px: 2,
  borderRadius: ".5rem",
};
const iconStyle = {
  borderRadius: "5px",
  px: 0.3,
  pt: 0.3,
  backgroundColor: "#39393d",
};

export default function Header() {
  return (
    <Grid container spacing={1} sx={{ mt: 5 }}>
      {headerObject.map((item, index) => (
        <Grid size={3} key={index}>
          <Box sx={boxStyle}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Box component={"span"} sx={iconStyle}>
                {" "}
                {item.icon}
              </Box>
              <Typography variant="body2" color="#efefefe">
                {item.title}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" color="white" sx={{ mt: 2, mb: 2 }}>
                {item.count}
              </Typography>
              <Typography
                variant="body2"
                color="initial"
                sx={{
                  color: item.color,
                  bgcolor: item.bgcolor,
                  py: item.bgcolor ? 0.4 : 0,
                  px: item.bgcolor ? 1 : 0,
                  borderRadius: 1,
                  display: "inline-flex",
                  fontSize: ".8rem",
                  alignItem: "center",
                }}
              >
                {item.iconDesc && (
                  <span style={{ marginRight: ".5rem" }}>{item.iconDesc}</span>
                )}
                <span>{item.description}</span>
              </Typography>
              {item.hasStyle && (
                <Box mt={1} display="flex" gap={0.5}>
                  <Box width="10%" height="4px" bgcolor="#EF4444"></Box>
                  <Box width="20%" height="4px" bgcolor="#E26915"></Box>
                  <Box width="15%" height="4px" bgcolor="#EAB308"></Box>
                  <Box width="3%" height="4px" bgcolor="#6366F1"></Box>
                  <Box width="50%" height="4px" bgcolor="#22C55E"></Box>
                  <Box width="2%" height="4px" bgcolor="#71717A"></Box>
                </Box>
              )}
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
