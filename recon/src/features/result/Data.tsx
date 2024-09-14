export function createData(
  id: string,
  level: string,
  title: string,
  count: number,
  description: string,
  history: {
    Assets: string;
    FirstSeen?: string;
    LastSeen?: string;
    FoundAt?: string;
    id: string;
  }[]
) {
  return {
    id,
    level,
    title,
    count,
    description,
    history,
  };
}
export const rows = [
  createData(
    "1",
    "Critical",
    "Jelly Template Injection on ServiceNow",
    1,
    "Template-Injection-on-Service",
    []
  ),
  createData(
    "2",
    "High",
    "CVE - 2023 - 23333;",
    1,
    "CVE - 2023 - 23333 - RCE",
    [
      {
        Assets: "www.givenchybeauty.com",
        id:'1'
      },
    ]
  ),
  createData(
    "3",
    "Medium",
    "Microsoft FrontPage Extensions Check ",
    8,
    "CVE-2000-0114",
    [
      {
        Assets: "www.givenchybeauty.com",
        FoundAt:
          "https://www.givenchybeauty.com/int/en/downloader.php?redirect&file=%3Bid%00.zip",
        FirstSeen: "28d ago",
        id:'2'
      },
    ]
  ),
  createData(
    "4",
    "Low",
    "SSH Server CBC Mode Ciphers Enabled",
    3,
    "ssh-cbc-mode-ciphers",
    [
      {
        Assets: "www.sfl.ca",
        FoundAt: "https://www.sfl.ca/_vti_inf.html",
        FirstSeen: "2mo ago",
        LastSeen: "2mo ago",
        id:'3'
      },
      {
        Assets: "www.rcd-dgp.com",
        FirstSeen: "2mo ago",
        LastSeen: "2mo ago",
        FoundAt: "https://www.rcd-dgp.com/_vti_inf.html",
        id:'4'
      },
    ]
  ),
  createData(
    "5",
    "Unknown",
    "Symfony _fragment - Detect",
    2,
    "symfony-fragment",
    []
  ),
];
