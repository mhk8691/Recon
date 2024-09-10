import { Box, Button, Typography } from "@mui/material";
import AddButton from "../assets/AddButton";
const icon: React.ReactNode = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 18 18"
  >
    <g
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.25"
      stroke="currentColor"
    >
      <rect x="1.75" y="10.75" width="14.5" height="5" rx="2.5" ry="2.5"></rect>
      <circle
        cx="4.25"
        cy="13.25"
        r=".75"
        fill="currentColor"
        data-stroke="none"
        stroke="none"
      ></circle>
      <circle
        cx="6.75"
        cy="13.25"
        r=".75"
        fill="currentColor"
        data-stroke="none"
        stroke="none"
      ></circle>
      <circle cx="11.75" cy="4.25" r="1.5"></circle>
      <path d="M8.568,7.432c-1.757-1.757-1.757-4.607,0-6.364"></path>
      <path d="M14.932,7.432c1.757-1.757,1.757-4.607,0-6.364"></path>
      <line x1="11.75" y1="5.75" x2="11.75" y2="10.75"></line>
    </g>
  </svg>
);
export default function Header() {
  return (
    <Box display={"flex"} alignItems={"end"} justifyContent={"space-between"}>
      <Box>
        <Typography variant="h6" color="initial">
          Your Scans
        </Typography>
        <Typography variant="body2" color="#8A8A92" sx={{ mt: 1 }}>
          Browse scans, delve into their details, or initiate a new scan.
        </Typography>
      </Box>
      <Box>
        <AddButton>Create New Scan</AddButton>
        <Button
          variant="contained"
          color="inherit"
          size="medium"
          endIcon={icon}
          component={"a"}
          href={"https://docs.projectdiscovery.io/cloud/scanning/nuclei-scan"}
          target={"_blank"}
          sx={{
            fontSize: ".8rem",
            bgcolor: "#102D3C",
            color: "#238EC4",
            ml: 2,
          }}
        >
          Connect Cloud Services
        </Button>
      </Box>
    </Box>
  );
}
