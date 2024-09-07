import { Container } from "@mui/material";
import Header from "../features/header/Header";
import Banner from "../features/banner/Banner";
import Vulnerabilites from "../features/vulnerabilites/Vulnerabilites";
import QuickLinks from "../features/quick-links/QuickLinks";
import ChangeLogs from "../features/change-logs/ChangeLogs";
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
        <Vulnerabilites />
      </main>
      <QuickLinks />
      <ChangeLogs />
    </Container>
  );
}
