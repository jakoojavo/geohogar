import { Request,Response } from "express";
import Propiedades from "../models/Propiedades.models";
import Agenteinmobiliario from '../models/Agenteinmobiliario.models';
import Tipoinmueble from '../models/Tipoinmueble.models';
import Zona from '../models/Zona.models';
import Estadopropiedad from '../models/Estadopropiedad.models';
import Ambientes from '../models/Ambientes.models';
import Imagen from "../models/Imagen.models";


//Agregado 
const subirPropiedades = async (req: Request, res: Response) => {
  try {
    const {
      direccion, precio, descripcion, geolocalizacion,latitud,longitud,
      estado, ID_zona, ID_agente, ID_tipoinmueble,
      ID_estadopropiedad, ID_ambiente
    } = req.body;

    const parseOrNull = (value: string) => {
  return value === '' ? null : parseInt(value);
};


    const propiedad = await Propiedades.create({
        direccion,
        precio,
        descripcion,
        geolocalizacion,
        latitud,
        longitud,
        estado: estado === 'true' || estado === true,
        ID_zona: parseOrNull(ID_zona),
        ID_agente: parseOrNull(ID_agente),
        ID_tipoinmueble: parseOrNull(ID_tipoinmueble),
        ID_estadopropiedad: parseOrNull(ID_estadopropiedad),
        ID_ambiente: parseOrNull(ID_ambiente)
});
      console.log('Archivos recibidos:', req.files);
      console.log('Body recibido:', req.body);
    //Confirmar que el ID fue generado correctamente
    console.log('ID obtenido con getDataValue:', propiedad.getDataValue('ID_propiedades'));




    //Guardar imágenes si existen
    if (req.files && Array.isArray(req.files)) {
  const imagenes = req.files.map(file => ({
    URL: `/uploads/${file.filename}`,
    estado: true,
    ID_propiedad: propiedad.getDataValue('ID_propiedades')
  }));

  try {
    await Imagen.bulkCreate(imagenes);
  } catch (imgError) {
    console.error('Error al guardar imágenes:', imgError);
  }
}


    res.status(201).json({ mensaje: "Propiedad creada con éxito", data: propiedad });
  } catch (error) {
    console.error("Error al crear propiedad:", error);
    res.status(500).json({ error: "Error al crear propiedad", details: error });
  }
};




/*const subirPropiedades  = async ( req:Request, res: Response ) =>{
    try{
        const consulta=await Propiedades.create(req.body)
        res.json({data:consulta})
    } catch(error){
        console.error('Error al crear consulta:', error);
        res.status(500).json({ error: 'Error al crear consulta', details: error });
    }
}*/



// const obtenerListaPropiedades = async (req: Request, res: Response) => {
//     try {
//       const consulta = await Propiedades.findAll()
//       res.json({ data: consulta });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Error al obtener el listado de consulta" });
//     }
//   };

//AGREGAADO
import Imagenes from "../models/Imagen.models"; 

const obtenerListaPropiedades = async (req: Request, res: Response) => {
  try {
    const consulta = await Propiedades.findAll({
      attributes: {
        exclude: ['ID_zona', 'ID_agente', 'ID_tipoinmueble', 'ID_estadopropiedad', 'ID_ambiente'],
      },
      include: [
        { model: Agenteinmobiliario, attributes: ['nombre', 'matricula'] },
        { model: Zona, attributes: ['zona'] },
        { model: Tipoinmueble, attributes: ['inmueble'] },
        { model: Estadopropiedad, attributes: ['estado_propiedad'] },
        { model: Ambientes, attributes: ['ambientes'] },
        { model: Imagenes, attributes: ['ID_imagen', 'URL', 'estado'] } 
      ],
    });

    res.json({ data: consulta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el listado de propiedades" });
  }
};





/*const obtenerListaPropiedades = async (req: Request, res: Response) => {
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
};*/


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
//
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