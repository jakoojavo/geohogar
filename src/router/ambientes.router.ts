import { Router } from "express";
import { subirAmbientes, obtenerListaAmbientes, obtenerAmbientesPorId,actualizarAmbiente } from "../handlers/ambientes";

const routerAmbientes = Router();
routerAmbientes.post('/ambientes', subirAmbientes);
routerAmbientes.get('/ambientes', obtenerListaAmbientes);
routerAmbientes.get('/ambientes/:id', obtenerAmbientesPorId);
routerAmbientes.put('/ambientes/:id', actualizarAmbiente);

export default routerAmbientes;