import { Box } from "@mui/material";
import Search from "./Search";
import SortFilter from "./Sort-Filter";
import Table from "./Table";
export default function Inventory() {
  return (
    <Box>
      <Search />
      <SortFilter />
      <Table />
    </Box>
  );
}
