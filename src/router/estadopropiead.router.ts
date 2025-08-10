import { Router } from "express";
import { subirEstadopropiedad,obtenerEstadopropiedadPorId,obtenerListaEstadopropiedad } from "../handlers/estadopropiedad";

const routerEstadopropiedad = Router();

routerEstadopropiedad.post('/estadopropiedad', subirEstadopropiedad);
routerEstadopropiedad.get('/estadopropiedad', obtenerListaEstadopropiedad);
routerEstadopropiedad.get('/estadopropiedad/:id', obtenerEstadopropiedadPorId);


export default routerEstadopropiedad;