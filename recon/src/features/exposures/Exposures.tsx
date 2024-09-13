import { Box, Grid2 as Grid, Typography, Button } from "@mui/material";
import { exposuresObject } from "./exposures.object";
const exposuresStyle: React.CSSProperties = {
  border: "1px solid #1B1A1F",
  backgroundColor: "#0D0D0F",

  padding: "1.5rem",
};

export default function Exposures({
  buttonStyle,
}: {
  buttonStyle: React.CSSProperties;
}) {
  return (
    <Grid size={4.5}>
      <Box
        sx={exposuresStyle}
        borderRadius={3}
        position="relative"
        zIndex={100}
        overflow="hidden"
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            
            <Typography
              variant="body1"
              color="#A1A1A2"
              sx={{ display: "flex", alignItems: "center" }}
            >
              Your Exposures
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
                15
              </Typography>
            </Typography>
            <Typography
              variant="body2"
              color="#727273"
              sx={{ marginTop: ".5rem" }}
            >
              Continuously monitor as your team deploys.
            </Typography>
          </Box>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <g
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.25"
                stroke="#7239AA"
              >
                <circle
                  cx="4.25"
                  cy="5.25"
                  r=".75"
                  fill="currentColor"
                  data-stroke="none"
                  stroke="#7239AA"
                ></circle>
                <circle
                  cx="6.75"
                  cy="5.25"
                  r=".75"
                  fill="currentColor"
                  data-stroke="none"
                  stroke="#7239AA"
                ></circle>
                <circle
                  cx="4.25"
                  cy="12.75"
                  r=".75"
                  fill="currentColor"
                  data-stroke="none"
                  stroke="#7239AA"
                ></circle>
                <circle
                  cx="6.75"
                  cy="12.75"
                  r=".75"
                  fill="currentColor"
                  data-stroke="none"
                  stroke="#7239AA"
                ></circle>
                <rect
                  x="1.75"
                  y="2.75"
                  width="14.5"
                  height="5"
                  rx="1.5"
                  ry="1.5"
                ></rect>
                <rect
                  x="1.75"
                  y="10.25"
                  width="14.5"
                  height="5"
                  rx="1.5"
                  ry="1.5"
                ></rect>
              </g>
            </svg>
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
          Add Domain or IP
        </Button>
        <Button
          variant="contained"
          size="small"
          color="inherit"
          style={buttonStyle}
          sx={{
            backgroundColor: "#222225",
            color: "#9A9A9B",
            marginLeft: ".5rem",
          }}
        >
          Connect Cloud Services
        </Button>
        <Box mt={3}>
          {exposuresObject.map((item, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="space-between"
              mt={2}
            >
              <Typography
                variant="body2"
                color="#ADADAE"
                sx={{ fontSize: ".8rem" }}
              >
                {item.title}
              </Typography>
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
                {item.count} assets
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography
          variant="body2"
          color="#9A9A9B"
          sx={{ fontSize: ".7rem", my: 2, textAlign: "end" }}
        >
          View All
        </Typography>
      </Box>
    </Grid>
  );
}
