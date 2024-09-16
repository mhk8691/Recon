import { Button, Container, Typography, Box, Chip } from "@mui/material";
import Title from "../../ui/Title";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CloseIcon from "@mui/icons-material/Close";

export default function Vulns() {
  return (
    <Container maxWidth="xl">
      <Title
        title="Zimbra Collaboration (ZCS) - Cross Site Scripting"
        description="CVE-2022-27926"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Typography variant="body2" color="#9999A1" sx={{ mr: 5 }}>
          Last scanned 16d ago
        </Typography>
        <Button
          variant="outlined"
          size="small"
          startIcon={<RestartAltIcon sx={{ color: "#8C8C94" }} />}
          color="inherit"
          sx={{
            borderColor: "#27272A",
            py: 0.5,
            px: 1,
            textTransform: "none",
            color: "#FAFAFA",
            "&:hover": {
              bgcolor: "#27272A",
            },
          }}
        >
          Rescan
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="inherit"
          sx={{
            borderColor: "#27272A",
            px: 0,
            minWidth: "45px",
            py: 0.7,
            ml: 1,
            "&:hover": {
              bgcolor: "#27272A",
            },
          }}
        >
          <ShareOutlinedIcon fontSize="small" sx={{ color: "#8C8C94" }} />
        </Button>
      </Title>
      <Box mt={2}>
        <Chip
          label="MEDIUM"
          size="small"
          variant="outlined"
          sx={{
            bgcolor: "#38270B",
            color: "#C6961D",
            borderColor: "#4C3812",
            borderRadius: "5px",
            px: 0.5,
            py: 1.7,
          }}
        />
        <Chip
          label="Actively Exploited"
          size="small"
          variant="outlined"
          icon={<TrendingUpIcon style={{ color: "#C95F60" }} />}
          sx={{
            bgcolor: "#18181B",
            color: "#92929A",
            borderColor: "#27272A",
            borderRadius: "5px",
            px: 0.5,
            py: 1.7,
            ml: 2,
          }}
        />
        <Chip
          label="Not Matched"
          size="medium"
          variant="outlined"
          icon={<CloseIcon style={{ color: "#71717A" }} />}
          sx={{
            bgcolor: "#18181B",
            color: "#92929A",
            borderColor: "#27272A",
            borderRadius: "5px",
            px: 1,
            py: 2.1,
            ml: 2,
          }}
        />
      </Box>
    </Container>
  );
}
