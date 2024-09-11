import { Box, Typography} from "@mui/material";
type Title = {
  title: string;
  description: string;
  children?: React.ReactNode;
};
export default function Header({ title, description, children }: Title) {
  return (
    <Box
      mt={10}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box>
        <Typography variant="body1" color="initial">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="#9999A1"
          sx={{ fontSize: ".8rem", mt: 1 }}
        >
          {description}
        </Typography>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}
