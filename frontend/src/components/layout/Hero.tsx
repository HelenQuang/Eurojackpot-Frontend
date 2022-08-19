import React from "react";

import { Box, Typography, Container } from "@mui/material";

import hero from "../../images/hero.png";
import heroMobile from "../../images/heroMobile.png";

const Hero = () => {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);

  const days = Math.floor(
    (currentDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000)
  );

  const weekNumber = Math.ceil(days / 7);

  return (
    <Box sx={{ backgroundColor: "var(--purple)", color: "var(--white)" }}>
      <Container
        sx={{
          backgroundImage: {
            xs: `url(${heroMobile}) `,
            md: `url(${hero})`,
          },
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "0.6rem",
              md: "0.8rem",
            },
            mb: 2,
            mt: 2,
            paddingLeft: { xs: "0rem", md: "3rem" },
          }}
        >
          Week {weekNumber} | Game time until 20:00 on Friday
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "1.2rem",
              md: "2rem",
            },
            fontWeight: 700,
            mb: 1,
            paddingLeft: { xs: "0rem", md: "3rem" },
          }}
        >
          Eurojackpot Friday Draw
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "0.8rem",
              md: "1rem",
            },
            mb: 2,
            paddingLeft: { xs: "0rem", md: "3rem" },
          }}
        >
          Max. 90 000 000 €
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
