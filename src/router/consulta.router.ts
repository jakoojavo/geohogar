import { Router } from "express";
import { subirConsulta,obtenerConsultaPorId,obtenerListaConsulta,actualizarConsulta } from "../handlers/consultas";

const routerConsulta = Router();

routerConsulta.post('/consulta', subirConsulta);
routerConsulta.get('/consulta', obtenerListaConsulta);
routerConsulta.get('/consulta/:id', obtenerConsultaPorId);
routerConsulta.put('/consulta/:id', actualizarConsulta);

export default routerConsulta;