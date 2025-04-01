import axiosInstance from '../shared/utils/axios-config';

const categoriaService = {
  createCategoria: async (categoriaData) => {
    try {
      const response = await axiosInstance.post('/categorias', categoriaData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getCategorias: async () => {
    try {
      const response = await axiosInstance.get('/categorias');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default categoriaService;