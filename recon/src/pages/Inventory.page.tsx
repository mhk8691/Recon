import { Container } from "@mui/material";
import Inventory from "../features/inventory/Inventory";

export default function InventoryPage() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "3rem" }}>
      <Inventory />
    </Container>
  );
}
