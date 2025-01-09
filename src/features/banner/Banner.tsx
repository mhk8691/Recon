import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const boxStyle: React.CSSProperties = {
  backgroundImage: 'url("../../public/Banner.svg")',
  backgroundSize: "cover",
  borderBottom: "1px solid #202022",
};
export default function Banner() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={boxStyle}
      padding="1rem"
    >
      <Box alignSelf="center">
        <Typography
          variant="body2"
          color="initial"
          component="span"
          sx={{
            backgroundColor: "#18181B",
            border: "1px solid #202022",
            borderRadius: "1rem",
            py: 0.3,
            px: 1.5,
            color: "#9898A0",
          }}
        >
          Global Community Feed
        </Typography>
        <Typography variant="body1" color="initial" mt={3.5}>
          Real time vulnerability templates feed
        </Typography>
        <Typography
          variant="subtitle2"
          color="#47D179"
          sx={{
            fontSize: ".8rem",
            backgroundColor: "#18271F",
            boxSizing: "content-box",
            borderRadius: ".5rem",
            py: 0.7,
            px: 2,
          }}
          mt={1.7}
        >
          67 new templates released in last 30 days
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#202C3E",
          borderRadius: ".5rem",
          padding: "1.5rem",
          paddingRight: "2.2rem",
          paddingLeft: "1.8rem",
        }}
      >
        <Typography
          variant="body2"
          color="initial"
          sx={{ fontSize: ".8rem", paddingLeft: "1rem" }}
        >
          What’s next?
        </Typography>
        <Typography
          variant="body2"
          color="initial"
          sx={{ textAlign: "justify", margin: ".7rem 0 1.5rem 0" }}
        >
          Automatically run a vulnerability scan <br /> whenever a new template
          is added to <br /> the feed. Interested in learning more?
        </Typography>
        <Typography
          variant="body2"
          color="#4694CF"
          component={Link}
          to="/request-demo"
          sx={{
            border: "1px solid #356186",
            padding: ".28rem 1rem",
            borderRadius: "2rem",
            backgroundColor: "#2F506D",
          }}
        >
          Reach out to us
        </Typography>
      </Box>
    </Box>
  );
}
