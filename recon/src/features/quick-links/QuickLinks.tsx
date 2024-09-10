import { Box, Typography, Grid2 as Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
type Link = {
  title: string;
  icon: React.ReactNode;
  link: string;
  description: string;
};
const links: Array<Link> = [
  {
    title: "Write Template using AI",
    icon: (
      <svg
        fill="currentColor"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.15 3.01c.83-.65 1.92-1 3-1a2.3 2.3 0 0 1 1.86.88A2.3 2.3 0 0 1 13.86 2c1.08 0 2.17.35 3 1 .65.5 1.16 1.2 1.35 2.04.42.07.8.28 1.1.57.48.45.82 1.1 1.04 1.77.22.68.33 1.45.3 2.18a4.9 4.9 0 0 1-.18 1.13l.06.03c.37.17.67.45.9.8.42.7.57 1.68.57 2.94 0 1.44-.55 2.42-1.26 3.03-.41.35-.87.57-1.27.7-.14.68-.49 1.46-1.02 2.13A4.24 4.24 0 0 1 15.09 22a3.9 3.9 0 0 1-2.77-1.31 5.36 5.36 0 0 1-.31-.36l-.31.36a3.9 3.9 0 0 1-2.78 1.3 4.24 4.24 0 0 1-3.36-1.66 5.17 5.17 0 0 1-1.01-2.14c-.4-.12-.86-.34-1.27-.69A3.83 3.83 0 0 1 2 14.47c0-1.26.15-2.25.58-2.93a2.1 2.1 0 0 1 .96-.84 4.9 4.9 0 0 1-.18-1.13c-.03-.73.08-1.5.3-2.18A4.2 4.2 0 0 1 4.7 5.62c.3-.29.68-.5 1.1-.57C6 4.2 6.5 3.52 7.15 3Zm.92 1.19c-.54.42-.86.99-.86 1.64a.75.75 0 0 1-.99.7c-.14-.04-.28-.03-.49.17-.23.22-.47.61-.64 1.14-.16.52-.25 1.1-.22 1.65.02.56.16 1.02.37 1.33l.08.17H6.4c1.5 0 2.74 1.17 2.84 2.64a2 2 0 1 1-1.5.01A1.35 1.35 0 0 0 6.4 12.5H3.78c-.15.35-.27.95-.27 1.97s.38 1.58.74 1.9c.4.34.85.43.98.43.41 0 .75.33.75.75s.23 1.18.76 1.84c.5.64 1.23 1.1 2.18 1.1.64 0 1.23-.35 1.7-.84a3.7 3.7 0 0 0 .63-.92V9.25h-.9a2 2 0 1 1 0-1.5h.9V5.22a2.06 2.06 0 0 0-.02-.3c-.03-.19-.07-.43-.16-.67-.1-.24-.2-.43-.35-.55a.8.8 0 0 0-.57-.2c-.76 0-1.52.26-2.08.7Zm4.7 12.8v1.73l.11.23c.12.2.3.45.52.69.47.49 1.06.85 1.7.85.95 0 1.67-.47 2.18-1.1.53-.67.76-1.43.76-1.85 0-.42.33-.75.75-.75.13 0 .57-.1.97-.44.37-.31.74-.87.74-1.9 0-1.2-.16-1.82-.35-2.13a.6.6 0 0 0-.26-.25c-.1-.04-.25-.08-.49-.08a.75.75 0 0 1-.62-1.17c.2-.3.34-.77.36-1.33a4.84 4.84 0 0 0-.22-1.65c-.17-.53-.4-.92-.64-1.14-.2-.2-.35-.2-.49-.16a.75.75 0 0 1-.98-.71c0-.65-.32-1.22-.87-1.64a3.45 3.45 0 0 0-2.08-.7.8.8 0 0 0-.57.2c-.14.12-.25.31-.34.55a3.06 3.06 0 0 0-.19.96V15.5h.64c.75 0 1.35-.6 1.35-1.35v-1.8a2 2 0 1 1 1.5 0v1.8A2.85 2.85 0 0 1 13.4 17h-.64ZM8.5 8a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM8 15.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm7-5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    link: "/templates",
    description: "Automate your custom vulnerability detections.",
  },
  {
    title: "Configure Alerts",
    icon: (
      <svg
        fill="currentColor"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2a7.5 7.5 0 0 1 7.5 7.25v4.35l1.38 3.15a1.25 1.25 0 0 1-1.15 1.75H15a3 3 0 0 1-6 .18v-.18H4.27a1.25 1.25 0 0 1-1.14-1.75L4.5 13.6V9.5C4.5 5.35 7.85 2 12 2Zm1.5 16.5h-3a1.5 1.5 0 0 0 3 .15v-.15ZM12 3.5c-3.32 0-6 2.67-6 6v4.4L4.66 17h14.7L18 13.9V9.29a5.99 5.99 0 0 0-6-5.78Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    link: "/scans/configs?type=alerting",
    description: "Receive alerts on new vulnerabilities and assets.",
  },
  {
    title: "Connect Ticketing Tools",
    icon: (
      <svg
        fill="currentColor"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2a7.5 7.5 0 0 1 7.5 7.25v4.35l1.38 3.15a1.25 1.25 0 0 1-1.15 1.75H15a3 3 0 0 1-6 .18v-.18H4.27a1.25 1.25 0 0 1-1.14-1.75L4.5 13.6V9.5C4.5 5.35 7.85 2 12 2Zm1.5 16.5h-3a1.5 1.5 0 0 0 3 .15v-.15ZM12 3.5c-3.32 0-6 2.67-6 6v4.4L4.66 17h14.7L18 13.9V9.29a5.99 5.99 0 0 0-6-5.78Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    link: "/scans/configs?type=reporting",
    description: "Automatically create tickets on Jira, GitLab.",
  },
  {
    title: "Integrate Local Scans",
    icon: (
      <svg
        fill="currentColor"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 5.75A2.75 2.75 0 0 1 7.25 3a.75.75 0 0 1 0 1.5C6.56 4.5 6 5.06 6 5.75v4.3c0 .75-.3 1.45-.8 1.95.5.5.8 1.2.8 1.94v4.31c0 .69.56 1.25 1.25 1.25a.75.75 0 0 1 0 1.5 2.75 2.75 0 0 1-2.75-2.75v-4.3c0-.55-.34-1.02-.85-1.2l-.14-.04a.75.75 0 0 1 0-1.42l.14-.05c.5-.17.85-.64.85-1.18V5.75Zm15 0A2.75 2.75 0 0 0 16.75 3a.75.75 0 0 0 0 1.5c.69 0 1.25.56 1.25 1.25v4.3c0 .75.3 1.45.8 1.95-.5.5-.8 1.2-.8 1.94v4.31c0 .69-.56 1.25-1.25 1.25a.75.75 0 0 0 0 1.5 2.75 2.75 0 0 0 2.75-2.75v-4.3c0-.55.34-1.02.85-1.2l.14-.04a.75.75 0 0 0 0-1.42l-.14-.05a1.25 1.25 0 0 1-.85-1.18V5.75Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    link: "/scans/configs?type=template",
    description: "Setup scans for your internal network, CI/CD.",
  },

  {
    title: "Connect Cloud Services",
    icon: (
      <svg
        fill="currentColor"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5.5a4.5 4.5 0 0 0-4.5 4.29.75.75 0 0 1-.74.71H6.5a3 3 0 1 0 0 6H10c.03.53.15 1.03.33 1.5H6.5a4.5 4.5 0 0 1-.42-8.98 6 6 0 0 1 11.84 0c2.23.2 4 2.04 4.08 4.31a4.76 4.76 0 0 0-2-1.5 3 3 0 0 0-2.5-1.33h-.26a.75.75 0 0 1-.74-.71A4.5 4.5 0 0 0 12 5.5Zm10 10.75a3.75 3.75 0 0 0-3.75-3.75h-.1a.75.75 0 0 0 .1 1.5h.15a2.25 2.25 0 0 1-.15 4.5l-.1.01a.75.75 0 0 0 .1 1.5V20h.2A3.75 3.75 0 0 0 22 16.24Zm-6.5-3a.75.75 0 0 0-.75-.75h-.2a3.75 3.75 0 0 0 .2 7.5h.1a.75.75 0 0 0-.1-1.5h-.15a2.25 2.25 0 0 1 .15-4.5h.1a.75.75 0 0 0 .65-.75Zm3.5 3a.75.75 0 0 0-.75-.75h-3.6a.75.75 0 0 0 .1 1.5h3.6a.75.75 0 0 0 .65-.75Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    link: "/cloud/scanning/nuclei-scan",
    description: "Monitor your assets as your team deploys.",
  },
  {
    title: "API",
    icon: (
      <svg
        fill="currentColor"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5.5a4.5 4.5 0 0 0-4.5 4.29.75.75 0 0 1-.74.71H6.5a3 3 0 1 0 0 6H10c.03.53.15 1.03.33 1.5H6.5a4.5 4.5 0 0 1-.42-8.98 6 6 0 0 1 11.84 0c2.23.2 4 2.04 4.08 4.31a4.76 4.76 0 0 0-2-1.5 3 3 0 0 0-2.5-1.33h-.26a.75.75 0 0 1-.74-.71A4.5 4.5 0 0 0 12 5.5Zm10 10.75a3.75 3.75 0 0 0-3.75-3.75h-.1a.75.75 0 0 0 .1 1.5h.15a2.25 2.25 0 0 1-.15 4.5l-.1.01a.75.75 0 0 0 .1 1.5V20h.2A3.75 3.75 0 0 0 22 16.24Zm-6.5-3a.75.75 0 0 0-.75-.75h-.2a3.75 3.75 0 0 0 .2 7.5h.1a.75.75 0 0 0-.1-1.5h-.15a2.25 2.25 0 0 1 .15-4.5h.1a.75.75 0 0 0 .65-.75Zm3.5 3a.75.75 0 0 0-.75-.75h-3.6a.75.75 0 0 0 .1 1.5h3.6a.75.75 0 0 0 .65-.75Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    link: "/api-reference/introduction",
    description: "Create custom automations using our APIs",
  },
];
export default function QuickLinks() {
    const navigate = useNavigate();
  return (
    <Box mt={10}>
      <Typography variant="body1" color="initial">
        Quick Links
      </Typography>
      <Grid container spacing={1} mt={2}>
        {links.map((link, index) => (
          <Grid size={4} key={index} sx={{ cursor: "pointer" }}>
            <Box
              border={1}
              borderColor={"#18181A"}
              borderRadius={2}
              px={3}
              py={2.5}
              bgcolor="#0D0D0F"
              sx={{
                "&:hover": {
                  bgcolor: "#171719",
                },
              }}
              display={"flex"}
              alignItems={"center"}
              onClick={() => navigate(link.link)}
            >
              <Box>{link.icon}</Box>
              <Box ml={2}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: "#B1B1B2", fontSize: ".9rem" }}
                >
                  {link.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="initial"
                  sx={{ fontSize: ".8rem", color: "#676769" }}
                >
                  {link.description}
                </Typography>
              </Box>
              <Box ml={3}>
                <svg
                  fill="#676769"
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.74 3.2a.75.75 0 0 0-.04 1.06L9.23 8 5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04Z"
                    fill="#676769"
                  ></path>
                </svg>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
