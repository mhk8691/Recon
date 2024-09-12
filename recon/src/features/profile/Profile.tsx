import { Box, Typography, Button } from "@mui/material";

export default function Profile() {
  return (
    <Box>
      <Box border={1} borderColor={"#27272A"} borderRadius={2}>
        <Box p={3} bgcolor={"#101013"}>
          <Typography variant="body2" color="initial">
            Username
          </Typography>
          <Typography
            variant="body2"
            color="#96969F"
            sx={{ mt: 0.5, fontSize: ".8rem" }}
          >
            Mange your account settings, billing,teams,and security
          </Typography>
          <input
            type="text"
            value={"username"}
            style={{
              padding: 7,
              backgroundColor: "#0C0C0F",
              borderRadius: "5px",
              outline: "none",
              border: "1px solid #1B1B1E",
              width: "35%",
              marginTop: "1rem",
            }}
          />
        </Box>
        <Box
          borderTop={1}
          borderColor={"#27272A"}
          display="flex"
          justifyContent="space-between"
          px={3}
          py={1}
        >
          <Typography
            variant="body2"
            color="#96969F"
            sx={{ mt: 0.5, fontSize: ".8rem" }}
          >
            Mange your account settings, billing,teams,and security
          </Typography>
          <Button
            variant="contained"
            color="inherit"
            size="small"
            sx={{ fontSize: ".7rem", px: 0, bgcolor: "#7C7C7D" }}
          >
            Save
          </Button>
        </Box>
      </Box>
      <Box border={1} borderColor={"#27272A"} borderRadius={2} mt={3}>
        <Box p={3} bgcolor={"#101013"}>
          <Typography variant="body2" color="initial">
            Email address
          </Typography>
          <Typography
            variant="body2"
            color="#96969F"
            sx={{ mt: 0.5, fontSize: ".8rem" }}
          >
            Mange your account settings, billing,teams,and security
          </Typography>
          <input
            type="text"
            value={"email@gmail.com"}
            disabled
            style={{
              padding: 7,
              backgroundColor: "#0C0C0F",
              borderRadius: "5px",
              outline: "none",
              border: "1px solid #1B1B1E",
              width: "35%",
              marginTop: "1rem",
            }}
          />
        </Box>
        <Box
          borderTop={1}
          borderColor={"#27272A"}
          display="flex"
          justifyContent="space-between"
          px={3}
          py={1}
        >
          <Typography
            variant="body2"
            color="#96969F"
            sx={{ mt: 0.5, fontSize: ".8rem" }}
          >
            Mange your account settings, billing,teams,and security
          </Typography>
          <Button
            variant="contained"
            color="inherit"
            size="small"
            sx={{ fontSize: ".7rem", px: 0, bgcolor: "#7C7C7D" }}
          >
            Save
          </Button>
        </Box>
      </Box>
      <Box border={1} borderColor={"#712628"} borderRadius={2} mt={3}>
        <Box p={3} bgcolor={"#101013"}>
          <Typography variant="body2" color="initial">
            Delete Account
          </Typography>
          <Typography
            variant="body2"
            color="#96969F"
            sx={{ mt: 0.5, fontSize: ".8rem" }}
          >
            Mange your account settings, billing,teams,and security
          </Typography>
        </Box>
        <Box
          borderTop={1}
          borderColor={"#27272A"}
          display="flex"
          justifyContent="space-between"
          px={3}
          py={1.5}
          bgcolor="#3D1B1D"
        >
          <Typography
            variant="body2"
            color="#CB3C3C"
            sx={{ mt: 0.5, fontSize: ".8rem" }}
          >
            Mange your account settings, billing,teams,and security
          </Typography>
          <Button
            variant="contained"
            color="inherit"
            size="small"
            sx={{ fontSize: ".7rem", bgcolor: "#B91C1C", color: "white" }}
          >
            Delete Account
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
