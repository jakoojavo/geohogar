import { useEffect, useState } from 'react';
import { agenteService } from '../api/agenteService';
//automatizacion para la carga de los datos de opciones a utilizar en los select

export const useFetchOptions = () => {
  const [options, setOptions] = useState({
    tipos: [],
    zonas: [],
    agentes: [],
    estados: [],
    ambientes: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [
          tiposRes,
          zonasRes,
          agentesRes,
          estadosRes,
          ambientesRes,
        ] = await Promise.all([
          agenteService.getTiposInmueble(),
          agenteService.getZonas(),
          agenteService.getAllAgentes(),
          agenteService.getEstadosPropiedad(),
          agenteService.getAmbientes(),
        ]);

        setOptions({
          tipos: tiposRes.data,
          zonas: zonasRes.data,
          agentes: agentesRes.data,
          estados: estadosRes.data,
          ambientes: ambientesRes.data,
        });
      } catch (err) {
        setError(err.message || 'Error al cargar opciones');
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  return { options, loading, error };
};