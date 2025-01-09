import { Box, Button, Slider, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";

export default function Billing() {
  const [value, setValue] = useState<number | number[]>(2);
  return (
    <Box display={"flex"} gap={2} width={"70%"} mb={4}>
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
          For power individuals and smaller teams
        </Typography>
        <Typography variant="h5" color="initial" sx={{ mt: 1 }}>
          {typeof value === "number" && value * 50}
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
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 3, textAlign: "center", fontSize: ".8rem" }}
        >
          {value}K Scanning your most critical assets
        </Typography>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          sx={{ color: "#6366F1" }}
          value={value}
          onChange={(_e, v) => setValue(v)}
          step={2}
          max={20}
          min={2}
        />
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
          Cloud hosted scans (50x faster)
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Asset discovery and cloud import
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Up to 10 team members
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          2,000 monthly scan tokens
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Integrate with Slack, Jira, GitLab.
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          1-year data retention
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
          For larger attack surfaces, larger teams, or custom scan requirements.
        </Typography>

        <Button
          variant="contained"
          color="inherit"
          size="small"
          fullWidth
          sx={{
            bgcolor: "#18181B",
            color: "white",
            mt: 4,
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
        <hr style={{ marginTop: "4.2rem", borderColor: "#18181A" }} />
        <Typography variant="body2" color="white" sx={{ mt: 2 }}>
          Everything in Pro, plus:
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Custom Scan Limits
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          10+ Team Members
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          SAML SSO
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Fixed Scan IPs
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Custom Data Retention Limits
        </Typography>
        <Typography
          variant="body2"
          color="#93939B"
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          <DoneIcon sx={{ color: "#707AD6", mr: 1 }} />
          Support
        </Typography>
      </Box>
    </Box>
  );
}
