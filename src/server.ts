import express from "express";
import db from "./config/db";



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

const server = express();

export default server