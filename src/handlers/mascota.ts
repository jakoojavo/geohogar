import { Request,Response } from "express";
import Mascota from "../models/Mascota.models";

const subirMascota  = async ( req:Request, res: Response ) =>{
    try{
        const consulta=await Mascota.create(req.body)
        res.json({data:consulta})
    } catch(error){
        console.error('Error al crear consulta:', error);
        res.status(500).json({ error: 'Error al crear consulta', details: error });
    }
}

const obtenerListaMascota = async (req: Request, res: Response) => {
    try {
      const consulta = await Mascota.findAll()
      res.json({ data: consulta });
    } catch (error) {
      console.error(error);

      console.error('❌ Error en obtenerListaMascota:', error);
      res.status(500).json({ message: 'Error al obtener mascotas', details: error.message });


    }
  };


  const obtenerMascotaPorId = async (req: Request, res: Response) =>{
    try{
    const{id}=req.params
    const consulta = await Mascota.findByPk (id)
    if(!consulta) {
    return res.status(404).json('consulta no existe')
    }
    res.json({data: consulta})
    }catch(error) {
    console.log(error)
    }
}



const actualizarMascota = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { Mascota, estado } = req.body;

  try {
    const mascota = await Mascota.findByPk(id);

    if (!mascota) {
      return res.status(404).json({ message: "Mascota no encontrada" });
    }

    await mascota.update({ Mascota, estado });

    res.json({ data: mascota });

  } catch (error) {
    console.error("Error al actualizar mascota:", error);
    res.status(500).json({ message: "Error al actualizar mascota" });
  }
};

export { subirMascota,
     obtenerMascotaPorId,
     obtenerListaMascota,
     actualizarMascota
    };