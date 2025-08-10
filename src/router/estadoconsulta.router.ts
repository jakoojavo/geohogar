import { Router } from "express";
import { subirEstadoconsulta, obtenerEstadoconsultaPorId, obtenerListaEstadoconsulta } from "../handlers/estadoconsulta";

const routerEstadoconsulta = Router();

routerEstadoconsulta.post('/estadoconsulta', subirEstadoconsulta);
routerEstadoconsulta.get('/estadoconsulta', obtenerListaEstadoconsulta);
routerEstadoconsulta.get('/estadoconsulta/:id', obtenerEstadoconsultaPorId);

export default routerEstadoconsulta;