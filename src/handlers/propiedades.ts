import { Request,Response } from "express";
import Propiedades from "../models/Propiedades.models";

const subirPropiedades  = async ( req:Request, res: Response ) =>{
    try{
        const consulta=await Propiedades.create(req.body)
        res.json({data:consulta})
    } catch(error){
        console.error('Error al crear consulta:', error);
        res.status(500).json({ error: 'Error al crear consulta', details: error });
    }
}

const obtenerListaPropiedades = async (req: Request, res: Response) => {
    try {
      const consulta = await Propiedades.findAll()
      res.json({ data: consulta });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener el listado de consulta" });
    }
  };


  const obtenerPropiedadesPorId = async (req: Request, res: Response) =>{
    try{
    const{id}=req.params
    const consulta = await Propiedades.findByPk (id)
    if(!consulta) {
    return res.status(404).json('consulta no existe')
    }
    res.json({data: consulta})
    }catch(error) {
    console.log(error)
    }
}

export { subirPropiedades,
     obtenerPropiedadesPorId,
     obtenerListaPropiedades};