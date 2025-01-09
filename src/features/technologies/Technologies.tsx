import CollapsibleTable from "./Table";
import Search from "../../ui/Search";
import { Box, Container, Typography } from "@mui/material";
const formStyle: React.CSSProperties = {
  width: "100%",
};

export default function Technologies() {
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "3rem" }}>
        <Search
          handleSubmit={(e) => {
            e.preventDefault();
          }}
          formStyle={formStyle}
          placeholder="Search your technologies"
        />
        <CollapsibleTable />
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
