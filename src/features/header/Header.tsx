import { Grid2 as Grid, Typography, Box, Button } from "@mui/material";
import Exposures from "../exposures/Exposures";
import YourScan from "../your-scan/Your-Scan";
import Vulnerabilities from "./Vulnerabilities";

const buttonStyle: React.CSSProperties = {
  fontSize: ".7rem",
  fontWeight: "bold",

  marginTop: "1rem",
};
export default function Header() {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={3}
      >
        <Box>
          <Typography variant="body1" color="initial">
            Hello Shohanurr277,
          </Typography>
          <Typography variant="body1" color="#B6B6B7">
            Welcome to ProjectDiscovery Cloud
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="inherit"
            size="medium"
            sx={{ fontSize: ".7rem" }}
          >
            Create team
          </Button>
        </Box>
      </Box>
      <Vulnerabilities />
      <Grid container spacing={3} mt={3}>
        <Exposures buttonStyle={buttonStyle} />
        <YourScan buttonStyle={buttonStyle} />
      </Grid>
    </>
  );
}
