import { Box, Container, Typography } from "@mui/material";
import Search from "./Search";
import SortFilter from "./Sort-Filter";
import Table from "./Table";
export default function Inventory() {
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "3rem" }}>
        <Search />
        <SortFilter />
        <Table />
      </Container>
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          backgroundColor: "#0D0D0F",
          py: 1,
          pb: 2,
          px: 3,
        }}
      >
        <Typography
          variant="body2"
          color="#808087"
          sx={{
            fontSize: ".8rem",
            mt: 3,
          }}
        >
          Page 1 of total 1 pages.
        </Typography>
      </Box>
    </>
  );
}
