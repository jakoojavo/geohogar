import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  styled
} from '@mui/material';
import { Logout, Add, Search, Home } from '@mui/icons-material';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  width: '100%', 
}));

const Navigation = ({ onLogout, currentPage }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    onLogout();
  };

  return (
    <StyledAppBar position="static">
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          px: 4,
        }}
      >
        {/*Sección izquierda */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6" component="div">
            Panel de Agente
          </Typography>

          <Button
            color="inherit"
            startIcon={<Home />}
            onClick={() => window.location.href = '/login'}
            sx={{
              backgroundColor: currentPage === 'home' ? 'rgba(255,255,255,0.1)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              }
            }}
          >
            Inicio
          </Button>

          <Button
            color="inherit"
            startIcon={<Add />}
            onClick={() => window.location.href = '/cargar-propiedad'}
            sx={{
              backgroundColor: currentPage === 'cargar-propiedad' ? 'rgba(255,255,255,0.1)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              }
            }}
          >
            Cargar Propiedad
          </Button>

          <Button
            color="inherit"
            startIcon={<Search />}
            onClick={() => window.location.href = '/search-properties'}
            sx={{
              backgroundColor: currentPage === 'search' ? 'rgba(255,255,255,0.1)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              }
            }}
          >
            Buscar Propiedades
          </Button>
        </Box>

        {/*Botón de logout */}
        <Button
          color="inherit"
          startIcon={<Logout />}
          onClick={handleLogout}
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
            }
          }}
        >
          Cerrar Sesión
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navigation;