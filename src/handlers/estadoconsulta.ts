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

export { subirEstadoconsulta,
     obtenerEstadoconsultaPorId,
     obtenerListaEstadoconsulta };