import { Router } from "express";
import { subirImagen,obtenerImagenPorId,obtenerListaImagen,actualizarImagen } from "../handlers/imagen";
import upload from "../middlewares/uploadMiddleware";

const routerImagen = Router();

routerImagen.post('/imagen', upload.single('image'), subirImagen);
routerImagen.get('/imagen', obtenerListaImagen);
routerImagen.get('/imagen/:id', obtenerImagenPorId);
routerImagen.put('/imagen/:id', actualizarImagen);


 
export default routerImagen;