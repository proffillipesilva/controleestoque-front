import logo from './logo.svg';
import './App.css';
import SplashScreen from './pages/splash-screen/SplashScreen';
import SidebarOffcanvas from './shared/components/SidebarOffCanvas';
import Sidebar from './shared/components/Sidebar';
import CategoriasPage from './pages/categorias/CategoriasPage';
import ProductDetails from './pages/products/[id]/ProductDetails';
import NewProductForm from './pages/products/components/NewProductForm';
import Modal from './shared/components/Modal';
import { useState } from 'react';
import ProductsPage from './pages/products/ProductsPage';

function App() {
  const [form, setForm] = useState({})
  const [open, setOpen] = useState(true)
  return (
    <div className="App">
      <Sidebar >
        <div>
        <CategoriasPage />
        {form && JSON.stringify(form)}
        <ProductDetails />
        <ProductsPage />
        
        </div>
      </Sidebar>
    </div>
  );
}

export default App;
