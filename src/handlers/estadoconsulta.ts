import { Request,Response } from "express";
import Estadoconsulta from "../models/Estadoconsulta.models";

const subirEstadoconsulta  = async ( req:Request, res: Response ) =>{
    try{
        const estadoconsulta=await Estadoconsulta.create(req.body)
        res.json({data:estadoconsulta})
    } catch(error){
        console.error('Error al crear estadoconsulta:', error);
        res.status(500).json({ error: 'Error al crear estadoconsulta', details: error });
    }
}

const obtenerListaEstadoconsulta = async (req: Request, res: Response) => {
    try {
      const estadoconsulta = await Estadoconsulta.findAll()
      res.json({ data: estadoconsulta });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener el listado de estadoconsulta" });
    }
  };


  const obtenerEstadoconsultaPorId = async (req: Request, res: Response) =>{
    try{
    const{id}=req.params
    const estadoconsulta = await Estadoconsulta.findByPk (id)
    if(!estadoconsulta) {
    return res.status(404).json('estadoconsulta no existe')
    }
    res.json({data: estadoconsulta})
    }catch(error) {
    console.log(error)
    }
}

const actualizarestadoconsulta = async (req, res) => {
  const { id } = req.params;
  const { estadoconsulta_id } = req.body;

  try {
    
    const agente = await Estadoconsulta.findOne({ where: { id } });
    if (!agente) {
      return res.status(404).json({ message: "Status not found" });
    }

    // Actualiza el registro
    const [updatedRows] = await Estadoconsulta.update(
      { estadoconsulta_id },
      { where: { id } }
    );

    if (updatedRows === 0) {
      return res.status(500).json({ message: "No se pudo actualizar el estado" });
    }

    const updatedestadoconsulta = await Estadoconsulta.findOne({ where: { id } });
    res.status(200).json(updatedestadoconsulta);
  } catch (error) {
    console.error("Error updating agente:", error);
    res.status(500).json({ message: "Error updating agente" });
  }
};

export { subirEstadoconsulta,
     obtenerEstadoconsultaPorId,
     obtenerListaEstadoconsulta };