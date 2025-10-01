import { Router } from "express";
import { subirPropiedades, obtenerListaPropiedades, obtenerPropiedadesPorId, actualizarPropiedad } from "../handlers/propiedades";
import upload from "../middlewares/uploadMiddleware";

const routerPropiedades = Router();
//para que la carga de una propiedad acepte la imagen 
routerPropiedades.post('/propiedades', upload.array('imagenes'), subirPropiedades);

// routerPropiedades.post('/propiedades', subirPropiedades);
routerPropiedades.get('/propiedades', obtenerListaPropiedades);
routerPropiedades.get('/propiedades/:id', obtenerPropiedadesPorId);
routerPropiedades.put('/propiedades/:id', actualizarPropiedad);

export default routerPropiedades;
