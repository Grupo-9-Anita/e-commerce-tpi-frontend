import React from "react";
import { Box, Container, Grid, Typography, Link, Button } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={{ bgcolor: "#00203D", color: "white", py: 4 }}>
      <Container>
        <Grid container spacing={4}>
          {/* Contactos */}
          <Grid item md={4}>
            <Typography variant="h5">Contactos</Typography>
            <Typography variant="body1"></Typography>
            <Typography variant="body1"></Typography>
          </Grid>

          {/* Enlaces */}
          <Grid item md={4}>
            <Typography variant="h5">Enlaces</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Link
                  href=""
                  sx={{
                    color: "#007bff",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Categorías
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link
                  href=""
                  sx={{
                    color: "#007bff",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Notebooks
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link
                  href=""
                  sx={{
                    color: "#007bff",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Smartphones
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link
                  href=""
                  sx={{
                    color: "#007bff",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Promociones
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link
                  href=""
                  sx={{
                    color: "#007bff",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Cuenta
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link
                  href=""
                  sx={{
                    color: "#007bff",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Ayuda
                </Link>
              </Grid>
            </Grid>
          </Grid>

          {/* Síguenos */}
          <Grid item md={4}>
            <Typography variant="h5">Síguenos</Typography>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white", mr: 2 }}
            >
              <Instagram />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white", mr: 2 }}
            >
              <Facebook />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white", mr: 2 }}
            >
              <Twitter />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white" }}
            >
              <YouTube />
            </Link>
            <Box mt={2}>
              <Typography variant="h5">Métodos de pago</Typography>
              <img
                src="path/to/visa.png"
                alt="Visa"
                width="50"
                style={{ marginRight: "10px" }}
              />
              <img
                src="path/to/mastercard.png"
                alt="Mastercard"
                width="50"
                style={{ marginRight: "10px" }}
              />
              <img
                src="path/to/paypal.png"
                alt="PayPal"
                width="50"
                style={{ marginRight: "10px" }}
              />
              <img src="path/to/bitcoin.png" alt="Bitcoin" width="50" />
            </Box>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={3}>
          <Typography variant="body2">
            &copy; 2024 MegaStore. Todos los derechos reservados.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={scrollToTop}
            sx={{ mt: 2 }}
          >
            Volver al principio
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;