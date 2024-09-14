export function createData(
  level: string,
  title: string,
  count: number,
  description: string,
  history: {
    Assets: string;
    FirstSeen?: string;
    LastSeen?: string;
    FoundAt?: string;
  }[]
) {
  return {
    level,
    title,
    count,
    description,
    history,
  };
}
export const rows = [
  createData(
    "Critical",
    "Jelly Template Injection on ServiceNow",
    1,
    "TEMPLATECVE-2023-23333-RCE",
    []
  ),
  createData("High", "CVE - 2023 - 23333;", 1, "CVE - 2023 - 23333 - RCE", [
    {
      Assets: "www.givenchybeauty.com",
    },
  ]),
  createData(
    "Medium",
    "Microsoft FrontPage Extensions Check (shtml.dll)",
    8,
    "CVE-2000-0114",
    [
      {
        Assets: "www.givenchybeauty.com",
        FoundAt:
          "https://www.givenchybeauty.com/int/en/downloader.php?redirect&file=%3Bid%00.zip",
        FirstSeen: "28d ago",
      },
    ]
  ),
  createData(
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
      },
      {
        Assets: "www.rcd-dgp.com",
        FirstSeen: "2mo ago",
        LastSeen: "2mo ago",
        FoundAt: "https://www.rcd-dgp.com/_vti_inf.html",
      },
    ]
  ),
  createData(
    "Unknown",
    "Symfony _fragment - Detect",
    2,
    "symfony-fragment",
    []
  ),
];
