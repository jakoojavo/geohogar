import { Request,Response } from "express";
import Propiedades from "../models/Propiedades.models";
import Agenteinmobiliario from '../models/Agenteinmobiliario.models';
import Tipoinmueble from '../models/Tipoinmueble.models';
import Zona from '../models/Zona.models';
import Estadopropiedad from '../models/Estadopropiedad.models';
import Ambientes from '../models/Ambientes.models';

const subirPropiedades  = async ( req:Request, res: Response ) =>{
    try{
        const consulta=await Propiedades.create(req.body)
        res.json({data:consulta})
    } catch(error){
        console.error('Error al crear consulta:', error);
        res.status(500).json({ error: 'Error al crear consulta', details: error });
    }
}

// const obtenerListaPropiedades = async (req: Request, res: Response) => {
//     try {
//       const consulta = await Propiedades.findAll()
//       res.json({ data: consulta });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Error al obtener el listado de consulta" });
//     }
//   };


const obtenerListaPropiedades = async (req: Request, res: Response) => {
  try {
    const consulta = await Propiedades.findAll({
    
      attributes: {
        exclude: ['ID_zona', 'ID_agente', 'ID_tipoinmueble', 'ID_estadopropiedad', 'ID_ambiente'],
      },
   
      include: [
        {
          model: Agenteinmobiliario,
      
          attributes: ['nombre', 'matricula'],
        },
        {
          model: Zona,
         
          attributes: ['zona'],
        },
        {
          model: Tipoinmueble,

          attributes: ['inmueble'],
        },
        {
          model: Estadopropiedad,
 
          attributes: ['estado_propiedad'],
        },
        {
          model: Ambientes,

          attributes: ['ambientes'],
        },
       
      ],
    });

    res.json({ data: consulta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el listado de propiedades" });
  }
};


//   const obtenerPropiedadesPorId = async (req: Request, res: Response) =>{
//     try{
//     const{id}=req.params
//     const consulta = await Propiedades.findByPk (id)
//     if(!consulta) {
//     return res.status(404).json('consulta no existe')
//     }
//     res.json({data: consulta})
//     }catch(error) {
//     console.log(error)
//     }
// }
const obtenerPropiedadesPorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const consulta = await Propiedades.findByPk(id, {
 
      attributes: {
        exclude: ['ID_zona', 'ID_agente', 'ID_tipoinmueble', 'ID_estadopropiedad', 'ID_ambiente'],
      },
 
      include: [
        {
          model: Agenteinmobiliario,
          
          attributes: ['nombre', 'matricula'],
        },
        {
          model: Zona,
         
          attributes: ['zona'],
        },
        {
          model: Tipoinmueble,
          attributes: ['inmueble'],
        },
        {
          model: Estadopropiedad,
          attributes: ['estado_propiedad'],
        },
        {
          model: Ambientes,
          attributes: ['ambientes'],
        },
      ],
    });

    if (!consulta) {
      return res.status(404).json('Propiedad no existe');
    }

    res.json({ data: consulta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener la propiedad por ID" });
  }
};



export { subirPropiedades,
     obtenerPropiedadesPorId,
     obtenerListaPropiedades};