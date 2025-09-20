import { Router } from "express";
import { subirZona, obtenerListaZona, obtenerZonaPorId, actualizarZona } from "../handlers/zona";

const routerZona = Router();

routerZona.post('/zona', subirZona);
routerZona.get('/zona', obtenerListaZona);
routerZona.get('/zona/:id', obtenerZonaPorId);
routerZona.put('/zona/:id', actualizarZona);  

export default routerZona;