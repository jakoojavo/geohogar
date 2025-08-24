import React, { useState } from 'react';
import {
  Box, Card, Typography, Button, Alert, CircularProgress, styled
} from '@mui/material';
import { useFormik } from 'formik';
import { propertySchema } from '../utils/validations';
import { useFetchOptions } from '../hooks/useFetchOptions';
import PropertyForm from '../components/PropertyForm';
import { agenteService } from '../api/agenteService';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 1200,
  margin: '0 auto',
  marginTop: theme.spacing(4),
  padding: theme.spacing(4),
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
}));

const PropertyUpload = () => {
  const { options, loading: loadingOptions, error: errorOptions } = useFetchOptions();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      direccion: '',
      precio: '',
      descripcion: '',
      latitud: '',
      longitud: '',
      estado: true,
      ID_zona: '',
      ID_agente: '',
      ID_tipoinmueble: '',
      ID_estadopropiedad: '',
      ID_ambiente: '',
      imagenes: [],
    },
    validationSchema: propertySchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError('');
      setSuccess('');

      try {
        const formData = new FormData();
        formData.append('direccion', values.direccion);
        formData.append('precio', values.precio);
        formData.append('descripcion', values.descripcion);
        formData.append('geolocalizacion', `${values.latitud},${values.longitud}`);
        formData.append('estado', values.estado);
        formData.append('ID_zona', values.ID_zona);
        formData.append('ID_agente', values.ID_agente);
        formData.append('ID_tipoinmueble', values.ID_tipoinmueble);
        formData.append('ID_estadopropiedad', values.ID_estadopropiedad);
        formData.append('ID_ambiente', values.ID_ambiente);

        values.imagenes.forEach(file => {
          formData.append('imagenes', file);
        });

        await agenteService.uploadProperty(formData);
        setSuccess('Propiedad cargada exitosamente');
        formik.resetForm();
      } catch (err) {
        setError(err.message || 'Error al cargar la propiedad');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <StyledCard>
      <Typography variant="h5" gutterBottom>Cargar nueva propiedad</Typography>

      {errorOptions && <Alert severity="error">{errorOptions}</Alert>}
      {success && <Alert severity="success" sx={{ mt: 2 }}>{success}</Alert>}
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

      {loadingOptions ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <PropertyForm formik={formik} options={options} />
          <Box mt={4}>
            <Button type="submit" variant="contained" color="primary" disabled={loading}>
              {loading ? <CircularProgress size={24} /> : 'Cargar propiedad'}
            </Button>
          </Box>
        </form>
      )}
    </StyledCard>
  );
};

export default PropertyUpload;
