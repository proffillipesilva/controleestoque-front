import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import * as reactIcons from 'react-icons/fa';

function NewCategoriaForm({currentData, setDataForm}) {

  const Icon = currentData?.icon ? reactIcons[currentData.icon] : null;

  return (
    <div className="bg-gray-100  p-6">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">NOVA CATEGORIA</h2>
        <form className="space-y-4">
          {/* Nome */}
          
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name='nome'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={currentData?.nome}
              onChange={(e) => setDataForm({...currentData, [e.target.name]: e.target.value })}
            />
          </div>

          {/* Descrição */}
          <div>
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
              Descrição
            </label>
            <textarea
              id="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name='descricao'
              value={currentData?.descricao}
              onChange={(e) => setDataForm({...currentData, [e.target.name]: e.target.value })}
              rows="3"
            ></textarea>
          </div>

          {/* Icone */}
          <div>
            <label htmlFor="icon" className="block text-gray-700 text-sm font-bold mb-2">
              Icone
            </label>
            <div className="relative">
              <select
                id="icon"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                value={currentData?.icon}
                name='icon'
                onChange={(e) => setDataForm({...currentData, [e.target.name]: e.target.value })}
              >
                
                <option value="" disabled>
                  Selecione o Icone {currentData?.icon}
                </option>
                {Object.keys(reactIcons).map((i) => {
                  return (
                  <option key={i} value={i}>
                      {i}
                  </option>
                )})}
              </select>
              
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              
            </div>
            <div className='flex items-center w-3/5'>
              <span className="my-3 mx-auto mr-2 text-6xl">{Icon != null ?<Icon  /> : ""}</span>
              </div>
          </div>

          

          
        </form>
      </div>
    </div>
  );
}

export default NewCategoriaForm;