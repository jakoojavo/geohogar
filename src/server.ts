import express from "express";
import cors from "cors";
import db from "./config/db";
const server = express();
server.use('/uploads', express.static('uploads'));
// Rutas
import routerAgente from "./router/agenteInmobiliario.router";
import routerEstadoconsulta from "./router/estadoconsulta.router";
import routerConsulta from "./router/consulta.router";
import routerImagen from "./router/imagen.router";
import routerOperacion from "./router/operacion.router";
import routerPropiedades from "./router/propiedades.router";
import routerTipoinmueble from "./router/tipoinmueble.router";
import routerZona from "./router/zona.router";
import routerEstadopropiedad from "./router/estadopropiead.router";
import routerAmbientes from "./router/ambientes.router";



// para la conexion con el fronted
server.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
server.use(express.json());

// Conexión a la base de datos
async function connectDB() {
  try {
    await db.authenticate();
    await db.sync(); // No usar { force: true } en producción
    console.log("✅ Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("❌ Error al conectar con la base de datos:", error);
  }
}
connectDB();

// Rutas
server.use("/api", routerAgente);
server.use("/api", routerEstadoconsulta);
server.use("/api", routerConsulta);
server.use("/api", routerEstadopropiedad);
server.use("/api", routerImagen);
server.use("/api", routerOperacion);
server.use("/api", routerPropiedades);
server.use("/api", routerTipoinmueble);
server.use("/api", routerZona);
server.use("/api", routerAmbientes);

// Puerto
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

export default server;
