import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Divider,
  Button,
  IconButton,
  styled,
} from "@mui/material";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

// Estilo para el AppBar
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#A6893C", 
  boxShadow: "none",
  width: "100vw",
}));

// Contenedor del logo (ahora como botón)
const LogoButton = styled(IconButton)(({ theme }) => ({
  padding: 0, 
  "&:hover": {
    backgroundColor: "transparent", 
  },
}));

// Texto de bienvenida
const WelcomeText = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 600,
  fontSize: "1.2rem",
}));

// Estilo para el texto "GeoHogar"
const GeoHogarText = styled(Typography)(({ theme }) => ({
  color: "white",
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: "48px",
}));

// Estilo para los botones del header
const HeaderButton = styled(Button)(({ theme }) => ({
  color: "white",
  borderColor: "white",
  marginLeft: theme.spacing(2),
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "white",
  },
}));

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <StyledAppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between", py: 2 }}>
          {/* Logo como botón para volver al inicio */}
          <LogoButton onClick={() => navigate("/login")}>
            <img
              src={logo}
              alt="GeoHogar Logo"
              style={{
                height: 50,
                objectFit: "contain",
                cursor: "pointer", 
              }}
            />
          </LogoButton>

          {/* Texto de bienvenida y botones */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <WelcomeText>BIENVENIDO A</WelcomeText>
            <GeoHogarText>GeoHogar</GeoHogarText>

            {/* Botones de navegación */}
            <HeaderButton
              variant="outlined"
              onClick={() => navigate("/register")}
            >
              Registrarse
            </HeaderButton>
            <HeaderButton
              variant="outlined"
              onClick={() => navigate("/cargar-propiedad")}
            >
              Cargar Propiedad
            </HeaderButton>
          </Box>
        </Toolbar>

        {/* Línea divisoria */}
        <Divider
          sx={{
            backgroundColor: "white",
            height: "4px",
          }}
        />
      </StyledAppBar>
    </>
  );
};

export default Header;
