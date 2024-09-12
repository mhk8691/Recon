import { Box, Typography } from "@mui/material";

export default function Security() {
  return (
    <Box>
      <Box>
        <Typography variant="body1" color="initial">
          Security
        </Typography>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={3}
      >
        <Typography variant="body2" color="initial" sx={{ fontSize: ".8rem" }}>
          Passowrd
        </Typography>
        <Typography variant="body2" color="#4B4EB2" sx={{ fontSize: ".8rem" }}>
          Update password
        </Typography>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={3}
      >
        <Typography variant="body2" color="initial" sx={{ fontSize: ".8rem" }}>
          Two-step verification
        </Typography>
        <Typography variant="body2" color="#4B4EB2" sx={{ fontSize: ".8rem" }}>
          + Add two-step verification
        </Typography>
      </Box>
    </Box>
  );
}
