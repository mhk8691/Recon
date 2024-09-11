import { Container, Typography } from "@mui/material";
import Title from "../../ui/Title";
import Header from "./Header";
export default function Leaderboard() {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "3rem" }}>
      <Title
        title="Contributor Leaderboards"
        description="Explore the impressive roster of contributors driving the Nuclei Templates project"
      >
        <Typography
          variant="body2"
          color="#94949C"
          sx={{
            fontSize: ".8rem",
            border: "1px solid #27272A",
            borderRadius: ".5rem",
            p: 0.5,
          }}
        >
          Last updated 9 days ago
        </Typography>
      </Title>
      <Header/>
    </Container>
  );
}
