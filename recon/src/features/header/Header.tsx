import { Box, Grid2 as Grid, Typography, Button } from "@mui/material";

const exposuresStyle: React.CSSProperties = {
  border: "1px solid #181023",
  backgroundColor: "#0A0A0C",
  background: "linear-gradient(180deg, #0A0A0C 0%, #0F0D16 100%)",
  padding: "1.5rem",
};
const scansStyle: React.CSSProperties = {
  border: "1px solid #27170C",
  background: "linear-gradient(180deg,  #0E0B0B 0%,#130E0B 100%)",
  padding: "1.5rem",
};
const buttonStyle: React.CSSProperties = {
  fontSize: ".7rem",
  fontWeight: "bold",

  marginTop: "1rem",
};
export default function Header() {
  return (
    <Grid container spacing={3}>
      <Grid size={4.5}>
        <Box
          sx={exposuresStyle}
          borderRadius={3}
          position="relative"
          zIndex={100}
          overflow="hidden"
        >
          <Typography variant="body1" color="initial">
            Your Exposures
          </Typography>
          <Typography
            variant="body2"
            color="rgba(161, 161, 171)"
            sx={{ marginTop: ".5rem" }}
          >
            Continuously monitor as your team deploys.
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="inherit"
            style={buttonStyle}
            sx={{ backgroundColor: "secondary.light", marginBottom: "15rem" }}
          >
            Add Domain or IP
          </Button>
          <Button
            variant="contained"
            size="small"
            color="inherit"
            style={buttonStyle}
            sx={{
              backgroundColor: "#46300F",
              color: "#C47F0C",
              marginLeft: ".5rem",
              marginBottom: "15rem",
            }}
          >
            Connect Cloud Services
          </Button>
          <img
            src="../../public/Techicons.webp"
            alt="exposures"
            style={{
              position: "absolute",
              bottom: "-5.5rem",
              left: "-7.5rem",
              zIndex: -100,
              width: "100%",
              rotate: "-10deg",
            }}
          />
        </Box>
      </Grid>
      <Grid size={7.5}>
        <Box
          sx={scansStyle}
          borderRadius={3}
          position="relative"
          zIndex={100}
          overflow="hidden"
        >
          <Typography variant="body1" color="initial">
            Your Scans
          </Typography>
          <Typography
            variant="body2"
            color="rgba(161, 161, 171)"
            sx={{ marginTop: ".5rem" }}
          >
            Set up automated vulnerability scans across your assets for
            comprehensive monitoring.
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="inherit"
            style={buttonStyle}
            sx={{
              backgroundColor: "#341C0C",
              color: "#EC6D15",
              marginBottom: "15rem",
            }}
          >
            Create New Scan
          </Button>

          <div
            style={{
              position: "absolute",
              bottom: "-7rem",
              left: "50%",
              transform: "translateX(-50%) scale(1.5)",
            }}
          >
            <img
              src="../../public/ScanSpiral.png"
              alt="exposures"
              style={{ zIndex: -100, width: "100%" }}
            />
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}
