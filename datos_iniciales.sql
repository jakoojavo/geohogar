-- Inserción de datos iniciales para la base de datos GeoHogar

-- Zonas
INSERT INTO "zona" ("ID_zona", "zona", "estado", "createdAt", "updatedAt") VALUES
(1, 'Centro', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Villa Cabello', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'Villa Sarita', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(4, 'Itambe Mini', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Tipo de Inmueble
INSERT INTO "tipoinmueble" ("ID_tipoinmueble", "inmueble", "estado", "createdAt", "updatedAt") VALUES
(1, 'Casa', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Departamento', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'Terreno', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(4, 'Local comercial', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Estado de Propiedad
INSERT INTO "estadopropiedad" ("ID_estadopropiedad", "estado_propiedad", "estado", "createdAt", "updatedAt") VALUES
(1, 'Disponible', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Vendido', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'Alquilado', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(4, 'Reservado', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Ambientes
INSERT INTO "ambientes" ("ID_ambiente", "ambientes", "estado", "createdAt", "updatedAt") VALUES
(1, '1 ambiente', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, '2 ambientes', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, '3 ambientes', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(4, '4 ambientes o más', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Mascota
INSERT INTO "mascota" ("ID_Mascota", "Mascota", "estado", "createdAt", "updatedAt") VALUES
(1, 'No se aceptan', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Solo mascotas pequeñas', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'Se aceptan todo tipo de mascotas', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Agente Inmobiliario
INSERT INTO "agenteinmobiliario" ("ID_agente", "nombre", "email", "telefono", "cuild", "dni", "estado", "clave", "matricula", "observaciones", "esadmin", "createdAt", "updatedAt") VALUES
(1, 'Juan Pérez', 'juan.perez@geohogar.com', '3764-123456', '20-12345678-9', '12345678', true, 'clave123', 'MP-123', 'Agente con 5 años de experiencia', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Maria López', 'maria.lopez@geohogar.com', '3764-654321', '27-87654321-0', '87654321', true, 'clave456', 'MP-456', 'Especialista en alquileres', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'Carlos García', 'carlos.garcia@geohogar.com', '3764-987654', '20-23456789-1', '23456789', true, 'clave789', 'MP-789', 'Agente administrador', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Propiedades
-- 3 propiedades en Zona Centro (ID_zona = 1)
INSERT INTO "propiedades" ("ID_propiedades", "direccion", "precio", "descripcion", "latitud", "longitud", "estado", "ID_zona", "ID_agente", "ID_tipoinmueble", "ID_estadopropiedad", "ID_ambiente", "garage", "balcon", "patio", "acepta_mascota", "ID_Mascota", "createdAt", "updatedAt") VALUES
(1, 'Calle San Martín 1234', 150000.00, 'Amplio departamento en el corazón de la ciudad', '-27.3660', '-55.8940', true, 1, 1, 2, 1, 3, true, true, false, true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Calle Bolívar 2345', 250000.00, 'Casa con patio y pileta', '-27.3670', '-55.8950', true, 1, 2, 1, 1, 4, true, false, true, true, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'Avenida Corrientes 987', 80000.00, 'Local comercial en zona estratégica', '-27.3655', '-55.8935', true, 1, 3, 4, 1, 1, false, false, false, false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- 3 propiedades en Villa Cabello (ID_zona = 2)
INSERT INTO "propiedades" ("ID_propiedades", "direccion", "precio", "descripcion", "latitud", "longitud", "estado", "ID_zona", "ID_agente", "ID_tipoinmueble", "ID_estadopropiedad", "ID_ambiente", "garage", "balcon", "patio", "acepta_mascota", "ID_Mascota", "createdAt", "updatedAt") VALUES
(4, 'Avenida Eva Perón 5678', 120000.00, 'Casa familiar en barrio tranquilo', '-27.3671', '-55.9481', true, 2, 1, 1, 1, 3, true, true, true, true, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(5, 'Calle Chacabuco 3456', 95000.00, 'Departamento a estrenar con balcón', '-27.3680', '-55.9490', true, 2, 2, 2, 1, 2, true, true, false, true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(6, 'Avenida Tambor de Tacuarí 7890', 180000.00, 'Terreno ideal para construcción', '-27.3669', '-55.9475', true, 2, 3, 3, 1, 1, false, false, false, false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- 3 propiedades en Villa Sarita (ID_zona = 3)
INSERT INTO "propiedades" ("ID_propiedades", "direccion", "precio", "descripcion", "latitud", "longitud", "estado", "ID_zona", "ID_agente", "ID_tipoinmueble", "ID_estadopropiedad", "ID_ambiente", "garage", "balcon", "patio", "acepta_mascota", "ID_Mascota", "createdAt", "updatedAt") VALUES
(7, 'Avenida Roque Pérez 123', 300000.00, 'Casa de lujo con vista al río', '-27.3560', '-55.8950', true, 3, 1, 1, 1, 4, true, true, true, true, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(8, 'Calle Ivanowski 456', 180000.00, 'Moderno departamento cerca de la costanera', '-27.3570', '-55.8960', true, 3, 2, 2, 1, 2, true, true, false, false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(9, 'Calle Alberdi 789', 220000.00, 'Casa con amplio jardín', '-27.3555', '-55.8945', true, 3, 3, 1, 1, 3, true, false, true, true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- 3 propiedades en Itambe Mini (ID_zona = 4)
INSERT INTO "propiedades" ("ID_propiedades", "direccion", "precio", "descripcion", "latitud", "longitud", "estado", "ID_zona", "ID_agente", "ID_tipoinmueble", "ID_estadopropiedad", "ID_ambiente", "garage", "balcon", "patio", "acepta_mascota", "ID_Mascota", "createdAt", "updatedAt") VALUES
(10, 'Avenida 147 y Calle 166', 90000.00, 'Casa económica en barrio popular', '-27.4110', '-55.9610', true, 4, 1, 1, 1, 2, false, false, true, true, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(11, 'Calle 158 N° 4532', 75000.00, 'Departamento tipo duplex', '-27.4120', '-55.9620', true, 4, 2, 2, 1, 3, true, false, false, true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(12, 'Avenida 115 y Calle 122', 50000.00, 'Terreno en esquina', '-27.4100', '-55.9600', true, 4, 3, 3, 1, 1, false, false, false, false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Imagen
-- Se asume que las propiedades tienen IDs del 1 al 12
INSERT INTO "imagen" ("URL", "estado", "ID_propiedad", "createdAt", "updatedAt") VALUES
('https://example.com/imagen1.jpg', true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('https://example.com/imagen2.jpg', true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('https://example.com/imagen3.jpg', true, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('https://example.com/imagen4.jpg', true, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('https://example.com/imagen5.jpg', true, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('https://example.com/imagen6.jpg', true, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('https://example.com/imagen7.jpg', true, 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('https://example.com/imagen8.jpg', true, 8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('https://example.com/imagen9.jpg', true, 9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('https://example.com/imagen10.jpg', true, 10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('https://example.com/imagen11.jpg', true, 11, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('https://example.com/imagen12.jpg', true, 12, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Operacion
INSERT INTO "operacion" ("tipo", "fechainicio", "fechafin", "estado", "ID_propiedades", "createdAt", "updatedAt") VALUES
('Alquiler', '2025-11-01', '2026-11-01', true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Venta', '2025-11-01', NULL, true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Alquiler', '2025-12-01', '2026-12-01', true, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Estado Consulta
INSERT INTO "estadoconsulta" ("ID_estadoconsulta", "estado_consulta", "estado", "createdAt", "updatedAt") VALUES
(1, 'Pendiente', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Respondida', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'Cerrada', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Consulta
INSERT INTO "consulta" ("nombre_cliente", "email", "Mensaje", "telefono", "estado", "ID_propiedades", "ID_estadoconsulta", "createdAt", "updatedAt") VALUES
('Ana Gómez', 'ana.gomez@email.com', 'Estoy interesada en el departamento de San Martín, ¿sigue disponible?', '3764-112233', true, 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Pedro Ramírez', 'pedro.ramirez@email.com', 'Quisiera saber más sobre la casa con pileta en calle Bolívar.', '3764-445566', true, 2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Lucía Fernández', 'lucia.fernandez@email.com', '¿El local comercial tiene habilitación?', '3764-778899', true, 3, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);