import React, { useState } from 'react';

function SidebarOffcanvas() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    setIsOpen(false); // Fecha o menu ao selecionar um item (opcional)
  };

  const menuItems = [
    { name: 'PRODUTOS', icon: '📦' },
    { name: 'CATEGORIAS', icon: '🗂️' },
    { name: 'FORNECEDORES', icon: '🧑‍🤝‍🧑' },
    { name: 'USUÁRIOS', icon: '👤' },
  ];

  return (
    <div>
      {/* Botão para abrir o menu (pode ser substituído por outro elemento) */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 bg-gray-300 text-gray-800 py-2 px-4 rounded-md shadow-md z-50"
      >
        Abrir Menu
      </button>

      {/* Offcanvas */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-md transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">HOME</h2>
        </div>

        {/* Menu Items */}
        <nav className="p-4">
          <ul>
            {menuItems.map((item) => (
              <li key={item.name} className="mb-2">
                <button
                  onClick={() => handleItemClick(item.name)}
                  className={`flex items-center w-full py-2 px-4 rounded-md transition-colors duration-200 ${
                    selectedItem === item.name
                      ? 'bg-white text-gray-800 font-bold'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Fluxo e Notificações (fora da lista principal, se desejar) */}
        
      </div>

      {/* Overlay para fechar o menu ao clicar fora */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"
        ></div>
      )}

      {/* Conteúdo principal da página (apenas para exemplo) */}
      <div className="ml-0 transition-all duration-300 ease-in-out">
        {isOpen && <div className="w-64"></div>} {/* Espaço para o menu */}
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Conteúdo Principal</h1>
          <p>Este é o conteúdo principal da sua página.</p>
          {selectedItem && <p className="mt-4">Item selecionado: {selectedItem}</p>}
        </div>
      </div>
    </div>
  );
}

export default SidebarOffcanvas;