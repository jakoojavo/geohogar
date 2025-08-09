import { Request,Response } from "express";
import Piezas from "../models/Piezas.models";

const subirPiezas  = async ( req:Request, res: Response ) =>{
    try{
        const consulta=await Piezas.create(req.body)
        res.json({data:consulta})
    } catch(error){
        console.error('Error al crear consulta:', error);
        res.status(500).json({ error: 'Error al crear consulta', details: error });
    }
}

const obtenerListaPiezas = async (req: Request, res: Response) => {
    try {
      const consulta = await Piezas.findAll()
      res.json({ data: consulta });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener el listado de consulta" });
    }
  };


  const obtenerPiezasPorId = async (req: Request, res: Response) =>{
    try{
    const{id}=req.params
    const consulta = await Piezas.findByPk (id)
    if(!consulta) {
    return res.status(404).json('consulta no existe')
    }
    res.json({data: consulta})
    }catch(error) {
    console.log(error)
    }
}

export { subirPiezas,
     obtenerPiezasPorId,
     obtenerListaPiezas };