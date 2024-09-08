import Tab from "./Tab";
import Header from "./Header";
import SearchSort from "./Search.Sort";
import AssetsList from "./Assets.List";
import { Box, Container, Typography } from "@mui/material";
import { tabObject } from "./Tab.object";
export default function Assets() {
  return (
    <>
      <Tab tabObject={tabObject} />
      <hr style={{ border: "1px solid #52525B" }} />
      <Container maxWidth="xl" sx={{ marginTop: "1rem" }}>
        <Header />
        <SearchSort />
        <AssetsList />
      </Container>
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          backgroundColor: "#0D0D0F",
          py: 1,
          pb: 2,
          px: 3,
        }}
      >
        <Typography
          variant="body2"
          color="#808087"
          sx={{
            fontSize: ".8rem",
            mt: 3,
          }}
        >
          Page 1 of total 1 pages.
        </Typography>
      </Box>
    </>
  );
}
