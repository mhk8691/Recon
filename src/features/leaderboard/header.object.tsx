type HeaderType = {
  icon: React.ReactNode;
  title: string;
  count: string | number;
  description: string;
  iconDesc?: React.ReactNode;
  hasStyle?: boolean;
  color:string
  bgcolor?:string
};

export const headerObject: HeaderType[] = [
  {
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
    title: "Templates published",
    count: "8,936",
    description: "Severity breakdown",
    color: "#78787F",
    hasStyle: true,
  },
  {
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
    title: "top category",
    count: "CVE",
    description: "2,667 Templates",
    iconDesc: (
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
    color: "#1A9750",
    bgcolor: "#173425",
  },
  {
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
    title: "total contributors",
    count: 904,
    description: "dhiyaneshdk in the top contributor",
    color: "#8C8C94",
    bgcolor: "#18181B",
  },
  {
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
    title: "total critical",
    count: 423,
    description: "12.4% templates are tagged critical",
    color: "#C4393A",
    bgcolor: "#211315",
  },
];
