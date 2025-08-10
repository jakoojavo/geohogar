import { Router } from "express";
import { subirTipoinmueble, obtenerListaTipoinmueble, obtenerTipoinmueblePorId } from "../handlers/tipoinmuebles";

const routerTipoinmueble = Router();
routerTipoinmueble.post('/tipoinmueble', subirTipoinmueble);
routerTipoinmueble.get('/tipoinmueble', obtenerListaTipoinmueble);
routerTipoinmueble.get('/tipoinmueble/:id', obtenerTipoinmueblePorId);
export default routerTipoinmueble;
