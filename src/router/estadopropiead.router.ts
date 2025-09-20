import { Router } from "express";
import { subirEstadopropiedad,obtenerEstadopropiedadPorId,obtenerListaEstadopropiedad, actualizarEstadopropiedad } from "../handlers/estadopropiedad";

const routerEstadopropiedad = Router();

routerEstadopropiedad.post('/estadopropiedad', subirEstadopropiedad);
routerEstadopropiedad.get('/estadopropiedad', obtenerListaEstadopropiedad);
routerEstadopropiedad.get('/estadopropiedad/:id', obtenerEstadopropiedadPorId);
routerEstadopropiedad.put('/estadopropiedad/:id', actualizarEstadopropiedad);


export default routerEstadopropiedad;