import { Request,Response } from "express";
import Zona from "../models/Zona.models";

const subirZona  = async ( req:Request, res: Response ) =>{
    try{
        const zona=await Zona.create(req.body)
        res.json({data:zona})
    } catch(error){
        console.error('Error al crear consulta:', error);
        res.status(500).json({ error: 'Error al crear consulta', details: error });
    }
}

const obtenerListaZona = async (req: Request, res: Response) => {
    try {
      const zona = await Zona.findAll()
      res.json({ data: zona });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener el listado de consulta" });
    }
  };


  const obtenerZonaPorId = async (req: Request, res: Response) =>{
    try{
    const{id}=req.params
    const zona = await Zona.findByPk (id)
    if(!zona) {
    return res.status(404).json('consulta no existe')
    }
    res.json({data: zona})
    }catch(error) {
    console.log(error)
    }
}

const actualizarZona = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { zona, estado } = req.body;

  try {
    const zonaobj = await Zona.findByPk(id);

    if (!zonaobj) {
      return res.status(404).json({ message: "Zona no encontrada" });
    }

    await zonaobj.update({ zona, estado });

    res.json({ data: zonaobj });

  } catch (error) {
    console.error("Error al actualizar zona:", error);
    res.status(500).json({ message: "Error al actualizar zona" });
  }
};

export { subirZona,
     obtenerZonaPorId,
     obtenerListaZona,
     actualizarZona };