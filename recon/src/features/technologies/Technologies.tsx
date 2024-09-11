import CollapsibleTable from "./Table";
import Search from "../vulnerabilites/Search";
import { Container } from "@mui/material";
const formStyle: React.CSSProperties = {
  width: "100%",
};

export default function Technologies() {
  return (
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
  );
}
