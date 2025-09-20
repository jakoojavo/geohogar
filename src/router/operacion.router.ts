import { Router } from "express";
import { subirOperacion,obtenerListaOperacion,obtenerOperacionPorId,actualizarOperacion } from "../handlers/operaciones";

const routerOperacion = Router();

routerOperacion.post('/operacion', subirOperacion);
routerOperacion.get('/operacion', obtenerListaOperacion);
routerOperacion.get('/operacion/:id', obtenerOperacionPorId);
routerOperacion.put('/operacion/:id', actualizarOperacion);

export default routerOperacion;