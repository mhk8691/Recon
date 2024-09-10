import { Box, Typography, Button } from "@mui/material";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import { useNavigate } from "react-router-dom";
import AddButton from "./AddButton";
export default function Header() {
  const navigate = useNavigate();
  return (
    <Box
      mt={10}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box>
        <Typography variant="body1" color="initial">
          Your Assets
        </Typography>
        <Typography
          variant="body2"
          color="#9999A1"
          sx={{ fontSize: ".8rem", mt: 1 }}
        >
          Add Assets for scanning. Select an Asset Group to view all Assets in
          that group, or check out Inventory for a full Asset list.
        </Typography>
      </Box>
      <Box>
        <AddButton>Add New Assets</AddButton>
        <Button
          variant="contained"
          color="inherit"
          size="medium"
          endIcon={<FilterDramaIcon />}
          sx={{
            fontSize: ".8rem",
            bgcolor: "#442F0B",
            color: "#E5940B",
            ml: 2,
          }}
          onClick={() => navigate("/assets/configure")}
        >
          Connect Cloud Services
        </Button>
      </Box>
    </Box>
  );
}
