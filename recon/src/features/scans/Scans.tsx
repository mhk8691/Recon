import { Container } from "@mui/material";
import Header from "./Header";
import Filter from "./Filter";
import Sort from "./Sort";
import ScanList from "./ScanList";
import Footer from "../../footer";
export default function Scans() {
  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 7 }}>
        <Header />
        <Filter />
        <Sort />
        <ScanList />
      </Container>
      <Footer/>
    </>
  );
}
