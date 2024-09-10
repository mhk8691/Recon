import { Container } from "@mui/material";
import Inventory from "../features/inventory/Inventory";
import Footer from "../footer";

export default function InventoryPage() {
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "3rem" }}>
        <Inventory />
      </Container>
      <Footer />
    </>
  );
}
