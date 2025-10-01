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
    console.log('🔍 BACKEND - Body recibido:', req.body);
    console.log('🔍 BACKEND - acepta_mascota recibido:', req.body.acepta_mascota);
    console.log('🔍 BACKEND - Tipo:', typeof req.body.acepta_mascota);
    console.log('🔍 BACKEND - ID_Mascota recibido:', req.body.ID_Mascota);
    const {
      direccion, precio, descripcion, geolocalizacion,latitud,longitud,
      estado, ID_zona, ID_agente, ID_tipoinmueble,
      ID_estadopropiedad, ID_ambiente, ID_Mascota, garage, balcon, patio, acepta_mascota

    } = req.body;
console.log('🔍 BACKEND - Después de destructuring:');
    console.log('  acepta_mascota:', acepta_mascota);
    console.log('  garage:', garage);
    console.log('  balcon:', balcon);
    console.log('  patio:', patio);
    console.log('  ID_Mascota:', ID_Mascota);
    const parseOrNull = (value: any) => {
  return value === '' || value === undefined || value === null ? null : parseInt(value);
};



    const propiedad = await Propiedades.create({
        direccion,
        precio,
        descripcion,
        geolocalizacion,
        latitud,
        longitud,
        acepta_mascota: acepta_mascota === 'true' || acepta_mascota === true,
        garage: garage === 'true' || garage === true,
        balcon: balcon === 'true' || balcon === true,
        patio: patio === 'true' || patio === true,  
        estado: estado === 'true' || estado === true,
        ID_zona: parseOrNull(ID_zona),
        ID_agente: parseOrNull(ID_agente),
        ID_tipoinmueble: parseOrNull(ID_tipoinmueble),
        ID_estadopropiedad: parseOrNull(ID_estadopropiedad),
        ID_ambiente: parseOrNull(ID_ambiente),
        //Agregado para la llave foranea de mascota
        ID_Mascota: acepta_mascota === 'true' || acepta_mascota === true ? parseOrNull(ID_Mascota) : null

});
      console.log('Archivos recibidos:', req.files);
      console.log('🖼️ Cantidad de imágenes recibidas:', Array.isArray(req.files) ? req.files.length : 'No es array');

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
import Mascota from "../models/Mascota.models";

// ========HANDLER GET - Listado de propiedades (CORREGIDO)=====================
const obtenerListaPropiedades = async (req: Request, res: Response) => {
  try {
    const consulta = await Propiedades.findAll({
      where: { estado: true }, // solo propiedades activas
      // NO EXCLUIR los IDs - son necesarios para la edición
      attributes: {
        exclude: ['ID_agente'], 
      },
      include: [
        { 
          model: Agenteinmobiliario, 
          as: 'agenteinmobiliario', 
          attributes: ['nombre', 'matricula'] 
        },
        { 
          model: Zona, 
          as: 'zona', 
          attributes: ['ID_zona', 'zona'] 
        },
        { 
          model: Tipoinmueble, 
          as: 'tipoinmueble', 
          attributes: ['ID_tipoinmueble', 'inmueble'] 
        },
        { 
          model: Estadopropiedad, 
          as: 'estadopropiedad', 
          attributes: ['ID_estadopropiedad', 'estado_propiedad'] 
        },
        { 
          model: Ambientes, 
          as: 'ambientes', 
          attributes: ['ID_ambiente', 'ambientes'] 
        },
        { 
          model: Mascota, 
          as: 'Mascota', 
          attributes: ['ID_Mascota', 'Mascota'] 
        },
        { 
          model: Imagenes, 
          as: 'imagenes', 
          attributes: ['ID_imagen', 'URL', 'estado'] 
        }
      ],
    });

    res.json({ data: consulta });
  } catch (error) {
    console.error("Error al obtener propiedades:", error);
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
// ==========HANDLER PUT - Actualizar propiedad (CORREGIDO)==========================
const actualizarPropiedad = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    titulo,
    direccion,
    precio,
    descripcion,
    geolocalizacion,
    latitud,
    longitud,
    estado,
    ID_zona,
    ID_agente,
    ID_tipoinmueble,
    ID_estadopropiedad,
    ID_ambiente,
    garage,
    balcon,
    patio,
    acepta_mascota,
    ID_Mascota
  } = req.body;

  try {
    const propiedad = await Propiedades.findByPk(id);
    
    if (!propiedad) {
      return res.status(404).json({ message: "Propiedad no encontrada" });
    }

    // Preparar datos para actualizar con conversiones de tipo
    const datosActualizados: any = {};

    // Campos de texto
    if (direccion !== undefined) datosActualizados.direccion = direccion;
    if (descripcion !== undefined) datosActualizados.descripcion = descripcion;
  
    // Campos numéricos
    if (precio !== undefined) datosActualizados.precio = Number(precio);
    if (latitud !== undefined) datosActualizados.latitud = latitud;
    if (longitud !== undefined) datosActualizados.longitud = longitud;
    
    // ID de relaciones (convertir a número o null)
    if (ID_zona !== undefined) {
      datosActualizados.ID_zona = ID_zona ? Number(ID_zona) : null;
    }
    if (ID_agente !== undefined) {
      datosActualizados.ID_agente = ID_agente ? Number(ID_agente) : null;
    }
    if (ID_tipoinmueble !== undefined) {
      datosActualizados.ID_tipoinmueble = ID_tipoinmueble ? Number(ID_tipoinmueble) : null;
    }
    if (ID_estadopropiedad !== undefined) {
      datosActualizados.ID_estadopropiedad = ID_estadopropiedad ? Number(ID_estadopropiedad) : null;
    }
    if (ID_ambiente !== undefined) {
      datosActualizados.ID_ambiente = ID_ambiente ? Number(ID_ambiente) : null;
    }
    if (ID_Mascota !== undefined) {
      datosActualizados.ID_Mascota = ID_Mascota ? Number(ID_Mascota) : null;
    }
    
    // Booleanos - convertir desde strings o booleanos
    if (estado !== undefined) {
      datosActualizados.estado = estado === 'true' || estado === true;
    }
    if (garage !== undefined) {
      datosActualizados.garage = garage === 'true' || garage === true;
    }
    if (balcon !== undefined) {
      datosActualizados.balcon = balcon === 'true' || balcon === true;
    }
    if (patio !== undefined) {
      datosActualizados.patio = patio === 'true' || patio === true;
    }
    if (acepta_mascota !== undefined) {
      datosActualizados.acepta_mascota = acepta_mascota === 'true' || acepta_mascota === true;
    }

    console.log('XX Datos a actualizar: XX', datosActualizados);

    // Actualizar con los datos preparados
    await propiedad.update(datosActualizados);

    // Devolver la propiedad actualizada con todas las relaciones
    const propiedadActualizada = await Propiedades.findByPk(id, {
      include: [
        { model: Agenteinmobiliario, as: 'agenteinmobiliario', attributes: ['nombre', 'matricula'] },
        { model: Zona, as: 'zona', attributes: ['ID_zona', 'zona'] },
        { model: Tipoinmueble, as: 'tipoinmueble', attributes: ['ID_tipoinmueble', 'inmueble'] },
        { model: Estadopropiedad, as: 'estadopropiedad', attributes: ['ID_estadopropiedad', 'estado_propiedad'] },
        { model: Ambientes, as: 'ambientes', attributes: ['ID_ambiente', 'ambientes'] },
        { model: Mascota, as: 'Mascota', attributes: ['ID_Mascota', 'Mascota'] },
        { model: Imagenes, as: 'imagenes', attributes: ['ID_imagen', 'URL', 'estado'] }
      ]
    });

    res.json({ 
      message: "Propiedad actualizada correctamente",
      data: propiedadActualizada 
    });

  } catch (error) {
    console.error("❌ Error al actualizar propiedad:", error);
    res.status(500).json({ 
      message: "Error al actualizar propiedad",
      error: error instanceof Error ? error.message : 'Error desconocido'
    });
  }
};


// =======Agregado para la actualizacion rapida del estadoprpiedad==============
const actualizarEstadoPropiedad = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ID_estadopropiedad } = req.body;

  try {
    const propiedad = await Propiedades.findByPk(id);
    if (!propiedad) {
      return res.status(404).json({ message: "Propiedad no encontrada" });
    }

    await propiedad.update({ ID_estadopropiedad });
    res.json({ data: propiedad });
  } catch (error) {
    console.error("Error al actualizar estado:", error);
    res.status(500).json({ message: "Error al actualizar estado" });
  }
};
//Agregado para la eliminancion de la propiedad pero por estado
const ocultarPropiedad = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const propiedad = await Propiedades.findByPk(id);

    if (!propiedad) {
      return res.status(404).json({ message: "Propiedad no encontrada" });
    }

    await propiedad.update({ estado: false });
    console.log("Propiedad actualizada:", propiedad.estado);


    res.json({ message: "Propiedad ocultada correctamente", data: propiedad });
  } catch (error: any) {
  console.error("Error al ocultar propiedad:", error?.message || error);
  res.status(500).json({ message: "Error al ocultar propiedad", error: error?.message || error });
}

};



const actualizarPropiedad = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    direccion,
    precio,
    descripcion,
    geolocalizacion,
    latitud,
    longitud,
    estado,
    ID_zona,
    ID_agente,
    ID_tipoinmueble,
    ID_estadopropiedad,
    ID_ambiente
  } = req.body;

  try {
    const propiedad = await Propiedades.findByPk(id);

    if (!propiedad) {
      return res.status(404).json({ message: "Propiedad no encontrada" });
    }

    await propiedad.update({
      direccion,
      precio,
      descripcion,
      geolocalizacion,
      latitud,
      longitud,
      estado,
      ID_zona,
      ID_agente,
      ID_tipoinmueble,
      ID_estadopropiedad,
      ID_ambiente
    });

    res.json({ data: propiedad });

  } catch (error) {
    console.error("Error al actualizar propiedad:", error);
    res.status(500).json({ message: "Error al actualizar propiedad" });
  }
};

export { subirPropiedades,
     obtenerPropiedadesPorId,
     obtenerListaPropiedades,

     actualizarPropiedad,
     actualizarEstadoPropiedad,
    ocultarPropiedad};

