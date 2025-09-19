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

const actualizarestadopropiedad = async (req, res) => {
  const { id } = req.params;
  const { Estadopropiedad_id } = req.body;

  try {
    
    const agente = await Estadopropiedad.findOne({ where: { id } });
    if (!agente) {
      return res.status(404).json({ message: "Status not found" });
    }

    // Actualiza el registro
    const [updatedRows] = await Estadopropiedad.update(
      { Estadopropiedad_id },
      { where: { id } }
    );

    if (updatedRows === 0) {
      return res.status(500).json({ message: "No se pudo actualizar el estado" });
    }

    const updatedEstadopropiedad = await Estadopropiedad.findOne({ where: { id } });
    res.status(200).json(updatedEstadopropiedad);
  } catch (error) {
    console.error("Error updating agente:", error);
    res.status(500).json({ message: "Error updating agente" });
  }
};

export { subirEstadopropiedad,
     obtenerEstadopropiedadPorId,
     obtenerListaEstadopropiedad,
    actualizarestadopropiedad };