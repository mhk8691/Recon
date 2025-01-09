import { TabType } from "../../ui/Tab.types";
export const tabObject: Array<TabType> = [
  {
    text: "Assets Groups",
    link: "/assets",
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
          stroke="#52525B"
        >
          <circle
            cx="4.25"
            cy="5.25"
            r=".75"
            fill="currentColor"
            data-stroke="none"
            stroke="#52525B"
          ></circle>
          <circle
            cx="6.75"
            cy="5.25"
            r=".75"
            fill="currentColor"
            data-stroke="none"
            stroke="#52525B"
          ></circle>
          <circle
            cx="4.25"
            cy="12.75"
            r=".75"
            fill="currentColor"
            data-stroke="none"
            stroke="#52525B"
          ></circle>
          <circle
            cx="6.75"
            cy="12.75"
            r=".75"
            fill="currentColor"
            data-stroke="none"
            stroke="#52525B"
          ></circle>
          <rect
            x="1.75"
            y="2.75"
            width="14.5"
            height="5"
            rx="1.5"
            ry="1.5"
          ></rect>
          <rect
            x="1.75"
            y="10.25"
            width="14.5"
            height="5"
            rx="1.5"
            ry="1.5"
          ></rect>
        </g>
      </svg>
    ),
    count: 15,
  },
  {
    text: "Inventory",
    link: "/assets/inventory",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path>
        <rect x="3" y="14" width="7" height="7" rx="1"></rect>
        <circle cx="17.5" cy="17.5" r="3.5"></circle>
      </svg>
    ),
    count: "16.99k",
  },
  {
    text: "Technologies",
    link: "/assets/technologies",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect width="16" height="16" x="4" y="4" rx="2"></rect>
        <rect width="6" height="6" x="9" y="9" rx="1"></rect>
        <path d="M15 2v2"></path>
        <path d="M15 20v2"></path>
        <path d="M2 15h2"></path>
        <path d="M2 9h2"></path>
        <path d="M20 15h2"></path>
        <path d="M20 9h2"></path>
        <path d="M9 2v2"></path>
        <path d="M9 20v2"></path>
      </svg>
    ),
    count: 382,
  },
];
