import { Router } from "express";
import { subirOperacion,obtenerListaOperacion,obtenerOperacionPorId } from "../handlers/operaciones";

const routerOperacion = Router();

routerOperacion.post('/operacion', subirOperacion);
routerOperacion.get('/operacion', obtenerListaOperacion);
routerOperacion.get('/operacion/:id', obtenerOperacionPorId);

export default routerOperacion;