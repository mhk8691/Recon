import { Container } from "@mui/material";
import Header from "./Header";
import Filter from "./Filter";

export default function Scans() {
  return (
    <Container maxWidth="xl" sx={{mt:7}}>
        <Header/>
        <Filter/>
    </Container>
  )
}
