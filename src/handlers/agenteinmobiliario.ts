import { Request,Response } from "express";
import Agenteinmobiliario from "../models/Agenteinmobiliario.models";
import bcrypt from 'bcryptjs';
import jwtoken from 'jsonwebtoken';


const subirAgente  = async ( req:Request, res: Response ) =>{
    try{
     
        const claveEncriptada = await bcrypt.hash(req.body.clave, 10);
        req.body.clave = claveEncriptada;
        const agente=await Agenteinmobiliario.create(req.body)
        res.json({data:agente})
    } catch(error){
        console.error('Error al crear agente:', error);
        res.status(500).json({ error: 'Error al crear agente', details: error });
    }
}

const obtenerListaAgente = async (req: Request, res: Response) => {
    try {
      const agente = await Agenteinmobiliario.findAll()
      res.json({ data: agente });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener el listado de agente" });
    }
  };


  const obtenerAgentePorId = async (req: Request, res: Response) =>{
    try{
    const{id}=req.params
    const agente = await Agenteinmobiliario.findByPk (id)
    if(!agente) {
    return res.status(404).json('agente no existe')
    }
    res.json({data: agente})
    }catch(error) {
    console.log(error)
    }
}


const actualizarAgente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, email, telefono, cuild, dni, estado, clave, matricula, observaciones, esadmin } = req.body;

  try {
    const agente = await Agenteinmobiliario.findByPk(id);

    if (!agente) {
      return res.status(404).json({ message: "Agente Inmobiliario no encontrado" });
    }

    await agente.update({ nombre, email, telefono, cuild, dni, estado, clave, matricula, observaciones, esadmin });

    res.json({ data: agente });

  } catch (error) {
    console.error("Error al actualizar agente inmobiliario:", error);
    res.status(500).json({ message: "Error al actualizar agente inmobiliario" });
  }
};

const eliminarAgente = async (req: Request, res: Response)=>{
    try{
    const{id}=req.params
    const agente = await Agenteinmobiliario.findByPk (id)
    if (!agente) {
    return res.status(404).json('agente no existe')
    }
    await agente.destroy (req.body)
    res.send({data: "agente eliminado"})
    }catch(error) {
    console.log(error)
    }
}

export{
    subirAgente,
    obtenerListaAgente,
    obtenerAgentePorId,
    actualizarAgente,
    eliminarAgente
}