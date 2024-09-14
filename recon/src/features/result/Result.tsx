import { Box } from "@mui/material";
import Table from './Table'
import Filter from "./Filter";
export default function Result() {
  return (
    <Box>
      <Filter />
      <Table/>
    </Box>
  )
}
