import { Router } from "express";
import { subirAmbientes, obtenerListaAmbientes, obtenerAmbientesPorId } from "../handlers/ambientes";

const routerAmbientes = Router();
routerAmbientes.post('/ambientes', subirAmbientes);
routerAmbientes.get('/ambientes', obtenerListaAmbientes);
routerAmbientes.get('/ambientes/:id', obtenerAmbientesPorId);

export default routerAmbientes;