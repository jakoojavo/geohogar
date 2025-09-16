import { Router } from "express";
import { login,logout, profile,verify } from "../control/auth.controllerr";
import { authRequierd } from "../middlewares/validateToken";

 
const routerAuth = Router();

routerAuth.post('/login', login);
routerAuth.post('/logout', logout);
routerAuth.get('/profile', authRequierd, profile);
routerAuth.get('/verify', verify);



export default routerAuth;
