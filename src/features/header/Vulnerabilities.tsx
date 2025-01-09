import { Box, Typography } from "@mui/material";
import { vulnerabilitiesObject } from "./vulnerabilities.object";

function colorCalculator(level: string): Array<string> {
  let color: string = "";
  let backgroundColor: string = "";
  let secoundColor: string = "";
  if (level === "Critical") {
    color = "#5C5FE0";
    backgroundColor = "#202041";
    secoundColor = "#252544";
  } else if (level === "High") {
    color = "#D09F09";
    backgroundColor = "#392E0E";
    secoundColor = "#403617";
  } else if (level === "Medium") {
    color = "#D5510C";
    backgroundColor = "#391C0E";
    secoundColor = "#402317";
  } else if (level === "Low") {
    color = "#D61C45";
    backgroundColor = "#37101A";
    secoundColor = "#3E1723";
  } else if (level === "Unknown") {
    color = "#A5A5A8";
    backgroundColor = "#3F3F46";
    secoundColor = "#282828";
  }
  return [backgroundColor, secoundColor, color];
}

export default function Vulnerabilities() {
  return (
    <Box
      border={1}
      borderColor={"#18181A"}
      display={"flex"}
      justifyContent={"space-between"}
      borderRadius={3}
    >
      <Box px={4} py={4}>
        <Box
          sx={{
            background: "liniear-gradient(to right, #2B0F13 , #3E1723)",
          }}
        >
          <Box>
            <svg
              fill="red"
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{}}
            >
              <path
                d="M14.25 2c.38 0 .7.28.74.65l.01.1v.75c0 .64-.2 1.22-.53 1.7a3.75 3.75 0 0 1 2.52 3.3h.26a2.25 2.25 0 0 0 2.24-2.26V4.75a.75.75 0 0 1 1.5 0v1.48c0 2-1.56 3.65-3.54 3.76H17v1.51h4.25c.38 0 .7.28.75.65v.1c0 .38-.28.7-.65.74l-.1.01H17v2H17.45a3.75 3.75 0 0 1 3.53 3.57v1.68a.75.75 0 0 1-1.5.1v-1.59c.01-1.2-.9-2.17-2.08-2.25h-.15l-.48-.01a5 5 0 0 1-9.54 0h-.49a2.25 2.25 0 0 0-2.24 2.26v1.49a.75.75 0 1 1-1.5 0v-1.48c0-2 1.56-3.65 3.54-3.76h.21L7 15v-2H2.75a.75.75 0 0 1-.74-.65l-.01-.1c0-.38.28-.7.65-.74h.1L7 11.5V10H6.54A3.75 3.75 0 0 1 3 6.42V4.75a.75.75 0 0 1 1.5-.1v1.59c0 1.19.92 2.17 2.09 2.25H7a3.75 3.75 0 0 1 2.52-3.28c-.3-.43-.48-.94-.52-1.5L9 3.51v-.76a.75.75 0 0 1 1.5-.1v.85a1.5 1.5 0 0 0 3 .15v-.9c0-.41.34-.75.75-.75Z"
                fill="red"
              ></path>
            </svg>
          </Box>
          <Typography variant="body1" color="#727273" sx={{ mt: 7 }}>
            You have <span style={{ color: "white" }}>34</span> open
            vulnerabilities. <br /> No new vulnerabilities detected last week!
          </Typography>
        </Box>
      </Box>
      <Box display={"flex"} gap={1} alignItems={"end"} mr={2}>
        {vulnerabilitiesObject.map((item, index) => (
          <Box key={index}>
            <Typography
              variant="body1"
              color={colorCalculator(item.level)[2]}
              sx={{ mt: 5, textAlign: "center" }}
            >
              {item.count}
            </Typography>
            <Box
              mt={0.5}
              bgcolor={colorCalculator(item.level)[1]}
              borderRadius={2}
              sx={{
                "&:hover": {
                  borderTop: `1px solid ${colorCalculator(item.level)[2]}`,
                  boxShadow: `0 0 5px ${colorCalculator(item.level)[2]}`,
                },
              }}
            >
              <Box>
                <svg
                  width="125"
                  height={item.count > 0 ? item.count * 7 : 0}
                  viewBox="0 0 125 264"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "block" }}
                >
                  <mask
                    id="mask0_1005_3715"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="200"
                    height="264"
                  >
                    <rect
                      width="200"
                      height="264"
                      fill="url(#paint0_linear_1005_3715)"
                    ></rect>
                  </mask>
                  <g mask="url(#mask0_1005_3715)">
                    <path
                      d="M0.500002 0L0.5 264M5.5 0L5.5 264M10.5 0L10.5 264M15.5 0L15.5 264M20.5 0L20.5 264M25.5 0L25.5 264M30.5 0L30.5 264M35.5 0V264M40.5 0V264M45.5 0V264M50.5 0V264M55.5 0V264M60.5 0V264M65.5 0V264M70.5 0V264M75.5 0V264M80.5 0V264M85.5 0V264M90.5 0V264M95.5 0V264M100.5 0V264M105.5 0V264M110.5 0V264M115.5 0V264M120.5 0V264M125.5 0V264"
                      stroke="currentColor"
                      stroke-dasharray="1 4"
                    ></path>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1005_3715"
                      x1="62.5"
                      y1="0"
                      x2="62.5"
                      y2="264"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#D9D9D9"></stop>
                      <stop
                        offset="1"
                        stop-color="#D9D9D9"
                        stop-opacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </Box>
              <Box bgcolor={colorCalculator(item.level)[0]} py={0.5}>
                <Typography
                  variant="body2"
                  color={colorCalculator(item.level)[2]}
                  sx={{ textAlign: "center" }}
                >
                  {item.level}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
