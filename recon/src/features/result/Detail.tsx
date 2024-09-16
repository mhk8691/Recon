import { Box, Button, IconButton, Typography } from "@mui/material";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import Menu from "./Menu";
import Tabs from "./Tabs";
import { rows } from "./Data";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IosShareIcon from "@mui/icons-material/IosShare";

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

function Empty() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      height={"400px"}
    >
      <AdsClickOutlinedIcon fontSize="small" sx={{ color: "#7D7D7E" }} />
      <Typography variant="body2" color="#7D7D7E" sx={{ mt: 1 }}>
        Select vulnerability to see its details.
      </Typography>
    </Box>
  );
}
function DetailTable({
  id,
  setId,
}: {
  id: string | undefined;
  setId: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const data = rows.find((row) => row.id === id);
  if (data?.id === "1") {
    return (
      <Box py={2}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={2}
          px={4}
        >
          <Box>
            <Typography variant="body2" color="white" sx={{ mt: 1 }}>
              {data?.title}
            </Typography>
            <Typography
              variant="body2"
              color="#9696A0"
              sx={{ mt: 1, fontSize: ".8rem" }}
            >
              {data?.description}
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <OpenInFullOutlinedIcon
              sx={{ color: "white", mr: 0.5, fontSize: "1rem" }}
            />
            <CloseOutlinedIcon
              sx={{
                color: "white",
                borderLeft: "1px solid #27272A",
                pl: 1,
                fontSize: "1.7rem",
                cursor: "pointer",
              }}
              onClick={() => setId(undefined)}
            />
          </Box>
        </Box>
        <Box display={"flex"} gap={1} mt={3} px={4}>
          <Button
            variant="contained"
            startIcon={<RestartAltOutlinedIcon />}
            sx={{ bgcolor: "#18181B", fontSize: ".8rem" }}
          >
            Retest
          </Button>
          <Menu />
          <Button
            id="demo-customized-button"
            variant="contained"
            disableElevation
            sx={{ bgcolor: "#18181B" }}
            endIcon={<KeyboardArrowDownIcon />}
            startIcon={<FlagOutlinedIcon />}
          >
            Ticket
          </Button>
          <IconButton
            color="inherit"
            sx={{
              bgcolor: "#18181B",
              borderRadius: "5px",
              px: ".7rem",
            }}
          >
            <DeleteOutlineOutlinedIcon
              fontSize="small"
              sx={{ color: "#4D4D52" }}
            />
          </IconButton>
        </Box>
        <Box mt={3} px={4}>
          <Typography
            variant="body2"
            color="#93939C"
            sx={{ mt: 1, lineHeight: "1.5rem" }}
          >
            The SSH transport protocol with certain OpenSSH extensions, found in
            OpenSSH before 9.6 and other products, allows remote attackers to
            bypass integrity checks such that some packets are omitted (from the
            extension negotiation message), and a client and server may
            consequently end up with a connection for which some security
            features have been downgraded or disabled, aka a Terrapin attack.
            This occurs because the SSH Binary Packet Protocol (BPP),
            implemented by these extensions, mishandles the handshake phase and
            mishandles use of sequence numbers. For example, there is an
            effective attack against SSH's use of ChaCha20-Poly1305 (and CBC
            with Encrypt-then-MAC). The bypass occurs in
            chacha20-poly1305@openssh.com and (if CBC is used) the
            -etm@openssh.com MAC algorithms. This also affects Maverick Synergy
            Java SSH API before 3.1.0-SNAPSHOT, Dropbear through 2022.83, Ssh
            before 5.1.1 in Erlang/OTP, PuTTY before 0.80, AsyncSSH before
            2.14.2, golang.org/x/crypto before 0.17.0, libssh before 0.10.6,
            libssh2 through 1.11.0, Thorn Tech SFTP Gateway before 3.4.6, Tera
            Term before 5.1, Paramiko before 3.4.0, jsch before 0.2.15, SFTPGo
            before 2.5.6, Netgate pfSense Plus through 23.09.1, Netgate pfSense
            CE through 2.7.2, HPN-SSH through 18.2.0, ProFTPD before 1.3.8b (and
            before 1.3.9rc2), ORYX CycloneSSH before 2.3.4, NetSarang XShell 7
            before Build 0144, CrushFTP before 10.6.0, ConnectBot SSH library
            before 2.2.22, Apache MINA sshd through 2.11.0, sshj through 0.37.0,
            TinySSH through 20230101, trilead-ssh2 6401, LANCOM LCOS and
            LANconfig, FileZilla before 3.66.4, Nova before 11.8, PKIX-SSH
            before 14.4, SecureCRT before 9.4.3, Transmit5 before 5.10.4,
            Win32-OpenSSH before 9.5.0.0p1-Beta, WinSCP before 6.2.2, Bitvise
            SSH Server before 9.32, Bitvise SSH Client before 9.33, KiTTY
            through 0.76.1.13, the net-ssh gem 7.2.0 for Ruby, the mscdex ssh2
            module before 1.15.0 for Node.js, the thrussh library before 0.35.1
            for Rust, and the Russh crate before 0.40.2 for Rust. Remediation
            One can address this vulnerability by temporarily disabling the
            affected chacha20-poly1305@openssh.com encryption and
            -etm@openssh.com MAC algorithms in the configuration of the SSH
            server (or client), and instead utilize unaffected algorithms like
            AES-GCM.
          </Typography>
        </Box>
        <hr style={{ border: "1px solid #27272A", marginTop: ".7rem" }} />
        <Box px={3} mt={2}>
          <Typography variant="body2" color="#909099" sx={{ mt: 1 }}>
            Found at
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "40px",
              border: "1px solid #27272A",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              bgcolor: "#18181B",
              mt: 1,
            }}
          >
            <input
              type="text"
              readOnly
              value={"142.195.73.157:22"}
              style={{
                width: "100%",
                paddingLeft: ".5rem",
                height: "100%",
                border: "none",
                backgroundColor: "#18181B",
                color: "#8D8D95",
              }}
            />
            <ContentCopyOutlinedIcon
              fontSize="small"
              sx={{
                mr: 1,
                color: "#8D8D95",
                cursor: "pointer",
                fontSize: "1rem",
              }}
              onClick={() => {
                navigator.clipboard.writeText("142.195.73.157:22");
              }}
            />
          </Box>
        </Box>
        <Box px={3} mt={2}>
          <Typography variant="body2" color="#909099" sx={{ mt: 1 }}>
            Extracted
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "40px",
              border: "1px solid #27272A",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              bgcolor: "#18181B",
              mt: 1,
            }}
          >
            <input
              type="text"
              readOnly
              value={"Vulnerable to Terrapin"}
              style={{
                width: "100%",
                paddingLeft: ".5rem",
                height: "100%",
                border: "none",
                backgroundColor: "#18181B",
                color: "#8D8D95",
              }}
            />
            <ContentCopyOutlinedIcon
              fontSize="small"
              sx={{
                mr: 1,
                color: "#8D8D95",
                cursor: "pointer",
                fontSize: "1rem",
              }}
              onClick={() => {
                navigator.clipboard.writeText("Vulnerable to Terrapin");
              }}
            />
          </Box>
        </Box>
        <Box mt={2} px={3}>
          <Tabs
            tabTitle={["Request", "Response", "JSON", "Curl", "Template"]}
            code={Codevalue}
            height="143px"
          />
        </Box>
        <Box mt={2} px={3}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" color="#909099" sx={{ mt: 1 }}>
              First seen
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ mt: 1, fontSize: ".8rem" }}
            >
              2mo ago
            </Typography>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" color="#909099" sx={{ mt: 1 }}>
              Last seen
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ mt: 1, fontSize: ".8rem" }}
            >
              2mo ago
            </Typography>
          </Box>
        </Box>
        <hr style={{ border: "1px solid #27272A", marginTop: ".7rem" }} />
        <Box mt={2} px={3}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" color="#909099" sx={{ mt: 1 }}>
              Host
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ mt: 1, fontSize: ".8rem" }}
            >
              142.195.73.157:22
            </Typography>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" color="#909099" sx={{ mt: 1 }}>
              IP address
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ mt: 1, fontSize: ".8rem" }}
            >
              142.195.73.157
            </Typography>
          </Box>
        </Box>
        <hr style={{ border: "1px solid #27272A", marginTop: ".7rem" }} />

        <Box mt={2} px={3}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" color="#909099" sx={{ mt: 1 }}>
              Template ID
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{
                mt: 1,
                fontSize: ".8rem",
                color: "#5652D3",
                display: "flex",
                alignItems: "center",
              }}
            >
              CVE-2023-48795
              <IosShareIcon
                fontSize="small"
                sx={{ fontSize: "1rem", ml: ".2rem" }}
              />
              <ContentCopyIcon
                fontSize="small"
                sx={{ fontSize: "1rem", ml: ".2rem", cursor: "pointer" }}
                onClick={() => {
                  navigator.clipboard.writeText("CVE-2023-48795");
                }}
              />
            </Typography>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" color="#909099" sx={{ mt: 1 }}>
              Vuln ID
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{
                mt: 1,
                fontSize: ".8rem",
                color: "#5652D3",
                display: "flex",
                alignItems: "center",
              }}
            >
              cq9hbulvjq5s1t5b7lh0
              <IosShareIcon
                fontSize="small"
                sx={{ fontSize: "1rem", ml: ".2rem" }}
              />
              <ContentCopyIcon
                fontSize="small"
                sx={{ fontSize: "1rem", ml: ".2rem", cursor: "pointer" }}
                onClick={() => {
                  navigator.clipboard.writeText("cq9hbulvjq5s1t5b7lh0");
                }}
              />
            </Typography>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" color="#909099" sx={{ mt: 1 }}>
              Scan ID
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{
                mt: 1,
                fontSize: ".8rem",
                color: "#5652D3",
                display: "flex",
                alignItems: "center",
              }}
            >
              cq9haocls3us73ft9opg
              <IosShareIcon
                fontSize="small"
                sx={{ fontSize: "1rem", ml: ".2rem" }}
              />
              <ContentCopyIcon
                fontSize="small"
                sx={{ fontSize: "1rem", ml: ".2rem", cursor: "pointer" }}
                onClick={() => {
                  navigator.clipboard.writeText("cq9haocls3us73ft9opg");
                }}
              />
            </Typography>
          </Box>
        </Box>
        <hr style={{ border: "1px solid #27272A", marginTop: ".7rem" }} />
        <Box mt={2} px={3}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" color="#909099" sx={{ mt: 1 }}>
              CVSS
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ mt: 1, fontSize: ".8rem" }}
            >
              5.9
            </Typography>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" color="#909099" sx={{ mt: 1 }}>
              CWE
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ mt: 1, fontSize: ".8rem" }}
            >
              CWE-354
            </Typography>
          </Box>
        </Box>
        <hr style={{ border: "1px solid #27272A", marginTop: ".7rem" }} />

        <Box mt={2} px={3}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" color="#909099" sx={{ mt: 1 }}>
              Vendor
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ mt: 1, fontSize: ".8rem" }}
            >
              openbsd
            </Typography>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" color="#909099" sx={{ mt: 1 }}>
              Product
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ mt: 1, fontSize: ".8rem" }}
            >
              openssh
            </Typography>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" color="#909099" sx={{ mt: 1 }}>
              Protocol
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ mt: 1, fontSize: ".8rem" }}
            >
              JAVASCRIPT
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={2}
        px={4}
      >
        <Box>
          <Typography variant="body2" color="white" sx={{ mt: 1 }}>
            {data?.title}
          </Typography>
          <Typography
            variant="body2"
            color="#9696A0"
            sx={{ mt: 1, fontSize: ".8rem" }}
          >
            {data?.description}
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <OpenInFullOutlinedIcon
            sx={{ color: "white", mr: 0.5, fontSize: "1rem" }}
          />
          <CloseOutlinedIcon
            sx={{
              color: "white",
              borderLeft: "1px solid #27272A",
              pl: 1,
              fontSize: "1.7rem",
              cursor: "pointer",
            }}
            onClick={() => setId(undefined)}
          />
        </Box>
      </Box>
    );
  }
}

export default function Detail({
  id,
  setId,
}: {
  id: string | undefined;
  setId: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  return (
    <Box sx={{ maxHeight: "500px", overflowY: "auto" }}>
      {id === undefined && <Empty />}
      {id !== undefined && <DetailTable id={id} setId={setId} />}
    </Box>
  );
}
