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

export default function BasicTabs({
  code,
  tabTitle,
  style,
  height,
}: {
  code: string[];
  tabTitle: string[];
  style?: React.CSSProperties;
  height: string;
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} style={style}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#18181B",
          borderStartEndRadius: "10px",
          borderStartStartRadius: "10px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
          TabIndicatorProps={{ style: { background: "transparent" } }}
          sx={{
            bgcolor: "#18181B",
            padding: "0",
            borderStartEndRadius: "10px",
            borderStartStartRadius: "10px",
          }}
          variant="fullWidth"
        >
          {/* <Tab
            sx={{ fontSize: ".75rem", bgcolor: "red" }}
            label=""
            {...a11yProps(0)}
          /> */}
          {tabTitle.map((title, index) => (
            <Tab
              sx={{ fontSize: ".75rem" }}
              label={title}
              {...a11yProps(index)}
            />
          ))}
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
            navigator.clipboard.writeText(code[value]);
          }}
        />
      </Box>
      {tabTitle.map((_item, index) => (
        <CustomTabPanel value={value} index={index}>
          <Box
            sx={{
              height: height,
              width: "100%",
              overflow: "auto",
            }}
          >
            <SyntaxHighlighter
              language="bash"
              style={solarizedlight}
              customStyle={{
                backgroundColor: "black",
                fontSize: ".8rem",
              }}
            >
              {code[value]}
            </SyntaxHighlighter>
          </Box>
        </CustomTabPanel>
      ))}
    </Box>
  );
}

{
  /* <CustomTabPanel value={value} index={1}>
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
            {code[value]}
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
            {code[value]}
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
            {code[value]}
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
            {code[value]}
          </SyntaxHighlighter>
        </Box>
      </CustomTabPanel> */
}
