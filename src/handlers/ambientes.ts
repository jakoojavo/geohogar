import { Request,Response } from "express";
import Ambientes from "../models/Ambientes.models";

const subirAmbientes  = async ( req:Request, res: Response ) =>{
    try{
        const consulta=await Ambientes.create(req.body)
        res.json({data:consulta})
    } catch(error){
        console.error('Error al crear consulta:', error);
        res.status(500).json({ error: 'Error al crear consulta', details: error });
    }
}

const obtenerListaAmbientes = async (req: Request, res: Response) => {
    try {
      const consulta = await Ambientes.findAll()
      res.json({ data: consulta });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener el listado de consulta" });
    }
  };


  const obtenerAmbientesPorId = async (req: Request, res: Response) =>{
    try{
    const{id}=req.params
    const consulta = await Ambientes.findByPk (id)
    if(!consulta) {
    return res.status(404).json('consulta no existe')
    }
    res.json({data: consulta})
    }catch(error) {
    console.log(error)
    }
}

const actualizarAmbiente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ambientes, estado } = req.body;

  try {
    const ambiente = await Ambientes.findByPk(id);

    if (!ambiente) {
      return res.status(404).json({ message: "Ambiente no encontrado" });
    }

    await ambiente.update({ ambientes, estado });

    res.json({ data: ambiente });

  } catch (error) {
    console.error("Error al actualizar ambiente:", error);
    res.status(500).json({ message: "Error al actualizar ambiente" });
  }
};

export { subirAmbientes,
     obtenerAmbientesPorId,
     obtenerListaAmbientes,
    actualizarAmbiente };