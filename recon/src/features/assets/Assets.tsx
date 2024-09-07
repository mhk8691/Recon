import Tab from "./Tab";
import Header from "./Header";
import SearchSort from "./Search.Sort";
import AssetsList from "./Assets.List";
import { Container } from "@mui/material";

export default function Assets() {
  return (
    <>
      <Tab />
      <hr style={{ border: "1px solid #52525B" }} />
      <Container maxWidth="xl" sx={{ marginTop: "1rem" }}>
        <Header />
        <SearchSort />
        <AssetsList />
      </Container>
    </>
  );
}
