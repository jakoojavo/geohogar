import * as yup from 'yup';

// validación para registro de agente
import * as Yup from 'yup';

export const registerAgenteSchema = Yup.object().shape({
  nombre: Yup.string().required('Nombre es requerido'),
  dni: Yup.string().required('DNI es requerido'),
  cuild: Yup.string().required('CUIL es requerido'),
  telefono: Yup.string().required('Teléfono es requerido'),
  email: Yup.string().email('Email inválido').required('Email es requerido'),
  matricula: Yup.string().required('Matrícula es requerida'),
  clave: Yup.string().min(6, 'La clave debe tener al menos 6 caracteres').required('Clave es requerida'),
  confirmarClave: Yup.string()
    .oneOf([Yup.ref('clave'), null], 'Las claves deben coincidir')
    .required('Confirmar clave es requerido'),
  observaciones: Yup.string(),
});

//validación para login de agente
export const loginAgenteSchema = yup.object().shape({
  dni: yup
    .string()
    .required('El DNI es obligatorio')
    .matches(/^\d+$/, 'El DNI debe contener solo números'),
  
  clave: yup
    .string()
    .required('La contraseña es obligatoria'),
});

// validación para carga de propiedad
export const propertySchema = yup.object().shape({
  direccion: yup.string().required('La dirección es obligatoria'),
  precio: yup.number().required('El precio es obligatorio').positive('El precio debe ser positivo'),
  descripcion: yup.string().required('La descripción es obligatoria'),
  latitud: yup.string().required('La latitud es obligatoria'),
  longitud: yup.string().required('La longitud es obligatoria'),
  ID_tipoinmueble: yup.string().required('El tipo de inmueble es obligatorio'),
  ID_zona: yup.number().typeError('La zona es obligatoria').required(),
  ID_agente: yup.string().required('El agente es obligatorio'),
  ID_estadopropiedad: yup.string().required('El estado es obligatorio'),
  ID_ambiente: yup.string().required('Los ambientes son obligatorios'),
  imagenes: yup
    .mixed()
    .test('required', 'Debes cargar al menos una imagen', (value) => {
      if (!value) return false;
      if (value.length === 0) return false;
      return true;
    })
    .test('fileSize', 'Las imágenes deben ser menores a 5MB', (value) => {
      if (!value) return true;
      return value.every(file => file.size <= 5242880); // 5MB
    })
    .test('fileType', 'Solo se permiten imágenes (JPEG, PNG)', (value) => {
      if (!value) return true;
      return value.every(file => ['image/jpeg', 'image/png'].includes(file.type));
    }),
});


//validación para búsqueda por coordenadas
export const searchCoordinatesSchema = yup.object().shape({
  latitud: yup
    .number()
    .required('La latitud es obligatoria')
    .min(-90, 'La latitud debe estar entre -90 y 90')
    .max(90, 'La latitud debe estar entre -90 y 90'),
  
  longitud: yup
    .number()
    .required('La longitud es obligatoria')
    .min(-180, 'La longitud debe estar entre -180 y 180')
    .max(180, 'La longitud debe estar entre -180 y 180'),
});

