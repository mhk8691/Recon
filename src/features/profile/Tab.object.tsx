import { TabType } from "../../ui/Tab.types";

export const tabObject: TabType[] = [
  {
    text: "Settings",
    link: "/settings",
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
            y="2.75"
            width="14.5"
            height="12.5"
            rx="2"
            ry="2"
            transform="translate(18 18) rotate(180)"
          ></rect>
          <line x1="5.25" y1="2.75" x2="5.25" y2="15.25"></line>
          <line x1="10.75" y1="10.25" x2="13.75" y2="10.25"></line>
          <line x1="9.25" y1="7.75" x2="12" y2="7.75"></line>
          <line x1="9.25" y1="12.75" x2="11.25" y2="12.75"></line>
          <line x1="7.75" y1="5.25" x2="9.25" y2="5.25"></line>
        </g>
      </svg>
    ),
  },
];
