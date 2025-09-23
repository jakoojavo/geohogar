import { Router } from "express";
import { subirEstadoconsulta, obtenerEstadoconsultaPorId, obtenerListaEstadoconsulta, actualizarEstadoconsulta } from "../handlers/estadoconsulta";

const routerEstadoconsulta = Router();

routerEstadoconsulta.post('/estadoconsulta', subirEstadoconsulta);
routerEstadoconsulta.get('/estadoconsulta', obtenerListaEstadoconsulta);
routerEstadoconsulta.get('/estadoconsulta/:id', obtenerEstadoconsultaPorId);
routerEstadoconsulta.put('/estadoconsulta/:id', actualizarEstadoconsulta);

export default routerEstadoconsulta;