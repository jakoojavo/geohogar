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

const actualizarEstadopropiedad = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { estado_propiedad, estado } = req.body;

  try {
    const estadopropiedad = await Estadopropiedad.findByPk(id);

    if (!estadopropiedad) {
      return res.status(404).json({ message: "Estado de propiedad no encontrado" });
    }

    await estadopropiedad.update({ estado_propiedad, estado });

    res.json({ data: estadopropiedad });

  } catch (error) {
    console.error("Error al actualizar estado de propiedad:", error);
    res.status(500).json({ message: "Error al actualizar estado de propiedad" });
  }
};

export { subirEstadopropiedad,
     obtenerEstadopropiedadPorId,
     obtenerListaEstadopropiedad,
    actualizarEstadopropiedad };