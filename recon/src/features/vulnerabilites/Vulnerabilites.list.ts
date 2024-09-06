import { Vulnerability } from "./Vulnerabilites.types";

export const vulnerabilitiesList: Array<Vulnerability> = [
  {
    id:1,
    level: "low",
    name: "CVE-2024-29882",
    title: "Cross-site scripting",
    description: "Cross-site scripting vulnerability",
    status: "UNRELEASED",
    date: "2022-01-01",
    author: "@user",
    code: "<script>alert('XSS')</script>",
  },
  {
    id:2,
    level: "medium",
    name: "SQLI",
    title: "SQL injection",
    description: "SQL injection vulnerability",
    status: "UNRELEASED",
    date: "2022-01-02",
    author: "@user",
    code: "SELECT * FROM users WHERE username = 'admin'",
  },
  {
    id:3,
    level: "high",
    name: "SQLI",
    title: "SQL injection",
    description: "SQL injection vulnerability",
    status: "UNRELEASED",
    date: "2022-01-02",
    author: "@user",
    code: "SELECT * FROM users WHERE username = 'admin'",
  },
  {
    id:4,
    level: "critical",
    name: "SQLI",
    title: "SQL injection",
    description: "SQL injection vulnerability",
    status: "UNRELEASED",
    date: "2022-01-02",
    author: "@user",
    code: "SELECT * FROM users WHERE username = 'admin'",
  },
];
