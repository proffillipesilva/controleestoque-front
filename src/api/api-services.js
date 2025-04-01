import authService from "./auth-service";
import categoriaService from "./categoria-service";
import fornecedorService from "./fornecedor-service";
import produtoService from "./produto-service";


const apiServices = {
  auth: authService,
  categoria: categoriaService,
  fornecedor: fornecedorService,
  produto: produtoService,
};

export default apiServices;