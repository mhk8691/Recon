import { FilterType } from "./Filter.types";
import RadarIcon from "@mui/icons-material/Radar";
import CachedIcon from "@mui/icons-material/Cached";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CheckIcon from "@mui/icons-material/Check";
export const filterObject: Array<FilterType> = [
  {
    icon: <RadarIcon fontSize="small" />,
    text: "TOTAL SCANS",
    count: 10,
    bgcolor: "#272746",
    color: "#818CF8",
    id: 1,
  },
  {
    icon: <CachedIcon fontSize="small" />,
    text: "RUNING SCANS",
    count: 0,
    bgcolor: "#38270B",
    color: "#D78B0B",
    id: 2,
  },
  {
    icon: <ScheduleIcon fontSize="small" />,
    text: "SCHEDULED SCANS",
    count: 0,
    bgcolor: "#1E1E21",
    color: "#9E9EA7",
    id: 3,
  },
  {
    icon: <CheckIcon fontSize="small" />,
    text: "COMPLETED SCANS",
    count: 9,
    bgcolor: "#0E2E1C",
    color: "#1FB256",
    id: 4,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <g
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.25"
          stroke="currentColor"
        >
          <rect
            x="1.75"
            y="10.75"
            width="14.5"
            height="5"
            rx="2.5"
            ry="2.5"
          ></rect>
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
    ),
    text: "LOCAL SCANS",
    count: 1,
    bgcolor: "#0E2533",
    color: "#228ABE",
    id: 5,
  },
];
