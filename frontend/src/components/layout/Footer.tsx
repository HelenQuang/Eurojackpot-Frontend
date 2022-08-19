import { Paper, Container, Box, Typography, Avatar } from "@mui/material";
import logo from "../../images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Paper
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1.5,
          }}
        >
          <Avatar src={logo} alt="logo" />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="#717171">
            Copyright Eurojackpot Simulator © {currentYear}.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
