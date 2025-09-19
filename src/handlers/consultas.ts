import { Request,Response } from "express";
import Consulta from "../models/Consultas.models";

const subirConsulta  = async ( req:Request, res: Response ) =>{
    try{
        const consulta=await Consulta.create(req.body)
        res.json({data:consulta})
    } catch(error){
        console.error('Error al crear consulta:', error);
        res.status(500).json({ error: 'Error al crear consulta', details: error });
    }
}

const obtenerListaConsulta = async (req: Request, res: Response) => {
    try {
      const consulta = await Consulta.findAll()
      res.json({ data: consulta });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener el listado de consulta" });
    }
  };


  const obtenerConsultaPorId = async (req: Request, res: Response) =>{
    try{
    const{id}=req.params
    const consulta = await Consulta.findByPk (id)
    if(!consulta) {
    return res.status(404).json('consulta no existe')
    }
    res.json({data: consulta})
    }catch(error) {
    console.log(error)
    }
}

const actualizarconsulta = async (req, res) => {
  const { id } = req.params;
  const { consulta_id } = req.body;

  try {
    
    const agente = await Consulta.findOne({ where: { id } });
    if (!agente) {
      return res.status(404).json({ message: "Status not found" });
    }

    // Actualiza el registro
    const [updatedRows] = await Consulta.update(
      { consulta_id },
      { where: { id } }
    );

    if (updatedRows === 0) {
      return res.status(500).json({ message: "No se pudo actualizar el estado" });
    }

    const updatedconsulta = await Consulta.findOne({ where: { id } });
    res.status(200).json(updatedconsulta);
  } catch (error) {
    console.error("Error updating agente:", error);
    res.status(500).json({ message: "Error updating agente" });
  }
};

export { subirConsulta,
     obtenerConsultaPorId,
     obtenerListaConsulta,
    actualizarconsulta };