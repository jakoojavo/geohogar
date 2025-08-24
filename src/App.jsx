import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import RegisterAgent from './pages/RegisterAgent';
import LoginAgent from './pages/LoginAgent';
import PropertyUpload from './pages/PropertyUpload';
import CargaPropiedadPage from './pages/CargaPropiedadPage';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/register" element={<RegisterAgent />} />
          <Route path="/login" element={<LoginAgent />} />
          <Route path="/upload-property" element={<PropertyUpload />} />
          <Route path="/cargar-propiedad" element={<CargaPropiedadPage />} />

          
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App
