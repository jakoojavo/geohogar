import { Router } from "express";
import { subirPropiedades, obtenerListaPropiedades, obtenerPropiedadesPorId } from "../handlers/propiedades";

const routerPropiedades = Router();

routerPropiedades.post('/propiedades', subirPropiedades);
routerPropiedades.get('/propiedades', obtenerListaPropiedades);
routerPropiedades.get('/propiedades/:id', obtenerPropiedadesPorId);

export default routerPropiedades;
