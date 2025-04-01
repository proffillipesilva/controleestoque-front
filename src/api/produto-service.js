import axiosInstance from "../shared/utils/axios-config";

const produtoService = {
    createProduto: async (produtoData) => {
      try {
        const response = await axiosInstance.post('/produtos', produtoData);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  
    getProdutos: async () => {
      try {
        const response = await axiosInstance.get('/produtos');
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  
    updateProduto: async (id, produtoData) => {
      try {
        const response = await axiosInstance.put(`/produtos?id=${id}`, produtoData);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  };
  
  export default produtoService;