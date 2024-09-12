import { Outlet } from "react-router-dom";
import Tab from "../ui/Tab";
import { tabObject } from "../features/profile/Tab.object";
import SidebarTab from "../features/profile/Sidebar.tab";
import { Container, Grid2 as Grid, Typography } from "@mui/material";

export default function SettingsPage() {
  return (
    <div>
      <header>
        <Tab tabObject={tabObject} />
      </header>

      <Container maxWidth="lg" sx={{ mt: 7 }}>
        <Typography variant="body1" color="initial">
          Settings
        </Typography>
        <Typography
          variant="body2"
          color="#96969F"
          sx={{ mt: 0.5, fontSize: ".8rem" }}
        >
          Mange your account settings, billing,teams,and security
        </Typography>
        <Grid container>
          <Grid size={2.5} component={"article"} mt={8}>
            <SidebarTab />
          </Grid>
          <Grid size={9} component={"main"} mt={8}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
