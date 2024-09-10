import { Container } from "@mui/material";
import Technologies from "../features/technologies/Technologies";
import Footer from "../footer";

export default function TechnologiesPage() {
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "3rem" }}>
        <Technologies />
      </Container>
      <Footer />
    </>
  );
}
