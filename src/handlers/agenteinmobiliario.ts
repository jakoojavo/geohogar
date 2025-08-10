import { Request,Response } from "express";
import Agenteinmobiliario from "../models/Agenteinmobiliario.models";

const subirAgente  = async ( req:Request, res: Response ) =>{
    try{
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


const actualizarAgente = async (req, res) => {
  const { id } = req.params;
  const { agente_id } = req.body;

  try {
    
    const agente = await Agenteinmobiliario.findOne({ where: { id } });
    if (!agente) {
      return res.status(404).json({ message: "Status not found" });
    }

    // Actualiza el registro
    const [updatedRows] = await Agenteinmobiliario.update(
      { agente_id },
      { where: { id } }
    );

    if (updatedRows === 0) {
      return res.status(500).json({ message: "No se pudo actualizar el estado" });
    }

    const updatedagente = await Agenteinmobiliario.findOne({ where: { id } });
    res.status(200).json(updatedagente);
  } catch (error) {
    console.error("Error updating agente:", error);
    res.status(500).json({ message: "Error updating agente" });
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