import { Router } from "express";
import { subirAgente,obtenerAgentePorId,obtenerListaAgente,actualizarAgente } from "../handlers/agenteinmobiliario";

const  routerAgente = Router();


routerAgente.post('/agenteinmobiliario', subirAgente);
routerAgente.get('/agenteinmobiliario', obtenerListaAgente);
routerAgente.get('/agenteinmobiliario/:id', obtenerAgentePorId);
routerAgente.put('/agenteinmobiliario/:id', actualizarAgente);

export default routerAgente;