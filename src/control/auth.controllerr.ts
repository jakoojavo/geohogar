import agenteinmobiliario from "../models/Agenteinmobiliario.models";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const { dni, clave } = req.body;

    try {
        const userFound = await agenteinmobiliario.findOne({
            where: { dni: dni },
            attributes: ['ID_agente','clave', 'nombre', 'email', 'telefono', 'estado', 'cuild', 'dni','matricula', 'esadmin', 'createdAt'] 
        });
        // verifica si exite el usuario
        if (!userFound) return res.status(404).json(["Usuario no encontrado"]);

        // verifica si existe la clave

        if (!userFound.dataValues.clave) {
            return res.status(400).json(["Password no establecida para este usuario"]);
        }
        
        //verifica si la clave es correcta

        const isMatch = await bcrypt.compare(
            clave,
            userFound.dataValues.clave
        );

        if (!isMatch) return res.status(404).json(["Contraseña incorrecta"]);

        // Log para depuración: mostrar el ID del usuario antes de crear el token
        //console.log("ID_users para el token:", userFound.dataValues.ID_users);

        jwt.sign({
            id: userFound.dataValues.ID_agente, // Usa ID_users
        }, process.env.TOKEN_SECRET, {
            expiresIn: "15m",
        }, (err, token) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: "Error al generar el token" });
            }
            res.cookie('token', token, {
                httpOnly: true,
                sameSite: 'none',
                secure: true,
                path: '/',
            });

            // Al enviar el usuario, podrías enviar también las especialidades
            // userFound.toJSON() es útil para obtener un objeto plano con las relaciones
            res.json({
                token,
                user: {
                id: userFound.dataValues.ID_agente, // Usa ID_users
                nombre: userFound.dataValues.nombre,
                email: userFound.dataValues.email,
                DNI: userFound.dataValues.dni,
                cuild: userFound.dataValues.cuild,
                telefono: userFound.dataValues.telefono,
                matricula: userFound.dataValues.matricula,
                esadmin: userFound.dataValues.esadmin,
                estado: userFound.dataValues.estado, // Las especialidades ahora se obtienen directamente aquí
                createdAt: userFound.dataValues.createdAt // Sequelize usa createdAt/updatedAt por defecto
                }
                
            });

        });

    } catch (error) {
        console.error(error);
        res.status(500).send(["Error del servidor"]);
    }
};

export const logout = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0),
    });
    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    // Asumiendo que req.decoded.id contiene el ID del usuario
    const userFound = await agenteinmobiliario.findByPk(req.decoded.id, {
        attributes: ['ID_agente', 'nombre', 'email', 'telefono', 'estado', 'cuild', 'dni','matricula', 'esadmin', 'createdAt'] 
    
    });
      if (!userFound) return res.status(400).json({ message: 'User not found' });

     res.json({
        
        user: {
            id: userFound.dataValues.ID_agente,
            nombre: userFound.dataValues.nombre,
            email: userFound.dataValues.email,
            DNI: userFound.dataValues.dni,
            cuild: userFound.dataValues.cuild,
            telefono: userFound.dataValues.telefono,
            matricula: userFound.dataValues.matricula,
            esadmin: userFound.dataValues.esadmin,
            estado: userFound.dataValues.estado,
            createdAt: userFound.dataValues.createdAt
        }
    });
};

export const verify = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json(['No autorizado']);

  jwt.verify(token, process.env.TOKEN_SECRET, async (err, decoded) => {
    if (err) return res.status(401).json(['No autorizado']);

    const userFound = await agenteinmobiliario.findByPk(decoded.id, {
      attributes: [
        'ID_agente', 'nombre', 'email', 'telefono', 'estado',
        'cuild', 'dni', 'matricula', 'esadmin', 'createdAt'
      ]
    });

    if (!userFound) return res.status(401).json(['No autorizado']);

    return res.json({
      user: {
        id: userFound.dataValues.ID_agente,
        nombre: userFound.dataValues.nombre,
        email: userFound.dataValues.email,
        DNI: userFound.dataValues.dni,
        cuild: userFound.dataValues.cuild,
        telefono: userFound.dataValues.telefono,
        matricula: userFound.dataValues.matricula,
        esadmin: userFound.dataValues.esadmin,
        estado: userFound.dataValues.estado,
        createdAt: userFound.dataValues.createdAt
      }
    });
  });
};
