import {  Grid2 as Grid} from "@mui/material";
import Exposures from "../exposures/Exposures";
import YourScan from "../your-scan/Your-Scan";

const buttonStyle: React.CSSProperties = {
  fontSize: ".7rem",
  fontWeight: "bold",

  marginTop: "1rem",
};
export default function Header() {
  return (
    <Grid container spacing={3}>
      <Exposures buttonStyle={buttonStyle} />
      <YourScan buttonStyle={buttonStyle} />
    </Grid>
  );
}
