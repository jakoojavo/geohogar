import { Request,Response } from "express";
import Estadopropiedad from "../models/Estadopropiedad.models";

const subirEstadopropiedad  = async ( req:Request, res: Response ) =>{
    try{
        const estadopropiedad=await Estadopropiedad.create(req.body)
        res.json({data:estadopropiedad})
    } catch(error){
        console.error('Error al crear estadopropiedad:', error);
        res.status(500).json({ error: 'Error al crear estadopropiedad', details: error });
    }
}

const obtenerListaEstadopropiedad = async (req: Request, res: Response) => {
    try {
      const estadopropiedad = await Estadopropiedad.findAll()
      res.json({ data: estadopropiedad });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener el listado de estadopropiedad" });
    }
  };


  const obtenerEstadopropiedadPorId = async (req: Request, res: Response) =>{
    try{
    const{id}=req.params
    const estadopropiedad = await Estadopropiedad.findByPk (id)
    if(!estadopropiedad) {
    return res.status(404).json('estadopropiedad no existe')
    }
    res.json({data: estadopropiedad})
    }catch(error) {
    console.log(error)
    }
}

export { subirEstadopropiedad,
     obtenerEstadopropiedadPorId,
     obtenerListaEstadopropiedad };