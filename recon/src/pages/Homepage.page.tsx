import { Container } from "@mui/material";
import Header from "../features/header/Header";
import Banner from "../features/banner/Banner";
const mainStyle: React.CSSProperties = {
  border: "1px solid #202022",
  backgroundColor: "#0D0D0F",
  borderRadius: "12px",
  marginTop: "1.5rem",
};
export default function Homepage() {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "4rem" }}>
      <header>
        <Header />
      </header>
      <main style={mainStyle}>
        <Banner />
        <br />
        <br />
        <br />
        <br />
      </main>
    </Container>
  );
}
