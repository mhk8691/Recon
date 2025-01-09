import TuneIcon from "@mui/icons-material/Tune";
import { Box, Button, Container, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Search from "../../ui/Search";
export default function Sort() {
  return (
    <Container maxWidth={"xl"} sx={{ mt: 3 }}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Box
            component={"span"}
            border={1}
            borderRadius={1}
            px={0.5}
            py={0.2}
            borderColor={"#27272A"}
          >
            <TuneIcon fontSize="small" sx={{ color: "white" }} />
          </Box>
          <Search
            placeholder="Search result"
            formStyle={{ width: "100%", marginLeft: ".5rem" }}
          />
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <Button
            variant="contained"
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ bgcolor: "#111113", color: "#7D7D7E" }}
          >
            Export
          </Button>
          <Button
            variant="contained"
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ bgcolor: "#111113", color: "#7D7D7E" }}
          >
            Mark as
          </Button>

          <IconButton
            color="inherit"
            sx={{
              bgcolor: "#111113",
              borderRadius: "5px",
              px: ".7rem",
            }}
          >
            <DeleteOutlineOutlinedIcon
              fontSize="small"
              sx={{ color: "#4D4D52" }}
            />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{
              border: "1px solid #202022",
              borderRadius: "5px",
              px: ".7rem",
            }}
          >
            <CachedOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}
