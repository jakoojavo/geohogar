import { Router } from "express";
import { subirPropiedades, obtenerListaPropiedades, obtenerPropiedadesPorId, actualizarPropiedad, buscarPropiedadesPorFiltro } from "../handlers/propiedades";
import upload from "../middlewares/uploadMiddleware";

const routerPropiedades = Router();
//para que la carga de una propiedad acepte la imagen 
routerPropiedades.post('/propiedades', upload.array('imagenes'), subirPropiedades);

// routerPropiedades.post('/propiedades', subirPropiedades);
routerPropiedades.get('/propiedades', obtenerListaPropiedades);
routerPropiedades.get('/propiedades/filtrar', buscarPropiedadesPorFiltro);
routerPropiedades.get('/propiedades/:id', obtenerPropiedadesPorId);
routerPropiedades.put('/propiedades/:id', actualizarPropiedad);

routerPropiedades.patch('/propiedades/:id/estado', actualizarEstadoPropiedad);
routerPropiedades.patch('/propiedades/:id/ocultar', ocultarPropiedad);


export default routerPropiedades;
