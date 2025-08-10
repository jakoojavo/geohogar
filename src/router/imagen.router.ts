import { Router } from "express";
import { subirImagen,obtenerImagenPorId,obtenerListaImagen } from "../handlers/imagen";

const routerImagen = Router();

routerImagen.post('/imagen', subirImagen);
routerImagen.get('/imagen', obtenerListaImagen);
routerImagen.get('/imagen/:id', obtenerImagenPorId);
 
export default routerImagen;