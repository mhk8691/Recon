import { Box, Button, Typography } from "@mui/material";

export default function Team() {
  return (
    <Box>
      <Box
        border={1}
        borderColor={"#27272A"}
        borderRadius={2}
        p={3}
        bgcolor={"#101013"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
          <Box>
            <Typography variant="body2" color="initial">
              Create Team
            </Typography>
            <Typography
              variant="body2"
              color="#96969F"
              sx={{ mt: 0.5, fontSize: ".8rem" }}
            >
              Mange your account settings, billing,teams,and security
            </Typography>
          </Box>

          <Box>
            <Button
              variant="contained"
              color="inherit"
              size="medium"
              sx={{ fontSize: ".7rem" }}
            >
              Create team
            </Button>
          </Box>
        </Box>
    </Box>
  );
}
