import React, { Children, useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBox,
  faUsers,
  faUser,
  faHome,
  faThLarge
} from '@fortawesome/free-solid-svg-icons';
import {
    FaBars,
    FaCog,
    FaPercentage,
    FaBell,
    FaUserCircle,
    FaSignOutAlt,
  } from 'react-icons/fa';
//  import { SiAsana, SiGithub, SiFresh, SiLinkedin } from 'react-icons/si';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Importe os estilos
import { config } from '@fortawesome/fontawesome-svg-core';
import { logout } from '../../features/auth/auth-slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
config.autoAddCss = false; // Desabilita a adição automática de CSS para evitar conflitos


function Sidebar({children}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleItemClick = (itemName, itemLink) => {
    setSelectedItem(itemName);
    navigate("/estoque" + itemLink, {})
  };
  

  const menuItems = [
    { name: 'HOME', icon: faHome, link: '/' },
    { name: 'PRODUTOS', icon: faBox, link: '/produtos' },
    { name: 'CATEGORIAS', icon: faThLarge, link: '/categorias' },
    { name: 'FORNECEDORES', icon: faUsers, link: '/fornecedores' },
    { name: 'USUÁRIOS', icon: faUser, link: '/usuarios' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsMenuOpen(false); // Close the menu after logout
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div>
    <div className="fixed bg-gray-800 text-white h-screen w-64 flex flex-col shadow-md">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-semibold"> {selectedItem}</h2>
      </div>
      

      {/* Menu Items */}
      <nav className="p-0 flex-grow">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="mb-0">
              <button
                onClick={() => handleItemClick(item.name, item.link)}
                className={`flex items-center w-full py-4 px-4 mx-0 my-0 transition-colors duration-200 ${
                  selectedItem === item.name
                    ? 'bg-white text-gray-800 font-bold'
                    : 'hover:bg-gray-700'
                }`}
              >
                <span className="mr-2"><FontAwesomeIcon icon={item.icon} /></span>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      </div>

      {/* Conteúdo principal da página (apenas para exemplo) */}
      <div className='ml-64'>
        {/* Header */}
              <header className="bg-white shadow-md p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <button className="lg:hidden mr-4 focus:outline-none">
                    <FaBars className="text-gray-600 text-xl" />
                  </button>
                  <h1 className="text-xl font-semibold text-gray-800">Controle de Estoque</h1>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="hover:text-gray-700 focus:outline-none">
                    <FaCog className="text-gray-600 text-lg" />
                  </button>
                  <button className="hover:text-gray-700 focus:outline-none">
                    <FaPercentage className="text-gray-600 text-lg" />
                  </button>
                  <button className="hover:text-gray-700 focus:outline-none relative">
                    <FaBell className="text-gray-600 text-lg" />
                    <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                      3
                    </span>
                  </button>
                  <div className="flex items-center">
                    <FaUserCircle onClick={toggleMenu} className="text-gray-600 text-2xl mr-2" />
                    <span className="text-gray-700">Maria</span>
                    <svg
                      className="fill-current h-4 w-4 text-gray-500 ml-1"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>

                    {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10"
        >
          <div className="p-2">{"Test User"}</div>
          <div
            className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
            onClick={handleLogout}
          >
            Logout <FaSignOutAlt className="ml-2" />
          </div>
        </div> )}
                  </div>
                </div>
              </header>
      {Children.only(children)}
      </div>
      {/* Fluxo e Notificações (fora da lista principal) */}
      
      </div>
      
    
  );
}

export default Sidebar;