import { Container } from "@mui/material";
import Sort from "./Sort";
import Table from "./Table";

export default function Historty() {
  return (
    <Container maxWidth="xl" sx={{ mt: 7 }}>
      <Sort />
      <Table />
    </Container>
  );
}
