import { Box, Container, Typography } from "@mui/material";
import PestControlIcon from "@mui/icons-material/PestControl";
import InfoIcon from "@mui/icons-material/Info";
const FilterObject: {
  icon: React.ReactNode;
  title: string;
  count: number;
}[] = [
  {
    icon: <PestControlIcon fontSize="small" />,
    title: "VULNERABILITIES",
    count: 34,
  },
  {
    icon: <InfoIcon fontSize="small" />,
    title: "INFO",
    count: 454,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M6 3h12l4 6-10 13L2 9Z"></path>
        <path d="M11 3 8 9l4 13 4-13-3-6"></path>
        <path d="M2 9h20"></path>
      </svg>
    ),
    title: "AFFECTED ASSETS",
    count: 24,
  },
];

function LineVulnerabilities() {
  return (
    <Box
      display={"flex"}
      gap={0.5}
      width={"100%"}
      overflow={"hidden"}
      mb={2}
      px={2}
    >
      <Box width="10%" height="4px" bgcolor="#EF4444"></Box>
      <Box width="10%" height="4px" bgcolor="#E26915"></Box>
      <Box width="40%" height="4px" bgcolor="#EAB308"></Box>
      <Box width="20%" height="4px" bgcolor="#6366F1"></Box>
      <Box width="13%" height="4px" bgcolor="#71717A"></Box>
    </Box>
  );
}
function LineInfo() {
  return (
    <Box
      display={"flex"}
      gap={0.5}
      width={"100%"}
      overflow={"hidden"}
      mb={2}
      px={2}
    >
      <Box width="100%" height="4px" bgcolor="#22C55E"></Box>
    </Box>
  );
}
function LineAssets() {
  return (
    <Box
      display={"flex"}
      gap={0.5}
      width={"100%"}
      overflow={"hidden"}
      mb={2}
      px={2}
    >
      <Box width="100%" height="4px" bgcolor="#EF4444"></Box>
    </Box>
  );
}

export default function Filter() {
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        display: "flex",
        mt: 2,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {FilterObject.map((item, index) => (
        <Box
          key={index}
          borderRadius={2}
          border={1}
          sx={{ borderColor: "#404040", width: "250px" }}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={2}
          >
            <Box display={"flex"} alignItems={"center"}>
              <span>{item.icon}</span>
              <Typography
                variant="body2"
                color="white"
                sx={{ ml: 0.5, fontSize: ".8rem", color: "#DDDDDD" }}
              >
                {item.title}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" color="#A0A0AA">
                {item.count}
              </Typography>
            </Box>
          </Box>
          <Box overflow={"hidden"}>
            {item.title === "VULNERABILITIES" && <LineVulnerabilities />}
            {item.title === "INFO" && <LineInfo />}
            {item.title === "AFFECTED ASSETS" && <LineAssets />}
          </Box>
        </Box>
      ))}
      <Box>
        <Typography variant="body1" color="white">
          Result
        </Typography>
        <Typography
          variant="body2"
          color="#9A9AA3"
          sx={{ fontSize: ".8rem", mt: 1 }}
        >
          View the results of your scans. Apply filters to narrow down your
          results.
        </Typography>
      </Box>
    </Container>
  );
}
