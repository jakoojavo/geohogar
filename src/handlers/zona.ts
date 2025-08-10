import { Request,Response } from "express";
import Zona from "../models/Zona.models";

const subirZona  = async ( req:Request, res: Response ) =>{
    try{
        const consulta=await Zona.create(req.body)
        res.json({data:consulta})
    } catch(error){
        console.error('Error al crear consulta:', error);
        res.status(500).json({ error: 'Error al crear consulta', details: error });
    }
}

const obtenerListaZona = async (req: Request, res: Response) => {
    try {
      const consulta = await Zona.findAll()
      res.json({ data: consulta });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener el listado de consulta" });
    }
  };


  const obtenerZonaPorId = async (req: Request, res: Response) =>{
    try{
    const{id}=req.params
    const consulta = await Zona.findByPk (id)
    if(!consulta) {
    return res.status(404).json('consulta no existe')
    }
    res.json({data: consulta})
    }catch(error) {
    console.log(error)
    }
}

export { subirZona,
     obtenerZonaPorId,
     obtenerListaZona };