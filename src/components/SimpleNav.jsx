import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const SimpleNav = ({ currentPage }) => {
  const navigate = useNavigate();
  //componente de prueba para la navegacion 

  return (
    <>

      {/*Botón fijo con ícono de inicio */}
      <Button
        onClick={() => navigate('/login')}
        sx={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 1000,
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

      {/*Navegación principal */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          mt: 2,
          mb: 2,
        }}
      >
        <Button
          variant={currentPage === 'login' ? 'contained' : 'outlined'}
          onClick={() => navigate('/login')}
          sx={{ minWidth: 120 }}
        >
          Iniciar Sesión
        </Button>
        <Button
          variant={currentPage === 'register' ? 'contained' : 'outlined'}
          onClick={() => navigate('/register')}
          sx={{ minWidth: 120 }}
        >
          Registrarse
        </Button>
        <Button
          variant={currentPage === 'upload' ? 'contained' : 'outlined'}
          onClick={() => navigate('/cargar-propiedad')}
          sx={{ minWidth: 120 }}
        >
          Cargar Propiedad
        </Button>
      </Box>
    </>
  );
};

export default SimpleNav;