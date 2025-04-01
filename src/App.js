import logo from './logo.svg';
import './App.css';
import SplashScreen from './pages/splash-screen/SplashScreen';
import Sidebar from './shared/components/Sidebar';
import CategoriasPage from './pages/categorias/CategoriasPage';
import ProductDetails from './pages/products/[id]/ProductDetails';
import { useState } from 'react';
import ProductsPage from './pages/products/ProductsPage';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FeedbackModal from './shared/components/FeedbackModal';
import HomePage from './pages/home-page/HomePage';


function App() {
  const [form, setForm] = useState({})
  const [open, setOpen] = useState(true)

  const token = useSelector((state) => state.auth.token);


  return (

    <Router>
      <Routes>
      <Route
          index
          element={token ? <Navigate to="/estoque" /> :

            <SplashScreen />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/estoque" /> :

            <SplashScreen />}
        />


        <Route
          path="/estoque/*"
          element={token ?
            <Sidebar >
              <Routes >
                <Route index element={<HomePage />} />
                <Route path='/categorias' element={<CategoriasPage />} />
                <Route path='/produtos' element={<ProductsPage />} />
                <Route path='/produtos/:id' element={<ProductDetails />} />
                <Route path='*' element={<CategoriasPage />} />
              </Routes>
            </Sidebar>
            : <Navigate to="/login" />}
        />

      </Routes>
      <FeedbackModal />
    </Router>


  );
}

export default App;
