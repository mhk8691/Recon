import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const Codevalue: Array<string> = [
  `
GET /_vti_inf.html HTTP/1.1
Host: www.sfl.ca
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17 Safari/605.1.15
Connection: close
Accept: */*
Accept-Language: en
Accept-Encoding: gzip
  `,

  `
HTTP/1.1 200 OK
Connection: close
Content-Type: text/html; charset=UTF-8
Date: Sun, 14 Jul 2024 00:05:24 GMT
Domorigin: www.sfl.ca
Set-Cookie: route=1720915525.459.416.330287|bb74affefd25fb0d03ef9dac02cd3ccb; Expires=Tue, 16-Jul-24 02:52:04 GMT; Max-Age=172800; Path=/; Secure; HttpOnly
Set-Cookie: JSESSIONID=C9F7D343CBFCA85C4B4054666583B554; Path=/; Secure; HttpOnly
Set-Cookie: ak_bmsc=FDA293E370D54BCA223BAF6983D54050~000000000000000000000000000000~YAAQuqzbFypDYZ2QAQAA2/uOrhhaCPdSD4Uplh2whhsXQ7cGdOWzszIkN+dltak5OuBzA9pL28qoZra3LDlYfU/5C74n3n9+wI99gzPSCq7VMlVCQVX4q7pzZe9hSzvHHVB/4d0xDP8mgXrV7H77z0yNrw7n4P5UbstRIaaT0CMOnMMzGOYYCtte3Jok2hgU6XyGSUk9V+9RkxdPCzofqYNlS6ETL0GBhsyDJkSVbh7cIXtJrNKK1bCULYa3iGQWmUbjhMXrwZSIS17lAB6lOVBfp7IpSMlLtpboPKHTADZNniTK/BQiD7CEph7gSySV6K390SYLkGY6JxrmuyJnnyzEyK1/8eO5ERjPzjw7bxBEaA5aiNGh0o6U; Domain=.www.sfl.ca; Path=/; Expires=Sun, 14 Jul 2024 02:05:24 GMT; Max-Age=7200
Strict-Transport-Security: max-age=16070400; includeSubDomains
Vary: Accept-Encoding
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-Xss-Protection: 1

<!-- FrontPage Configuration Information
 FPVersion="6.0.2.9999"
FPShtmlScriptUrl="_vti_bin/shtml.dll/_vti_rpc"
FPAuthorScriptUrl="_vti_bin/_vti_aut/author.dll"
FPAdminScriptUrl="_vti_bin/_vti_adm/admin.dll"
TPScriptUrl="_vti_bin/owssvr.dll"
-->
  `,

  `{
  "curl-command": "curl -X 'GET' -H 'Accept: */*' -H 'Accept-Language: en' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17 Safari/605.1.15' 'https://www.sfl.ca/_vti_inf.html'",
  "host": "www.sfl.ca",
  "info": {
    "author": [
      "r3naissance"
    ],
    "classification": {
      "cpe": "cpe:2.3:a:microsoft:internet_information_server:3.0:*:*:*:*:*:*:*",
      "cve-id": [
        "cve-2000-0114"
      ],
      "cvss-metrics": "CVSS:2.0/AV:N/AC:L/Au:N/C:P/I:N/A:N",
      "cvss-score": 5,
      "cwe-id": [
        "nvd-cwe-other"
      ],
      "epss-percentile": 0.95958,
      "epss-score": 0.15958
    },
    "description": "Frontpage Server Extensions allows remote attackers to determine the name of the anonymous account via an RPC POST request to shtml.dll in the /_vti_bin/ virtual directory.",
    "impact": "High: Remote code execution or denial of service.\n",
    "metadata": {
      "max-request": 1,
      "product": "internet_information_server",
      "shodan-query": "cpe:\"cpe:2.3:a:microsoft:internet_information_server\"",
      "vendor": "microsoft"
    },
    "name": "Microsoft FrontPage Extensions Check (shtml.dll)",
    "reference": [
      "https://nvd.nist.gov/vuln/detail/cve-2000-0114",
      "https://www.exploit-db.com/exploits/19897",
      "https://exchange.xforce.ibmcloud.com/vulnerabilities/cve-2000-0114",
      "https://github.com/0xpugazh/one-liners",
      "https://github.com/arpsyndicate/kenzer-templates"
    ],
    "remediation": "Upgrade to the latest version.",
    "severity": "medium",
    "tags": [
      "cve",
      "cve2000",
      "frontpage",
      "microsoft",
      "edb"
    ]
  },
  "ip": "23.219.172.207",
  "matched-at": "https://www.sfl.ca/_vti_inf.html",
  "matcher-status": true,
  "request": "GET /_vti_inf.html HTTP/1.1\r\nHost: www.sfl.ca\r\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17 Safari/605.1.15\r\nConnection: close\r\nAccept: */*\r\nAccept-Language: en\r\nAccept-Encoding: gzip\r\n\r\n",
  "response": "HTTP/1.1 200 OK\r\nConnection: close\r\nContent-Type: text/html; charset=UTF-8\r\nDate: Sun, 14 Jul 2024 00:05:24 GMT\r\nDomorigin: www.sfl.ca\r\nSet-Cookie: route=1720915525.459.416.330287|bb74affefd25fb0d03ef9dac02cd3ccb; Expires=Tue, 16-Jul-24 02:52:04 GMT; Max-Age=172800; Path=/; Secure; HttpOnly\r\nSet-Cookie: JSESSIONID=C9F7D343CBFCA85C4B4054666583B554; Path=/; Secure; HttpOnly\r\nSet-Cookie: ak_bmsc=FDA293E370D54BCA223BAF6983D54050~000000000000000000000000000000~YAAQuqzbFypDYZ2QAQAA2/uOrhhaCPdSD4Uplh2whhsXQ7cGdOWzszIkN+dltak5OuBzA9pL28qoZra3LDlYfU/5C74n3n9+wI99gzPSCq7VMlVCQVX4q7pzZe9hSzvHHVB/4d0xDP8mgXrV7H77z0yNrw7n4P5UbstRIaaT0CMOnMMzGOYYCtte3Jok2hgU6XyGSUk9V+9RkxdPCzofqYNlS6ETL0GBhsyDJkSVbh7cIXtJrNKK1bCULYa3iGQWmUbjhMXrwZSIS17lAB6lOVBfp7IpSMlLtpboPKHTADZNniTK/BQiD7CEph7gSySV6K390SYLkGY6JxrmuyJnnyzEyK1/8eO5ERjPzjw7bxBEaA5aiNGh0o6U; Domain=.www.sfl.ca; Path=/; Expires=Sun, 14 Jul 2024 02:05:24 GMT; Max-Age=7200\r\nStrict-Transport-Security: max-age=16070400; includeSubDomains\r\nVary: Accept-Encoding\r\nX-Content-Type-Options: nosniff\r\nX-Frame-Options: SAMEORIGIN\r\nX-Xss-Protection: 1\r\n\r\n<!-- FrontPage Configuration Information\n FPVersion=\"6.0.2.9999\"\nFPShtmlScriptUrl=\"_vti_bin/shtml.dll/_vti_rpc\"\nFPAuthorScriptUrl=\"_vti_bin/_vti_aut/author.dll\"\nFPAdminScriptUrl=\"_vti_bin/_vti_adm/admin.dll\"\nTPScriptUrl=\"_vti_bin/owssvr.dll\"\n-->",
  "template-id": "CVE-2000-0114",
  "template-path": "/ops/nuclei-templates/http/cves/2000/CVE-2000-0114.yaml",
  "timestamp": "2024-07-14T00:05:24.584832748Z",
  "type": "http"
}`,

  `
curl \
     -X 'GET' \
     -H 'Accept: */*' \
     -H 'Accept-Language: en' \
     -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17 Safari/605.1.15' 'https://www.sfl.ca/_vti_inf.html'
`,
  `
id: CVE-2000-0114

info:
  name: Microsoft FrontPage Extensions Check (shtml.dll)
  author: r3naissance
  severity: medium
  description: Frontpage Server Extensions allows remote attackers to determine the name of the anonymous account via an RPC POST request to shtml.dll in the /_vti_bin/ virtual directory.
  impact: |
    High: Remote code execution or denial of service.
  remediation: Upgrade to the latest version.
  reference:
    - https://nvd.nist.gov/vuln/detail/CVE-2000-0114
    - https://www.exploit-db.com/exploits/19897
    - https://exchange.xforce.ibmcloud.com/vulnerabilities/CVE-2000-0114
    - https://github.com/0xPugazh/One-Liners
    - https://github.com/ARPSyndicate/kenzer-templates
  classification:
    cvss-metrics: CVSS:2.0/AV:N/AC:L/Au:N/C:P/I:N/A:N
    cvss-score: 5
    cve-id: CVE-2000-0114
    cwe-id: NVD-CWE-Other
    epss-score: 0.15958
    epss-percentile: 0.95958
    cpe: cpe:2.3:a:microsoft:internet_information_server:3.0:*:*:*:*:*:*:*
  metadata:
    max-request: 1
    vendor: microsoft
    product: internet_information_server
    shodan-query: cpe:"cpe:2.3:a:microsoft:internet_information_server"
  tags: cve,cve2000,frontpage,microsoft,edb

http:
  - method: GET
    path:
      - '{{BaseURL}}/_vti_inf.html'

    matchers-condition: and
    matchers:
      - type: word
        part: body
        words:
          - "_vti_bin/shtml.dll"

      - type: status
        status:
          - 200
# digest: 490a0046304402205feaaedc7212d5546b4a1e2b1f6d701d77390a9a19a31d6f45a9150b0da0080a02203ffb16ad768f80c2d873647321189e4c6fa3eff77f84fbc18a3d04d5b7c714f4:922c64590222798bb761d5b6d8e72950
`,
];

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#18181B",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
          TabIndicatorProps={{ style: { background: "transparent" } }}
          sx={{ bgcolor: "#18181B", padding: "0" }}
          variant="fullWidth"
        >
          <Tab
            sx={{ fontSize: ".75rem", bgcolor: "red" }}
            label="Request"
            {...a11yProps(0)}
          />
          <Tab sx={{ fontSize: ".75rem" }} label="Response" {...a11yProps(1)} />
          <Tab sx={{ fontSize: ".75rem" }} label="JSON" {...a11yProps(2)} />
          <Tab sx={{ fontSize: ".75rem" }} label="Curl" {...a11yProps(3)} />
          <Tab sx={{ fontSize: ".75rem" }} label="Template" {...a11yProps(4)} />
        </Tabs>
        <ContentCopyOutlinedIcon
          fontSize="small"
          sx={{
            fontSize: "1rem",
            color: "#8D8D95",
            mr: 0.5,
            cursor: "pointer",
          }}
          onClick={() => {
            navigator.clipboard.writeText(Codevalue[value]);
          }}
        />
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box
          sx={{
            height: "143px",
            width: "100%",
            overflow: "auto",
          }}
        >
          <SyntaxHighlighter
            language="bash"
            style={solarizedlight}
            customStyle={{ backgroundColor: "black", fontSize: ".8rem" }}
          >
            {Codevalue[value]}
          </SyntaxHighlighter>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box
          sx={{
            height: "143px",
            width: "100%",
            overflow: "auto",
          }}
        >
          <SyntaxHighlighter
            language="bash"
            style={solarizedlight}
            customStyle={{ backgroundColor: "black", fontSize: ".8rem" }}
          >
            {Codevalue[value]}
          </SyntaxHighlighter>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box
          sx={{
            height: "143px",
            width: "100%",
            overflow: "auto",
          }}
        >
          <SyntaxHighlighter
            language="json"
            style={solarizedlight}
            customStyle={{ backgroundColor: "black", fontSize: ".8rem" }}
          >
            {Codevalue[value]}
          </SyntaxHighlighter>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Box
          sx={{
            height: "143px",
            width: "100%",
            overflow: "auto",
          }}
        >
          <SyntaxHighlighter
            language="bash"
            style={solarizedlight}
            customStyle={{ backgroundColor: "black", fontSize: ".8rem" }}
          >
            {Codevalue[value]}
          </SyntaxHighlighter>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Box
          sx={{
            height: "143px",
            width: "100%",
            overflow: "auto",
          }}
        >
          <SyntaxHighlighter
            language="javascript"
            style={solarizedlight}
            customStyle={{ backgroundColor: "black", fontSize: ".8rem" }}
          >
            {Codevalue[value]}
          </SyntaxHighlighter>
        </Box>
      </CustomTabPanel>
    </Box>
  );
}


