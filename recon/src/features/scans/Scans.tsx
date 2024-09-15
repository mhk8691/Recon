import { Button, Container } from "@mui/material";
import Title from "../../ui/Title";
import Filter from "./Filter";
import Sort from "./Sort";
import ScanList from "./Table";
import Footer from "../../Footer";
import AddButton from "../../ui/AddButton";

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
export default function Scans() {
  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 7 }}>
        <Title
          title="Your Scans"
          description="Browse scans, delve into their details, or initiate a new scan."
        >
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
        </Title>
        <Filter />
        <Sort />
        <ScanList />
      </Container>
      <Footer />
    </>
  );
}
