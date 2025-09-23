import { Router } from "express";
import { subirMascota,obtenerMascotaPorId,obtenerListaMascota,actualizarMascota } from "../handlers/mascota";   

const routerMascota = Router();

routerMascota.post('/mascota', subirMascota);
routerMascota.get('/mascota', obtenerListaMascota);
routerMascota.get('/mascota/:id', obtenerMascotaPorId);
routerMascota.put('/mascota/:id', actualizarMascota);


 
export default routerMascota;

