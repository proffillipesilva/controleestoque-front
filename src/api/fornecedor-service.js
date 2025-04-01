import axiosInstance from "../shared/utils/axios-config";

const fornecedorService = {
    createFornecedor: async (fornecedorData) => {
      try {
        const response = await axiosInstance.post('/fornecedores', fornecedorData);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  
    getFornecedores: async () => {
      try {
        const response = await axiosInstance.get('/fornecedores');
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  };
  
  export default fornecedorService;