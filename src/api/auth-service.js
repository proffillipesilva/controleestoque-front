import axiosInstance from "../shared/utils/axios-config";

const authService = {
    login: async (credentials) => {
      try {
        const response = await axiosInstance.post('/auth/login', credentials);
        return response.data;
      } catch (error) {
        throw error;
      }
    },

    logout: async () => {
        try {
          const response = await axiosInstance.delete('/auth/logout');
          return response.data;
        } catch (error) {
          throw error;
        }
      },
  };
  
  export default authService;