import { Router } from "express";
import { subirTipoinmueble, obtenerListaTipoinmueble, obtenerTipoinmueblePorId, actualizarTipoinmueble } from "../handlers/tipoinmuebles";

const routerTipoinmueble = Router();
routerTipoinmueble.post('/tipoinmueble', subirTipoinmueble);
routerTipoinmueble.get('/tipoinmueble', obtenerListaTipoinmueble);
routerTipoinmueble.get('/tipoinmueble/:id', obtenerTipoinmueblePorId);
routerTipoinmueble.put('/tipoinmueble/:id', actualizarTipoinmueble);


export default routerTipoinmueble;
