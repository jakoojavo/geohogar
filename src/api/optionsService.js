import { agenteService } from './agenteService';
//getOptios para la  agrupacion de  multiples llamadas a la API en una sola funcion

export const getOptions = async () => {
  const [tipos, zonas, agentes, estados, ambientes] = await Promise.all([
    agenteService.getTiposInmueble(),
    agenteService.getZonas(),
    agenteService.getAllAgentes(),
    agenteService.getEstadosPropiedad(),
    agenteService.getAmbientes(),
  ]);

  return {
    tipos: tipos.data,     
    zonas: zonas.data,
    agentes: agentes.data,
    estados: estados.data,
    ambientes: ambientes.data,
  };
};