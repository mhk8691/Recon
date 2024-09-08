import { Box } from "@mui/material";
import Search from "./Search";
import SortFilter from "./Sort-Filter";
export default function Inventory() {
  return (
    <Box>
      <Search />
      <SortFilter />
    </Box>
  );
}
