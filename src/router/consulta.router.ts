import { Router } from "express";
import { subirConsulta,obtenerConsultaPorId,obtenerListaConsulta } from "../handlers/consultas";

const routerConsulta = Router();

routerConsulta.post('/consulta', subirConsulta);
routerConsulta.get('/consulta', obtenerListaConsulta);
routerConsulta.get('/consulta/:id', obtenerConsultaPorId);

export default routerConsulta;