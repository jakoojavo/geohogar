import React from 'react';
import {
  Box, TextField, Select, MenuItem, InputLabel,
  FormControl, FormControlLabel, Checkbox, Typography
} from '@mui/material';

const PropertyForm = ({ formik, options }) => {
  if (!options || typeof options !== 'object') {
    return <Typography color="error">Error: los datos de opciones no están disponibles.</Typography>;
  }

  const selectFields = [
    { label: 'Tipo de Inmueble', name: 'ID_tipoinmueble', data: options.tipos, key: 'ID_tipoinmueble', displayField: 'inmueble' },
    { label: 'Zona', name: 'ID_zona', data: options.zonas, key: 'ID_zona', displayField: 'zona' },
    { label: 'Agente Inmobiliario', name: 'ID_agente', data: options.agentes, key: 'ID_agente', displayField: 'nombre' },
    { label: 'Estado de Propiedad', name: 'ID_estadopropiedad', data: options.estados, key: 'ID_estadopropiedad', displayField: 'estado_propiedad' },
    { label: 'Ambientes', name: 'ID_ambiente', data: options.ambientes, key: 'ID_ambiente', displayField: 'ambientes' },
  ];

  return (
    <>
      {/* Dirección */}
      <TextField
        fullWidth
        name="direccion"
        label="Dirección"
        value={formik.values.direccion}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.direccion && Boolean(formik.errors.direccion)}
        helperText={formik.touched.direccion && formik.errors.direccion}
      />

      {/* Precio */}
      <TextField
        fullWidth
        name="precio"
        label="Precio"
        type="number"
        value={formik.values.precio}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.precio && Boolean(formik.errors.precio)}
        helperText={formik.touched.precio && formik.errors.precio}
      />

      {/* Descripción */}
      <TextField
        fullWidth
        name="descripcion"
        label="Descripción"
        multiline
        rows={3}
        value={formik.values.descripcion}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.descripcion && Boolean(formik.errors.descripcion)}
        helperText={formik.touched.descripcion && formik.errors.descripcion}
      />

      {/* Geolocalización */}
      <TextField
        fullWidth
        name="latitud"
        label="Latitud"
        value={formik.values.latitud}
        onChange={formik.handleChange}
      />
      <TextField
        fullWidth
        name="longitud"
        label="Longitud"
        value={formik.values.longitud}
        onChange={formik.handleChange}
      />

      {/* Selects dinámicos */}
      {selectFields.map(({ label, name, data, key, displayField }) => {
        const isValidData = Array.isArray(data) && data.length > 0;

        return (
          <FormControl fullWidth key={name} sx={{ mt: 2 }}>
            <InputLabel id={`${name}-label`}>{label}</InputLabel>
            <Select
              labelId={`${name}-label`}
              name={name}
              value={formik.values[name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched[name] && Boolean(formik.errors[name])}
              sx={{ minHeight: 56 }}
            >
              <MenuItem value="">
                <em>Seleccione una opción</em>
              </MenuItem>
              {isValidData && data.map(item => (
                <MenuItem key={item[key]} value={String(item[key])}>
                  {item[displayField] || `ID ${item[key]}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      })}

      {/* Estado */}
      <FormControlLabel
        control={
          <Checkbox
            name="estado"
            checked={formik.values.estado}
            onChange={formik.handleChange}
          />
        }
        label="¿Propiedad activa?"
        sx={{ mt: 2 }}
      />

      {/* Vista previa de imágenes */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
        {formik.values.imagenes && formik.values.imagenes.length > 0 && formik.values.imagenes.map((file, index) => (
          <Box key={index} sx={{ width: 100, height: 100, border: '1px solid #ccc', borderRadius: 1, overflow: 'hidden' }}>
            <img
              src={URL.createObjectURL(file)}
              alt={`preview-${index}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default PropertyForm;