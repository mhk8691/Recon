import { TabType } from "../../ui/Tab.types";
export const tabObject: Array<TabType> = [
  {
    text: "Editor",
    link: "/templates",
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
  {
    text: "History",
    link: "/templates/history",
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
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path d="M1.75,9c0,4.004,3.246,7.25,7.25,7.25s7.25-3.246,7.25-7.25S13.004,1.75,9,1.75c-3.031,0-5.627,1.86-6.71,4.5"></path>
          <polyline points="1.88 3.305 2.288 6.25 5.232 5.843"></polyline>
          <polyline points="9 4.75 9 9 12.25 11.25"></polyline>
        </g>
      </svg>
    ),
  },
  {
    text: "Leaderboard",
    link: "/templates/leaderboard",
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
          <path d="M7.75,7.75h2.5c.552,0,1,.448,1,1v6.5H6.75v-6.5c0-.552,.448-1,1-1Z"></path>
          <path d="M3.25,11.75h3.5v3.5H3.25c-.552,0-1-.448-1-1v-1.5c0-.552,.448-1,1-1Z"></path>
          <path d="M11.25,10.25h3.5c.552,0,1,.448,1,1v3c0,.552-.448,1-1,1h-3.5v-5h0Z"></path>
          <path
            d="M11.776,1.994c-.059-.181-.215-.313-.403-.34l-1.329-.193-.595-1.204c-.168-.342-.729-.342-.896,0l-.595,1.204-1.33,.193c-.188,.027-.345,.159-.403,.34-.059,.181-.01,.379,.127,.512l.962,.938-.228,1.324c-.032,.188,.045,.377,.199,.489,.087,.063,.19,.096,.294,.096,.08,0,.159-.019,.232-.058l1.189-.625,1.188,.625c.168,.089,.372,.074,.526-.038,.154-.112,.231-.302,.199-.489l-.228-1.324,.962-.938c.137-.133,.186-.332,.127-.512Z"
            fill="currentColor"
            data-stroke="none"
            stroke="none"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    text: "Feed",
    link: "/templates/feed",
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
          <circle cx="9" cy="9" r="1.75"></circle>
          <path d="M5.641,12.359c-1.855-1.855-1.855-4.863,0-6.718"></path>
          <path d="M3.52,14.48C.493,11.454,.493,6.546,3.52,3.52"></path>
          <path d="M12.359,12.359c1.855-1.855,1.855-4.863,0-6.718"></path>
          <path d="M14.48,14.48c3.027-3.027,3.027-7.934,0-10.96"></path>
        </g>
      </svg>
    ),
  },
];
