import { Router } from "express";
import { subirPiezas, obtenerListaPiezas, obtenerPiezasPorId } from "../handlers/piezas";

const routerPiezas = Router();

routerPiezas.post('/piezas', subirPiezas);
routerPiezas.get('/piezas', obtenerListaPiezas);
routerPiezas.get('/piezas/:id', obtenerPiezasPorId);

export default routerPiezas;