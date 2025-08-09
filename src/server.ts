import express from "express";
import db from "./config/db";
import  routerAgente  from "./router/agenteInmobiliario.router";

const server = express();
server.use(express.json());


server.use("/api",routerAgente);

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



export default server