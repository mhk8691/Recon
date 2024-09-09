import { TabType } from "../assets/Tab.types";
export const tabObject: Array<TabType> = [
  {
    text: "Scans",
    link: "/scans",
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
          <path d="M15.581,5.954c.429,.926,.669,1.958,.669,3.046,0,4.004-3.246,7.25-7.25,7.25S1.75,13.004,1.75,9,4.996,1.75,9,1.75c2.002,0,3.815,.811,5.126,2.123"></path>
          <path d="M12.744,8.791c.004,.069,.006,.139,.006,.209,0,2.071-1.679,3.75-3.75,3.75s-3.75-1.679-3.75-3.75,1.679-3.75,3.75-3.75c1.036,0,1.973,.42,2.652,1.098"></path>
          <line x1="9" y1="9" x2="15.75" y2="2.25"></line>
        </g>
      </svg>
    ),
    count: 15,
  },
  {
    text: "Result",
    link: "/scans/results",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <g>
          <rect
            x="2.75"
            y="2.75"
            width="4.5"
            height="12.5"
            rx="1.5"
            ry="1.5"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.25"
          ></rect>
          <rect
            x="10.75"
            y="5.75"
            width="4.5"
            height="6.5"
            rx="1.5"
            ry="1.5"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.25"
          ></rect>
        </g>
      </svg>
    ),
    count: "488",
  },
  {
    text: "Configurations",
    link: "/scans/configs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
  },
];
