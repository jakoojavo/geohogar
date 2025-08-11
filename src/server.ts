import express from "express";
import db from "./config/db";
import  routerAgente  from "./router/agenteInmobiliario.router";
import routerEstadoconsulta from "./router/estadoconsulta.router";
import routerConsulta from "./router/consulta.router";
import routerImagen from "./router/imagen.router";
import routerOperacion from "./router/operacion.router";
import routerPiezas from "./router/piezas.router";
import routerPropiedades from "./router/propiedades.router";
import routerTipoinmueble from "./router/tipoinmueble.router";
import routerZona from "./router/zona.router";
import routerEstadopropiedad from "./router/estadopropiead.router";

const server = express();
server.use(express.json());




// async function connectDB() {
//    try {
//        await db.authenticate(); // Verificar conexión con la base de datos
//        console.log("Conexión a la base de datos exitosa");

//        await db.sync({ force: true }); // Sincronizar tablas (¡Cuidado con force en producción!)
//        console.log("Tablas sincronizadas");
//      } catch (error) {
//        console.error("Error al conectar o sincronizar la base de datos:", error);
//      }
//    }
//   connectDB()


async function conectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log('La base de datos se conecto correctamente')
    } catch (error) {
        console.log(error)
        console.log('error de conexion a la Base de Datos')
    }
}
conectDB()

server.use("/api",routerAgente)
server.use("/api",routerEstadoconsulta)
server.use("/api",routerConsulta)
server.use("/api",routerEstadopropiedad)
server.use("/api",routerImagen)
server.use("/api",routerOperacion)
server.use("/api",routerPiezas)
server.use("/api", routerPropiedades)
server.use("/api", routerTipoinmueble)
server.use("/api",routerZona)



export default server