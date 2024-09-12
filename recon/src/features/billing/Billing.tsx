import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

export default function Billing() {
  return (
    <Box display={"flex"} gap={2} width={"70%"}>
      <Box
        border={1}
        borderColor={"#18181B"}
        bgcolor={"#161619"}
        p={2}
        width={"100%"}
        borderRadius={2}
      >
        <Box>
          <Typography variant="body2" color="initial">
            Pro
          </Typography>
        </Box>
        <Typography variant="body2" color="#93939B" sx={{ mt: 1 }}>
          Scan configuration is available
        </Typography>
        <Typography variant="h5" color="initial" sx={{ mt: 1 }}>
          $100
          <Typography
            variant="body2"
            color="#93939B"
            sx={{ mt: 1, ml: 0.5 }}
            component={"span"}
          >
            /month
          </Typography>
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          size="small"
          fullWidth
          sx={{ bgcolor: "#6366F1", color: "white", mt: 2 }}
        >
          Upgrade to Pro
        </Button>
        <hr style={{ marginTop: "2rem", borderColor: "#18181A" }} />
        <Typography variant="body2" color="white" sx={{ mt: 2 }}>
          Pro includes
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Scan configuration is available
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Scan configuration is available
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Scan configuration is available
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Scan configuration is available
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Scan configuration is available
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Scan configuration is available
        </Typography>
      </Box>
      <Box
        border={1}
        borderColor={"#18181B"}
        p={2}
        width={"100%"}
        borderRadius={2}
      >
        <Box>
          <Typography variant="body2" color="initial">
            Custom
          </Typography>
        </Box>
        <Typography variant="body2" color="#93939B" sx={{ mt: 1 }}>
          Scan configuration is available
        </Typography>

        <Button
          variant="contained"
          color="inherit"
          size="small"
          fullWidth
          sx={{
            bgcolor: "#18181B",
            color: "white",
            mt: 7,
          }}
        >
          Talk to sales
        </Button>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 3, textAlign: "center" }}
        >
          Scanning of 500+ assets
        </Typography>
        <hr style={{ marginTop: "2rem", borderColor: "#18181A" }} />
        <Typography variant="body2" color="white" sx={{ mt: 2 }}>
          Pro includes
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Scan configuration is available
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Scan configuration is available
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Scan configuration is available
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Scan configuration is available
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Scan configuration is available
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Scan configuration is available
        </Typography>
      </Box>
    </Box>
  );
}
