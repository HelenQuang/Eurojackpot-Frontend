import { Container, Box, Typography, Avatar } from "@mui/material";
import logo from "../../images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        width: "100%",

        bottom: 0,
        py: 1,
        borderTop: "solid 0.5px #00000013",
      }}
      component="footer"
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
    </Box>
  );
};

export default Footer;
