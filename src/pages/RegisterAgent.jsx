import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
  CircularProgress,
  styled,
} from "@mui/material";
import { useFormik } from "formik";
import { registerAgenteSchema } from "../utils/validations";
import { agenteService } from "../api/agenteService";
import Header from "../components/Header";
import RegistroImage from "../assets/Registro.png"; 

// Estilo para la tarjeta principal
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 1200,
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
  width: "50%", // mitad del ancho
  minHeight: 500,
  position: "relative",
  overflow: "hidden",
}));

// Contenedor para el formulario
const FormContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  width: "50%", //mitad del ancho
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const RegisterAgent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const formik = useFormik({
    initialValues: {
      nombre: "",
      dni: "",
      cuild: "",
      telefono: "",
      email: "",
      matricula: "",
      clave: "",
      confirmarClave: "",
      observaciones: "",
    },
    validationSchema: registerAgenteSchema,
    onSubmit: async (values, formikHelpers) => {
      const { setSubmitting, resetForm } = formikHelpers;
      if (Object.keys(formik.errors).length > 0) {
        console.warn("Hay errores de validación, el formulario no se enviará");
        return;
      }
      setLoading(true);
      setError("");
      setSuccess("");
      const agenteData = {
        nombre: values.nombre,
        dni: values.dni,
        cuild: values.cuild,
        telefono: values.telefono,
        email: values.email,
        matricula: values.matricula,
        clave: values.clave,
        observaciones: values.observaciones,
      };
      try {
        const response = await agenteService.registerAgente(agenteData);
        setSuccess("Agente registrado exitosamente");
        resetForm();
      } catch (err) {
        setError(err.message || "Error al registrar el agente");
      } finally {
        setLoading(false);
        setSubmitting(false);
      }
    },
  });

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#A6893C" }}>
      <Header />
      <StyledCard>
        {/* Columna izquierda: Imagen */}
        <ImageContainer>
          <img
            src={RegistroImage}
            alt="Registro"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "white",
              textAlign: "center",
              mt: 2,
            }}
          >
            Bienvenido a GeoHogar
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "white",
              textAlign: "center",
              opacity: 0.9,
            }}
          >
            Únete a nuestra plataforma inmobiliaria
          </Typography>
        </ImageContainer>

        {/* Columna derecha: Formulario */}
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
              Registro de Agente Inmobiliario
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            {success && (
              <Alert severity="success" sx={{ mb: 2 }}>
                {success}
              </Alert>
            )}

            <form onSubmit={formik.handleSubmit}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {/* Primera fila: Nombre y DNI */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="nombre"
                      name="nombre"
                      label="Nombre y Apellido"
                      value={formik.values.nombre}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                      helperText={formik.touched.nombre && formik.errors.nombre}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
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
                  </Grid>
                </Grid>

                {/* Segunda fila: CUIL y Teléfono */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="cuild"
                      name="cuild"
                      label="CUIL"
                      value={formik.values.cuild}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.cuild && Boolean(formik.errors.cuild)}
                      helperText={formik.touched.cuild && formik.errors.cuild}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="telefono"
                      name="telefono"
                      label="Teléfono"
                      value={formik.values.telefono}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.telefono && Boolean(formik.errors.telefono)}
                      helperText={formik.touched.telefono && formik.errors.telefono}
                    />
                  </Grid>
                </Grid>

                {/* Tercera fila: Email y Matrícula */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="matricula"
                      name="matricula"
                      label="Matrícula"
                      value={formik.values.matricula}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.matricula && Boolean(formik.errors.matricula)}
                      helperText={formik.touched.matricula && formik.errors.matricula}
                    />
                  </Grid>
                </Grid>

                {/* Cuarta fila: Clave y Confirmar Clave */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
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
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="confirmarClave"
                      name="confirmarClave"
                      label="Confirmar Clave"
                      type="password"
                      value={formik.values.confirmarClave}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.confirmarClave && Boolean(formik.errors.confirmarClave)}
                      helperText={formik.touched.confirmarClave && formik.errors.confirmarClave}
                    />
                  </Grid>
                </Grid>

                {/* Quinta fila: Observaciones (fila completa) */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="observaciones"
                    name="observaciones"
                    label="Observaciones (opcional)"
                    multiline
                    rows={3}
                    value={formik.values.observaciones}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.observaciones && Boolean(formik.errors.observaciones)}
                    helperText={formik.touched.observaciones && formik.errors.observaciones}
                  />
                </Grid>

                {/* Botón Registrar */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{
                    mt: 2,
                    py: 1.5,
                    backgroundColor: "#A6893C",
                    "&:hover": {
                      backgroundColor: "#8e7430",
                    },
                  }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : "Registrar"}
                </Button>
              </Box>
            </form>
          </CardContent>
        </FormContainer>
      </StyledCard>
    </Box>
  );
};

export default RegisterAgent;
