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

export { subirConsulta,
     obtenerConsultaPorId,
     obtenerListaConsulta };