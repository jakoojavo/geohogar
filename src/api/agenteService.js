import api from './axiosConfig.js';

export const agenteService = {
  // ========== AGENTES INMOBILIARIOS ==========
  // Registrar un nuevo agente
  registerAgente: async (agenteData) => {
    try {
      console.log("Datos que se envían al backend:", agenteData);
      const response = await api.post('/agenteinmobiliario', agenteData);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Error en el servicio:", error);
      throw new Error(`Error al registrar agente: ${errorMessage}`);
    }
  },

  // Obtener todos los agentes
  getAllAgentes: async () => {
    try {
      const response = await api.get('/agenteinmobiliario');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Error al obtener agentes: ${errorMessage}`);
    }
  },

  // Obtener un agente por ID
  getAgenteById: async (id) => {
    try {
      const response = await api.get(`/agenteinmobiliario/${id}`);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Error al obtener agente: ${errorMessage}`);
    }
  },

  // Actualizar un agente
  updateAgente: async (id, agenteData) => {
    try {
      const response = await api.put(`/agenteinmobiliario/${id}`, agenteData);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Error al actualizar agente: ${errorMessage}`);
    }
  },

  // ========== PROPIEDADES ==========
  uploadProperty: async (propertyData) => {
    try {
      const response = await api.post('/propiedades', propertyData);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Error al cargar propiedad: ${errorMessage}`);
    }
  },

  // Obtener todas las propiedades
  getAllProperties: async () => {
    try {
      const response = await api.get('/propiedades');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Error al obtener propiedades: ${errorMessage}`);
    }
  },

  // Obtener una propiedad por ID
  getPropertyById: async (id) => {
    try {
      const response = await api.get(`/propiedades/${id}`);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Error al obtener propiedad: ${errorMessage}`);
    }
  },

  // Actualizar una propiedad
  updateProperty: async (id, propertyData) => {
    try {
      const response = await api.put(`/propiedades/${id}`, propertyData);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Error al actualizar propiedad: ${errorMessage}`);
    }
  },

  // Eliminar una propiedad (Falta agregar en el backend )
  deleteProperty: async (id) => {
    try {
      const response = await api.delete(`/propiedades/${id}`);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Error al eliminar propiedad: ${errorMessage}`);
    }
  },

  // ========== ZONA ==========
  // Obtener zonas
  getZonas: async () => {
    try {
      const response = await api.get('/zona');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Error al obtener zonas: ${errorMessage}`);
    }
  },

  // Obtener tipos de inmuebles
  getTiposInmueble: async () => {
    try {
      const response = await api.get('/tipoinmueble');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Error al obtener tipos de inmueble: ${errorMessage}`);
    }
  },

  // Obtener estados de propiedades
  getEstadosPropiedad: async () => {
    try {
      const response = await api.get('/estadopropiedad');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Error al obtener estados de propiedad: ${errorMessage}`);
    }
  },

  // Obtener ambientes
  getAmbientes: async () => {
    try {
      const response = await api.get('/ambientes');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Error al obtener ambientes: ${errorMessage}`);
    }
  },

  // Obtener operaciones
  getOperaciones: async () => {
    try {
      const response = await api.get('/operacion');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Error al obtener operaciones: ${errorMessage}`);
    }
  },

  // Obtener consultas
  getConsultas: async () => {
    try {
      const response = await api.get('/consulta');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Error al obtener consultas: ${errorMessage}`);
    }
  },

  // Obtener estados de consulta
  getEstadosConsulta: async () => {
    try {
      const response = await api.get('/estadoconsulta');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Error al obtener estados de consulta: ${errorMessage}`);
    }
  },

  // ========== BÚSQUEDAS AVANZADAS ==========
  // Buscar propiedades por dirección o zona (Falta agregar al backend)
  searchProperties: async (query) => {
    try {
      const response = await api.get(`/propiedades?search=${query}`);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Error al buscar propiedades: ${errorMessage}`);
    }
  }
};