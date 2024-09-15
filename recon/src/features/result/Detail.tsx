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
          <Tabs />
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
