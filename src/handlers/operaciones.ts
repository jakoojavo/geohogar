import { Request,Response } from "express";
import Operacion from "../models/Operaciones.models";

const subirOperacion  = async ( req:Request, res: Response ) =>{
    try{
        const operacion=await Operacion.create(req.body)
        res.json({data:operacion})
    } catch(error){
        console.error('Error al crear consulta:', error);
        res.status(500).json({ error: 'Error al crear consulta', details: error });
    }
}

const obtenerListaOperacion = async (req: Request, res: Response) => {
    try {
      const operacion = await Operacion.findAll()
      res.json({ data: operacion });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener el listado de consulta" });
    }
  };


  const obtenerOperacionPorId = async (req: Request, res: Response) =>{
    try{
    const{id}=req.params
    const operacion = await Operacion.findByPk (id)
    if(!operacion) {
    return res.status(404).json('consulta no existe')
    }
    res.json({data: operacion})
    }catch(error) {
    console.log(error)
    }
}

const actualizarOperacion = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { tipo, fechainicio, fechafin, estado, ID_propiedades } = req.body;

  try {
    const operacion = await Operacion.findByPk(id);

    if (!operacion) {
      return res.status(404).json({ message: "Operación no encontrada" });
    }

    await operacion.update({ tipo, fechainicio, fechafin, estado, ID_propiedades });

    res.json({ data: operacion });

  } catch (error) {
    console.error("Error al actualizar operación:", error);
    res.status(500).json({ message: "Error al actualizar operación" });
  }
};

export { subirOperacion,
     obtenerOperacionPorId,
     obtenerListaOperacion,
     actualizarOperacion };