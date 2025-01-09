import { Box, Button, Typography } from "@mui/material";
import Search from "../../ui/Search";
import RadarOutlinedIcon from "@mui/icons-material/RadarOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Header({ fullWidth }: { fullWidth: boolean }) {
  return (
    <Box sx={{ mt: 1 }} display={"flex"} alignItems={"center"}>
      <Box
        display={"flex"}
        alignItems={"center"}
        width={fullWidth ? "79%" : "71.5%"}
      >
        <Box
          border={1}
          borderColor={"#212121"}
          borderRadius={"5px"}
          px={1}
          py={0.5}
          display={"flex"}
          alignItems={"center"}
          sx={{ borderStartEndRadius: "0", borderEndEndRadius: "0" }}
        >
          <Typography
            variant="body2"
            color="initial"
            sx={{
              fontSize: ".75rem",
              bgcolor: "#202020",
              py: 0.5,
              px: 1,
              borderRadius: "5px",
            }}
          >
            Target
          </Typography>
          <Typography
            variant="body2"
            color="#5A5A5B"
            sx={{ fontSize: ".75rem", ml: 1 }}
          >
            Target list
          </Typography>
        </Box>
        <Box width={fullWidth ? "86.5%" : "80%"}>
          <Search
            hasIcon={false}
            placeholder="https://example.com"
            formStyle={{
              border: "1px solid #212121",
              borderLeft: "none",
              borderStartStartRadius: "0",
              borderEndStartRadius: "0",
              width: "100%",
            }}
          />
        </Box>
      </Box>
      <Box>
        <Button
          variant="contained"
          color="inherit"
          size="medium"
          startIcon={<RadarOutlinedIcon />}
          sx={{ textTransform: "none", ml: 1, px: 1, fontSize: ".8rem" }}
        >
          Scan now
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          size="medium"
          startIcon={<LockOutlinedIcon fontSize="small" />}
          sx={{
            textTransform: "none",
            ml: 1,
            color: "#777779",
            border: "1px solid #18181B",
            px: 1.5,
          }}
        >
          Share
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          size="medium"
          sx={{
            textTransform: "none",
            color: "#777779",
            border: "1px solid #18181B",
            minWidth: "10px",
            py: 1,
            ml: 1,
          }}
        >
          <GitHubIcon fontSize="small" />
        </Button>
      </Box>
    </Box>
  );
}
