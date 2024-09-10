import { Box, Grid2 as Grid, IconButton } from "@mui/material/";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import Search from "../vulnerabilites/Search";
export default function Sort() {
  return (
    <Grid container spacing={1} mt={5}>
      <Grid size={9.5}>
        <Box>
          <Search
            handleSubmit={(e) => {
              e.preventDefault();
            }}
            formStyle={{ width: "100%" }}
            placeholder="Search by name"
          />
        </Box>
      </Grid>
      <Grid size={1}>
        <Box>
          <select
            name=""
            id=""
            style={{
              backgroundColor: "black",
              border: "2px solid #202022",
              borderRadius: "5px",
              padding: ".5rem",
            }}
          >
            <option value="Status">Status</option>
            <option value="Uploads">Uploads</option>
            <option value="Discovery">Discovery</option>
            <option value="Integrations">Integrations</option>
          </select>
        </Box>
      </Grid>
      <Grid size={0.75}>
        <Box>
          <IconButton
            color="inherit"
            sx={{
              marginLeft: "1rem",
              backgroundColor: "#111113",
              px: ".8rem",
              borderRadius: "5px",
            }}
          >
            <DeleteOutlinedIcon />
          </IconButton>
        </Box>
      </Grid>
      <Grid size={0.75}>
        <Box>
          <IconButton
            color="inherit"
            sx={{
              border: "1px solid #202022",
              borderRadius: "5px",
              px: ".7rem",
            }}
          >
            <CachedOutlinedIcon />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
}
