import { Box, Button } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Accordion from "./Accordion";
import Search from "../../ui/Search";
export default function Sidebar() {
  return (
    <Box mt={3}>
      <Box sx={{ px: 2 }}>
        <Button
          variant="contained"
          color="inherit"
          size="medium"
          sx={{ textTransform: "none", width: "75%" }}
        >
          Create new template
        </Button>
        <Button
          variant="contained"
          size="medium"
          sx={{
            border: "1px solid #27272A",
            bgcolor: "#18181B",
            minWidth: "10px",
            ml: 1,
            py: 1,
            width: "20%",
          }}
        >
          <FileUploadIcon fontSize="small" sx={{ color: "white" }} />
        </Button>
        <Search
          placeholder="Search"
          hasIcon={false}
          formStyle={{ width: "100%", marginTop: "1rem" }}
          style={{ backgroundColor: "#09090B" }}
        />
      </Box>
      <hr style={{ marginTop: "1.5rem", border: "1px solid #212121" }} />
      <Accordion/>
    </Box>
  );
}
