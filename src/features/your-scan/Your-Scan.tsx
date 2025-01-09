import { Box, Grid2 as Grid, Typography, Button } from "@mui/material";
import React from "react";
import RadarIcon from "@mui/icons-material/Radar";
import { yourScanObject } from "./yourScan.object";
const scansStyle: React.CSSProperties = {
  backgroundColor: "#0D0D0F",
  padding: "1.5rem",
  border: "1px solid #1B1A1F",
};
export default function YourScan({
  buttonStyle,
}: {
  buttonStyle: React.CSSProperties;
}) {
  return (
    <Grid size={7.5}>
      <Box
        sx={scansStyle}
        borderRadius={3}
        position="relative"
        zIndex={100}
        overflow="hidden"
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              variant="body1"
              color="#A1A1A2"
              sx={{ display: "flex", alignItems: "center" }}
            >
              Your Scans
              <Typography
                variant="body1"
                color="#A1A1A2"
                sx={{
                  bgcolor: "#18181A",
                  border: "1px solid #212123",
                  fontSize: ".8rem",
                  px: 0.5,
                  ml: 1,
                  borderRadius: 0.5,
                }}
              >
                11
              </Typography>
            </Typography>
            <Typography
              variant="body2"
              color="#727273"
              sx={{ marginTop: ".5rem" }}
            >
              Set up automated vulnerability scans across your assets for
              comprehensive monitoring.
            </Typography>
          </Box>
          <Box>
            <RadarIcon sx={{ color: "#F77216" }} />
          </Box>
        </Box>

        <Button
          variant="contained"
          size="small"
          color="inherit"
          style={buttonStyle}
          sx={{
            backgroundColor: "#222225",
            color: "#9A9A9B",
          }}
        >
          Create New Scan
        </Button>
        <Box mt={3}>
          {yourScanObject.map((item, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="space-between"
              mt={1.3}
              alignItems={"center"}
            >
              <Typography
                variant="body2"
                color="#ADADAE"
                sx={{ fontSize: ".8rem" }}
              >
                {item.title}
              </Typography>
              <Box display={"flex"} gap={0.1}>
                <Box
                  sx={{
                    bgcolor: item.severity[0] === 0 ? "#1A0E12" : "#401924",
                    color: item.severity[0] === 0 ? "#40171F" : "#B8324B",
                    px: 2.5,
                    py: 0.7,
                    fontSize: ".8rem",
                    borderStartStartRadius: 5,
                    borderEndStartRadius: 5,
                  }}
                >
                  {item.severity[0]}
                </Box>
                <Box
                  sx={{
                    bgcolor: item.severity[1] === 0 ? "#1A110F" : "#422518",
                    color: item.severity[1] === 0 ? "#492710" : "#B65617",
                    px: 2.5,
                    py: 0.7,
                    fontSize: ".8rem",
                  }}
                >
                  {item.severity[1]}
                </Box>
                <Box
                  sx={{
                    bgcolor: item.severity[2] === 0 ? "#231F1A" : "#473f35",
                    color: item.severity[2] === 0 ? "#463917" : "#463917",
                    px: 2.5,
                    py: 0.7,
                    fontSize: ".8rem",
                  }}
                >
                  {item.severity[2]}
                </Box>
                <Box
                  sx={{
                    bgcolor: item.severity[3] === 0 ? "#1D1D28" : "#1E1E3C",
                    color: item.severity[3] === 0 ? "#2C2D46" : "#7E89F3",
                    px: 2.5,
                    py: 0.7,
                    fontSize: ".8rem",
                  }}
                >
                  {item.severity[3]}
                </Box>
                <Box
                  sx={{
                    bgcolor: item.severity[4] === 0 ? "#0E1814" : "#11311F",
                    color: item.severity[4] === 0 ? "#1E492F" : "#3FBE6E",
                    px: 2.5,
                    py: 0.7,
                    fontSize: ".8rem",
                  }}
                >
                  {item.severity[4]}
                </Box>
                <Box
                  sx={{
                    bgcolor: item.severity[5] === 0 ? "#1B1B1F" : "#1E1E3C",
                    color: item.severity[5] === 0 ? "#38383B" : "#7E89F3",
                    px: 2.5,
                    py: 0.7,
                    fontSize: ".8rem",
                    borderStartEndRadius: 5,
                    borderEndEndRadius: 5,
                  }}
                >
                  {item.severity[5]}
                </Box>
              </Box>
              <Typography
                variant="body2"
                color="#6369BA"
                sx={{
                  bgcolor: "#1A1B29",
                  px: 0.5,
                  fontSize: ".7rem",
                  borderRadius: 2,
                  border: "1px solid #23243B",
                }}
              >
                {item.result} assets
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography
          variant="body2"
          color="#9A9A9B"
          sx={{ fontSize: ".7rem", mt: 2, textAlign: "end" }}
        >
          View All
        </Typography>
      </Box>
    </Grid>
  );
}
