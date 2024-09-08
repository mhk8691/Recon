import { Container } from "@mui/material";
import Inventory from "../features/inventory/Inventory";
import { Box, Typography } from "@mui/material";

export default function InventoryPage() {
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "3rem" }}>
        <Inventory />
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
