import { Box, Typography } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import styles from "./ChangeLogs.module.css";
import { Link } from "react-router-dom";

type ChangeLog = {
  img: string;
  description: string;
  data: string;
  version: string;
};

const changeLogs: Array<ChangeLog> = [
  {
    img: "https://cloud.projectdiscovery.io/_next/image?url=https%3A%2F%2Ffb-usercontent.fra1.cdn.digitaloceanspaces.com%2F0191b816-d596-751d-a14f-4df0be5df0c1.png&w=384&q=75&dpl=dpl_DCjLnUFNYoBB4sXz5NrnHWWp3CZ6",
    description:
      " Enhanced Vulnerability Management, AWS Integration, and Real-time Template Feed",
    data: "3d ago",
    version: "v0.9.0",
  },
  {
    img: "https://cloud.projectdiscovery.io/_next/image?url=https%3A%2F%2Ffb-usercontent.fra1.cdn.digitaloceanspaces.com%2F0191136a-9f9b-7fbe-b9ed-bcc12de968db.png&w=384&q=75&dpl=dpl_DCjLnUFNYoBB4sXz5NrnHWWp3CZ6",
    description:
      " Asset & Tech Inventory with AI-Powered Search - August 1, 2024",
    data: "1mo ago",
    version: "v0.8.8",
  },
  {
    img: "https://cloud.projectdiscovery.io/_next/image?url=https%3A%2F%2Ffb-usercontent.fra1.cdn.digitaloceanspaces.com%2F1720532267435..png&w=384&q=75&dpl=dpl_DCjLnUFNYoBB4sXz5NrnHWWp3CZ6",
    description:
      " Enhancing Asset Discovery with Screenshots and Tech Stack Detection - July 8, 2024",
    data: "1mo ago",
    version: "v0.8.8",
  },
  {
    img: "https://cloud.projectdiscovery.io/_next/image?url=https%3A%2F%2Ffb-usercontent.fra1.cdn.digitaloceanspaces.com%2F1718643078461..png&w=384&q=75&dpl=dpl_DCjLnUFNYoBB4sXz5NrnHWWp3CZ6",
    description:
      " Introducing Multiple Team Support with RBAC and 2FA, and Asset Filtering - June 17, 2024",
    data: "2mo ago",
    version: "v0.8.7",
  },
  {
    img: "https://cloud.projectdiscovery.io/_next/image?url=https%3A%2F%2Ffb-usercontent.fra1.cdn.digitaloceanspaces.com%2F1717417134163..png&w=384&q=75&dpl=dpl_DCjLnUFNYoBB4sXz5NrnHWWp3CZ6",
    description: " Enhanced Asset Discovery and Free Trial - June 4, 2024",
    data: "3mo ago",
    version: "v0.8.6",
  },
  {
    img: "https://cloud.projectdiscovery.io/_next/image?url=https%3A%2F%2Ffb-usercontent.fra1.cdn.digitaloceanspaces.com%2F1716238578443..png&w=384&q=75&dpl=dpl_DCjLnUFNYoBB4sXz5NrnHWWp3CZ6",
    description: " New Asset Details and Ticket Tracking",
    data: "3mo ago",
    version: "v0.8.5",
  },
];

export default function ChangeLogs() {
  return (
    <Box mt={7}>
      <Typography variant="body1" color="initial">
        Changelogs
      </Typography>

      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          grabCursor={true}
          modules={[Pagination]}
          className="mySwiper"
          style={{ marginTop: "1rem" }}
        >
          {changeLogs.map((changelog, index) => (
            <SwiperSlide key={index}>
              <Box
                p={1}
                sx={{
                  backgroundColor: "#0D0D0F",
                  borderRadius: "12px",
                  height: "310px",
                  border: "2px solid #18181B",
                  "&:hover": {
                    bgcolor: "#171719",
                  },
                }}
              >
                <img
                  src={changelog.img}
                  alt="logo"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    border: "1px solid #18181B",
                  }}
                  className={styles.test}
                />

                <Box display={"flex"} justifyContent={"space-between"} px={1}>
                  <Typography
                    variant="body2"
                    color="initial"
                    mt={1}
                    sx={{
                      border: "1px solid #44B9DD",
                      borderRadius: "12px",
                      px: 0.5,
                      backgroundColor: "#1E2C32",
                      color: "#44B9DD",
                      fontSize: ".8rem",
                    }}
                  >
                    {changelog.version}
                  </Typography>
                  <Typography variant="body2" color="#787879" mt={1}>
                    {changelog.data}
                  </Typography>
                </Box>
                <Box px={1}>
                  <Typography variant="body2" color="#BABABB" mt={2}>
                    {changelog.description}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <Link
              to="https://projectdiscovery.featurebase.app/changelog"
              style={{ color: "white" }}
            >
              <Box
                sx={{
                  backgroundColor: "#0D0D0F",
                  borderRadius: "12px",
                  height: "310px",
                  border: "2px solid #18181B",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ mr: 0.5, fontSize: ".9rem" }}
                >
                  View All
                </Typography>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#59595A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </Box>
            </Link>
          </SwiperSlide>
        </Swiper>
      </>
    </Box>
  );
}
