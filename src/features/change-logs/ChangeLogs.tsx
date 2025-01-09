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
import { changeLogs } from "./Data";
import { useState } from "react";
import BasicModal from "./Modal";


export default function ChangeLogs() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
                onClick={handleOpen}
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
                  "&:hover": {
                    bgcolor: "#171719",
                  },
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
        <BasicModal open={open} handleClose={handleClose} />
      </>
    </Box>
  );
}
