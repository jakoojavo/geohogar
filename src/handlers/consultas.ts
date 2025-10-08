import { Request,Response } from "express";
import Consulta from "../models/Consultas.models";
import Propiedades from "../models/Propiedades.models";
import Estadoconsulta from "../models/Estadoconsulta.models";
import Agenteinmobiliario from "../models/Agenteinmobiliario.models";
import Zona from "../models/Zona.models";
import Tipoinmueble from "../models/Tipoinmueble.models";
import Estadopropiedad from "../models/Estadopropiedad.models";
import Ambientes from "../models/Ambientes.models";
import Imagen from "../models/Imagen.models";



const subirConsulta  = async ( req:Request, res: Response ) =>{
    try{
        const consulta=await Consulta.create(req.body)
        res.json({data:consulta})
    } catch(error){
        console.error('Error al crear consulta:', error);
        res.status(500).json({ error: 'Error al crear consulta', details: error });
    }
}


const obtenerListaConsulta = async (req: Request, res: Response) => {
  try {
    const consultas = await Consulta.findAll({
      include: [
        {
          model: Propiedades,
          attributes: [
            "ID_propiedades",
            "direccion",
            "precio",
            "descripcion",
            "latitud",
            "longitud",
            "estado"
          ],
          include: [
            {
              model: Agenteinmobiliario,
              attributes: ["nombre", "matricula", "telefono", "email"]
            },
            { model: Zona, attributes: ["zona"] },
            { model: Tipoinmueble, attributes: ["inmueble"] },
            { model: Estadopropiedad, attributes: ["estado_propiedad"] },
            { model: Ambientes, attributes: ["ambientes"] },
            { model: Imagen, attributes: ["URL", "estado"] }
          ]
        },
        {
          model: Estadoconsulta,
          attributes: ["estado_consulta"]
        }
      ],
      order: [["createdAt", "DESC"]]
    });

    res.json({ data: consultas });
  } catch (error) {
    console.error("Error al obtener el listado de consultas:", error);
    res.status(500).json({ message: "Error al obtener el listado de consultas" });
  }
};


const obtenerConsultaPorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const consulta = await Consulta.findByPk(id, {
      include: [
        {
          model: Propiedades,
          attributes: [
            "ID_propiedades",
            "direccion",
            "precio",
            "descripcion",
            "latitud",
            "longitud",
            "estado"
          ],
          include: [
            {
              model: Agenteinmobiliario,
              attributes: ["nombre", "matricula", "telefono", "email"]
            },
            { model: Zona, attributes: ["zona"] },
            { model: Tipoinmueble, attributes: ["inmueble"] },
            { model: Estadopropiedad, attributes: ["estado_propiedad"] },
            { model: Ambientes, attributes: ["ambientes"] },
            { model: Imagen, attributes: ["URL", "estado"] }
          ]
        },
        {
          model: Estadoconsulta,
          attributes: ["estado_consulta"]
        }
      ]
    });

    if (!consulta) {
      return res.status(404).json({ message: "Consulta no encontrada" });
    }

    res.json({ data: consulta });
  } catch (error) {
    console.error("Error al obtener consulta por ID:", error);
    res.status(500).json({ message: "Error al obtener la consulta" });
  }
};




const actualizarConsulta = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre_cliente, email, Mensaje, telefono, estado, ID_propiedades, ID_estadoconsulta } = req.body;

  try {
    const consulta = await Consulta.findByPk(id);

    if (!consulta) {
      return res.status(404).json({ message: "Consulta no encontrada" });
    }

    await consulta.update({ nombre_cliente, email, Mensaje, telefono, estado, ID_propiedades, ID_estadoconsulta });

    res.json({ data: consulta });

  } catch (error) {
    console.error("Error al actualizar consulta:", error);
    res.status(500).json({ message: "Error al actualizar consulta" });
  }
};

export { subirConsulta,
     obtenerConsultaPorId,
     obtenerListaConsulta,
    actualizarConsulta };