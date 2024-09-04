import { Container } from "@mui/material";
import Header from "../features/header/Header";

export default function Homepage() {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "4rem" }}>
      <Header />
    </Container>
  );
}
