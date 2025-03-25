import logo from './logo.svg';
import './App.css';
import SplashScreen from './pages/splash-screen/SplashScreen';
import SidebarOffcanvas from './shared/components/SidebarOffCanvas';
import Sidebar from './shared/components/Sidebar';
import CategoriasPage from './pages/categorias/CategoriasPage';
import ProductDetails from './pages/products/[id]/ProductDetails';
import NewProductForm from './pages/products/components/NewProductForm';

function App() {
  return (
    <div className="App">
      <Sidebar >
        <div>
        <CategoriasPage />
        <ProductDetails />
        <NewProductForm />
        </div>
      </Sidebar>
    </div>
  );
}

export default App;
