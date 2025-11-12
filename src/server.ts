import express from "express";
import cors from "cors";
import db from "./config/db";
import cookieParser from "cookie-parser";
import mime from "mime-types";
import path from "path";
import { corsMiddleware } from "./middlewares/corMiddleware";

// Routers
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
import routerAuth from "./router/auth.router";
import routerMascota from "./router/mascota.router";

const server = express();

// ✅ Middleware
server.use(cookieParser());
server.use(express.json());
server.use(corsMiddleware);

// ✅ Servir imágenes con MIME correcto
server.use('/uploads', express.static('uploads', {
  setHeaders: (res, filePath) => {
    res.setHeader('Content-Type', mime.lookup(filePath) || 'application/octet-stream');
  }
}));

// ✅ Rutas API
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
server.use("/api", routerMascota);
server.use("/api", routerAuth);

// ✅ Servir frontend compilado
server.use(express.static(path.join(__dirname, 'dist')));

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// ✅ Conexión a la base de datos
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

// ✅ Puerto
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

export default server;