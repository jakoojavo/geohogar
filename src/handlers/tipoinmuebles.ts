import { Request,Response } from "express";
import Tipoinmueble from "../models/Tipoinmueble.models";

const subirTipoinmueble  = async ( req:Request, res: Response ) =>{
    try{
        const consulta=await Tipoinmueble.create(req.body)
        res.json({data:consulta})
    } catch(error){
        console.error('Error al crear consulta:', error);
        res.status(500).json({ error: 'Error al crear consulta', details: error });
    }
}

const obtenerListaTipoinmueble = async (req: Request, res: Response) => {
    try {
      const consulta = await Tipoinmueble.findAll()
      res.json({ data: consulta });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener el listado de consulta" });
    }
  };


  const obtenerTipoinmueblePorId = async (req: Request, res: Response) =>{
    try{
    const{id}=req.params
    const consulta = await Tipoinmueble.findByPk (id)
    if(!consulta) {
    return res.status(404).json('consulta no existe')
    }
    res.json({data: consulta})
    }catch(error) {
    console.log(error)
    }
}

export { subirTipoinmueble,
     obtenerTipoinmueblePorId,
     obtenerListaTipoinmueble };