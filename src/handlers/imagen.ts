import { Request,Response } from "express";
import Imagen from "../models/Imagen.models";

const subirImagen  = async ( req:Request, res: Response ) =>{
    try{
        const imagen=await Imagen.create(req.body)
        res.json({data:imagen})
    } catch(error){
        console.error('Error al crear consulta:', error);
        res.status(500).json({ error: 'Error al crear consulta', details: error });
    }
}

const obtenerListaImagen = async (req: Request, res: Response) => {
    try {
      const imagen = await Imagen.findAll()
      res.json({ data: imagen });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener el listado de consulta" });
    }
  };


  const obtenerImagenPorId = async (req: Request, res: Response) =>{
    try{
    const{id}=req.params
    const imagen = await Imagen.findByPk (id)
    if(!imagen) {
    return res.status(404).json('consulta no existe')
    }
    res.json({data: imagen})
    }catch(error) {
    console.log(error)
    }
}

const actualizarImagen = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { URL, estado, ID_propiedad } = req.body;

  try {
    const imagen = await Imagen.findByPk(id);

    if (!imagen) {
      return res.status(404).json({ message: "Imagen no encontrada" });
    }

    await imagen.update({ URL, estado, ID_propiedad });

    res.json({ data: imagen });

  } catch (error) {
    console.error("Error al actualizar imagen:", error);
    res.status(500).json({ message: "Error al actualizar imagen" });
  }
};

export { subirImagen,
     obtenerImagenPorId,
     obtenerListaImagen,
     actualizarImagen };