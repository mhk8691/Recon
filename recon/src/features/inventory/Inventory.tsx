import { Container } from "@mui/material";
import Search from "./Search";
import SortFilter from "./Sort-Filter";
import Table from "./Table";
export default function Inventory() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "3rem" }}>
      <Search />
      <SortFilter />
      <Table />
    </Container>
  );
}
