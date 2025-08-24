import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
  styled,
} from "@mui/material";
import { useFormik } from "formik";
import { loginAgenteSchema } from "../utils/validations";
import { agenteService } from "../api/agenteService";
import Header from "../components/Header";
import Logi from "../assets/Logi.png"; 

// Estilo para la tarjeta principal
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 1000,
  margin: "30px auto",
  borderRadius: 16,
  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  display: "flex",
  overflow: "hidden",
}));

// Contenedor para la imagen
const ImageContainer = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #f5f5dc 0%, #d4af37 100%)",
  borderRadius: 12,
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: 400,
  position: "relative",
  width: "50%",
  overflow: "hidden",
}));

// Contenedor para el formulario
const FormContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

// Tarjetas flotantes para los números
const FloatingCard = styled(Box)(({ theme }) => ({
  position: "absolute",
  backgroundColor: "white",
  border: "2px solid black",
  borderRadius: 8,
  padding: theme.spacing(1),
  width: 60,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "1.2rem",
}));

const LoginAgent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      dni: "",
      clave: "",
    },
    validationSchema: loginAgenteSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError("");

      try {

        const response = await agenteService.login(values);
        //Sin token
        // localStorage.setItem("token", response.token);
        // localStorage.setItem("user", JSON.stringify(response.user));
        //ruta despues del registro
       if (response.success) {
          window.location.href = "/cargar-propiedad";
        } else {
          setError(response.message || "Credenciales inválidas");
        }
      } catch (err) {
        setError("Error al conectar con el servidor");
      } finally {
        setLoading(false);
      }
    },
  });


  return (
    // Fondo de la pantalla #A6893C
    <Box sx={{ minHeight: "100vh", backgroundColor: "#A6893C" }}>
      <Header />

      <StyledCard>
        {/* Lado izquierdo: Imagen */}
        <ImageContainer>
          <img
            src={Logi}
            alt="Logi"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
          <FloatingCard sx={{ top: 20, right: 40 }}>3</FloatingCard>
          <FloatingCard sx={{ top: 80, right: 40 }}>2</FloatingCard>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              textAlign: "center",
              mt: 2,
            }}
          >
            Accede a tu panel de control
          </Typography>
        </ImageContainer>

        {/* Lado derecho: Formulario */}
        <FormContainer>
          <CardContent>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                textAlign: "center",
                mb: 4,
                fontWeight: 600,
              }}
            >
              Inicio de Sesión Agente Inmobiliario
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={formik.handleSubmit}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {/* Campo D.N.I. */}
                <TextField
                  fullWidth
                  id="dni"
                  name="dni"
                  label="D.N.I."
                  value={formik.values.dni}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.dni && Boolean(formik.errors.dni)}
                  helperText={formik.touched.dni && formik.errors.dni}
                />

                {/* Campo Clave */}
                <TextField
                  fullWidth
                  id="clave"
                  name="clave"
                  label="Clave"
                  type="password"
                  value={formik.values.clave}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.clave && Boolean(formik.errors.clave)}
                  helperText={formik.touched.clave && formik.errors.clave}
                />

                {/* Botón Iniciar Sesión */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{
                    mt: 2,
                    py: 1.5,
                    backgroundColor: "primary.dark",
                    "&:hover": {
                      backgroundColor: "primary.main",
                    },
                  }}
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Iniciar Sesión"
                  )}
                </Button>
              </Box>
            </form>
          </CardContent>
        </FormContainer>
      </StyledCard>
    </Box>
  );
};

export default LoginAgent;
