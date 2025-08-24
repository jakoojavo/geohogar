import React, { useEffect, useState } from 'react';
import {
  Grid,
  Box,
  Paper,
  Typography,
  Button,
  Alert,
} from '@mui/material';
import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PropertyForm from '../components/PropertyForm';
import { getOptions } from '../api/optionsService';
import Logo from '../assets/logo.png';
import api from '../api/axiosConfig';
import { useFormik } from 'formik';

const CargaPropiedadPage = () => {
  const [options, setOptions] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  console.log('Archivos seleccionados:', selectedFiles);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const data = await getOptions();
        console.log('Opciones recibidas:', data);
        setOptions(data);
      } catch (err) {
        console.error('Error al cargar opciones:', err);
        setError(true);
      }
    };
    fetchOptions();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const handleSubmit = async (values, formikHelpers) => {
    const { resetForm, setSubmitting } = formikHelpers;
    const formData = new FormData();

    try {

      if (
        !values.ID_zona ||
        !values.ID_agente ||
        !values.ID_tipoinmueble ||
        !values.ID_estadopropiedad ||
        !values.ID_ambiente
      ) {
        throw new Error('Faltan campos obligatorios');
      }

      // Campos principales
      formData.append('direccion', values.direccion);
      formData.append('precio', values.precio);
      formData.append('descripcion', values.descripcion);
      formData.append('geolocalizacion', `${values.latitud},${values.longitud}`);
      formData.append('estado', values.estado);

      // Campos numéricos convertidos
      formData.append('ID_zona', parseInt(values.ID_zona));
      formData.append('ID_agente', parseInt(values.ID_agente));
      formData.append('ID_tipoinmueble', parseInt(values.ID_tipoinmueble));
      formData.append('ID_estadopropiedad', parseInt(values.ID_estadopropiedad));
      formData.append('ID_ambiente', parseInt(values.ID_ambiente));

      // Imágenes
      selectedFiles.forEach((file) => {
        formData.append('imagenes', file);
      });

      const response = await api.post('/propiedades', formData);
      console.log('Propiedad enviada con éxito:', response.data);

      setSuccess(true);
      resetForm();
      setSelectedFiles([]);
    } catch (error) {
      console.error('Error al enviar propiedad:', error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      direccion: '',
      precio: '',
      descripcion: '',
      latitud: '',
      longitud: '',
      estado: false,
      ID_tipoinmueble: '',
      ID_zona: '',
      ID_agente: '',
      ID_estadopropiedad: '',
      ID_ambiente: '',
    },
    onSubmit: handleSubmit,
  });

  if (error) {
    return (
      <Box sx={{ padding: 4 }}>
        <Typography color="error">Error: los datos de opciones no están disponibles.</Typography>
      </Box>
    );
  }

  if (!options) {
    return (
      <Box sx={{ padding: 4 }}>
        <Typography>Cargando opciones...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f0e6', position: 'relative' }}>
      <Button
        onClick={() => navigate('/login')}
        sx={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 9999,
          backgroundColor: '#d4a373',
          color: '#fff',
          minWidth: 0,
          padding: 1,
          borderRadius: '50%',
          boxShadow: 2,
          '&:hover': {
            backgroundColor: '#b98b5f',
          },
        }}
      >
        <Home />
      </Button>

      <Grid container sx={{ height: '100vh' }}>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            backgroundColor: 'rgba(166, 137, 60, 0.71)',
            padding: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
            position: 'relative',
          }}
        >
          <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ height: 80, objectFit: 'contain' }}
            />
          </Box>

          <Box sx={{ marginTop: 'auto', width: '100%', mb: 4 }}>
            <Paper
              elevation={3}
              sx={{
                width: '100%',
                maxWidth: 550,
                backgroundColor: '#fff',
                borderRadius: 2,
                padding: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '0 auto',
              }}
            >
              <Typography variant="h5" gutterBottom align="center">
                Carga de Propiedad
              </Typography>

              {success && (
                <Alert severity="success" sx={{ mb: 2 }}>
                  Propiedad creada con éxito
                </Alert>
              )}

              <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 2,
                  }}
                >
                  <PropertyForm formik={formik} options={options} />
                </Box>

                <Box mt={2}>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ marginBottom: '1rem' }}
                  />
                </Box>

                <Box mt={2}>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#d4a373',
                      color: '#fff',
                      padding: '10px 20px',
                      border: 'none',
                      borderRadius: '5px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      width: '100%',
                    }}
                  >
                    Cargar Propiedad
                  </button>
                </Box>
              </form>
            </Paper>
          </Box>
        </Grid>
                
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              height: '100%',
              //Imagen lado derecho a agregar
              backgroundImage: 'url("https://via.placeholder.com/800x600")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CargaPropiedadPage;