import SearchSort from "./Search.Sort";
import AssetsList from "./Assets.List";
import { Box, Button, Container, Typography } from "@mui/material";
import Title from "../../ui/Title";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import AddButton from "../../ui/AddButton";
import { useNavigate } from "react-router-dom";

export default function Assets() {
  const navigate = useNavigate();

  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: "1rem" }}>
        <Title
          title="Your Assets"
          description="Add Assets for scanning. Select an Asset Group to view all Assets in
          that group, or check out Inventory for a full Asset list."
        >
          <AddButton>Add New Assets</AddButton>
          <Button
            variant="contained"
            color="inherit"
            size="medium"
            endIcon={<FilterDramaIcon />}
            sx={{
              fontSize: ".8rem",
              backgroundColor: "#442F0B",
              color: "#E5940B",
              ml: 2,
            }}
            onClick={() => navigate("/assets/configure")}
          >
            Connect Cloud Services
          </Button>
        </Title>
        <SearchSort />
        <AssetsList />
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
