import RestartAltIcon from "@mui/icons-material/RestartAlt";

function createData(
  title: string,
  host: string,
  severity: string,
  lastFound: string,
  matches: boolean,
  retest: React.ReactNode
) {
  return { title, host, severity, lastFound, matches, retest };
}
export const rows = [
  createData(
    "Zimbra Collaboration (ZCS) - Cross S...",
    "www.lapersonnelle.com",
    "MEDIUM",
    "11d ago",
    false,
    <RestartAltIcon />
  ),
  createData(
    "Zimbra Collaboration (ZCS) - Cross S...",
    "www.lapersonnelle.com",
    "INFO",
    "11d ago",
    true,
    <RestartAltIcon />
  ),
  createData(
    "Zimbra Collaboration (ZCS) - Cross S...",
    "www.lapersonnelle.com",
    "CRITICAL",
    "11d ago",
    true,
    <RestartAltIcon />
  ),
  createData(
    "Zimbra Collaboration (ZCS) - Cross S...",
    "www.lapersonnelle.com",
    "HIGH",
    "11d ago",
    false,
    <RestartAltIcon />
  ),
  createData(
    "Zimbra Collaboration (ZCS) - Cross S...",
    "www.lapersonnelle.com",
    "LOW",
    "11d ago",
    false,
    <RestartAltIcon />
  ),
  createData(
    "Zimbra Collaboration (ZCS) - Cross S...",
    "www.lapersonnelle.com",
    "UNKNOWN",
    "11d ago",
    false,
    <RestartAltIcon />
  ),
];
