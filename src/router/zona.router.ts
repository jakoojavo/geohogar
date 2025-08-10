import { Router } from "express";
import { subirZona, obtenerListaZona, obtenerZonaPorId } from "../handlers/zona";

const routerZona = Router();

routerZona.post('/zona', subirZona);
routerZona.get('/zona', obtenerListaZona);
routerZona.get('/zona/:id', obtenerZonaPorId);

export default routerZona;