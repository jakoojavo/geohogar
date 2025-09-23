import { Router } from "express";
import { subirImagen,obtenerImagenPorId,obtenerListaImagen,actualizarImagen } from "../handlers/imagen";

const routerImagen = Router();

routerImagen.post('/imagen', subirImagen);
routerImagen.get('/imagen', obtenerListaImagen);
routerImagen.get('/imagen/:id', obtenerImagenPorId);
routerImagen.put('/imagen/:id', actualizarImagen);


 
export default routerImagen;